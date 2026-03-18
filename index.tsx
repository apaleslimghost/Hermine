import Cytoscape from 'cytoscape'
import type { FcoseLayoutOptions } from 'cytoscape-fcose'
import fcose from 'cytoscape-fcose'
import { useLayoutEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import styled, { createGlobalStyle } from 'styled-components'
import { constraints, elements } from './data'

Cytoscape.use(fcose)

const runTypes = ['green', 'blue', 'red', 'black']

const cy = Cytoscape({
	// maxZoom: 1,
	autoungrabify: true,
	autounselectify: true,
	style: [
		{
			selector: 'node',
			style: {
				shape: 'rectangle',
				width: 4,
				height: 4,
				'background-color': (node: Cytoscape.NodeSingular): string =>
					Array.from(node.connectedEdges()).reduce(
						(colour: string, edge: Cytoscape.EdgeSingular) =>
							runTypes.includes(edge.data('type'))
								? runTypes[Math.min(runTypes.indexOf(colour), runTypes.indexOf(edge.data('type')))]
								: colour,
						'black',
					),
				'corner-radius': '2px',
			},
		},
		{
			selector: '[label]',
			style: {
				label: 'data(label)',
				'font-size': '8px',
				'min-zoomed-font-size': 3,
			},
		},
		{
			selector: 'edge',
			style: {
				'text-rotation': 'autorotate',
				width: 2,
				'z-index': (edge: Cytoscape.EdgeSingular): number =>
					5 - runTypes.indexOf(edge.data('type')),
				'curve-style': 'round-segments',
				'source-arrow-shape': 'circle',
				'target-arrow-shape': 'circle',
				'source-endpoint': 'inside-to-node',
				'target-endpoint': 'inside-to-node',
				'arrow-scale': 0.5,
			},
		},
		{
			selector: 'edge[type="green"],edge[type="blue"],edge[type="red"],edge[type="black"]',
			style: {
				'line-color': 'data(type)',
				'text-outline-width': 1,
				'text-outline-color': 'white',
				'mid-target-arrow-shape': 'chevron',
				'mid-target-arrow-color': 'data(type)',
				'arrow-scale': 1,
				width: 4,
				'target-arrow-shape': 'none',
				'source-arrow-shape': 'none',
				'curve-style': 'round-segments',
			},
		},
		{
			selector: '[direction]',
			style: {
				'taxi-direction': (edge: Cytoscape.EdgeSingular) => edge.data('direction'),
			},
		},
		{
			selector: '[turnDistance]',
			style: {
				'taxi-turn': (edge: Cytoscape.EdgeSingular) => edge.data('turnDistance'),
			},
		},
		{
			selector: 'edge.tunnel',
			style: {
				'line-style': 'dashed',
			},
		},
	],
})

const _StopSelect = (props: React.SelectHTMLAttributes<HTMLSelectElement>) => (
	<select defaultValue="" {...props}>
		<option disabled value="" />
		{elements.map((node) =>
			['village', 'picnic'].includes(node.data.type) ? (
				<option key={node.data.id} value={node.data.id}>
					{getIcon(node.data.type)} {node.data.label}
				</option>
			) : null,
		)}
	</select>
)

const _Filter = ({
	onChange,
	items,
}: {
	onChange?: (values: string[]) => void
	items: string[]
}) => (
	<select
		multiple
		onChange={(event) => {
			onChange?.(Array.from(event.target.selectedOptions, (o) => o.value))
		}}
	>
		<optgroup label="Exclude...">
			{items.map((item) => (
				<option key={item} value={item}>
					{getIcon(item)} {item}
				</option>
			))}
		</optgroup>
	</select>
)

const List = styled.ul`
	margin: 0;
	padding: 0 0.5rem;
	list-style: none;
`

const ListItem = styled.li`
	padding: 0.5rem 0;
	border-bottom: 1px solid #ccc;
`

const GlobalStyles = createGlobalStyle`
	body {
		font-family: 'Galaxie Polaris', sans-serif;
	}
`

const Icon = styled.span`
	margin-right: 0.5em;
`

const getIcon = (type: string): string =>
	({
		green: '🟢',
		blue: '🔵',
		red: '🔴',
		black: '⚫️',
		funitel: '🚡',
		telecabine: '🚡',
		telesiege: '🛋',
		telepherique: '🚠',
		teleski: '🏗️',
		tapis: '🪄',
		village: '🏘️',
		picnic: '🍽️',
	})[type] ?? '⁉️'

const StopIcon = ({ type }: { type: string }) => <Icon>{getIcon(type)}</Icon>

const Stop = ({
	name,
	type,
	length,
}: {
	name: string
	type?: string
	length?: number
}) =>
	type ? (
		<ListItem>
			<StopIcon type={type} />
			<strong>{name}</strong>
			{length && (
				<>
					{' '}
					{length}
					{['green', 'blue', 'red', 'black'].includes(type) ? 'km' : ' mins'}
				</>
			)}
		</ListItem>
	) : null

const Fullscreen = styled.div`
	width: 100vw;
	height: 100vh;
`

const _Flex = styled.div<{ $vertical?: boolean }>`
	display: flex;
	gap: 1rem;
	flex-direction: ${({ $vertical }) => ($vertical ? 'column' : 'row')};
`

const Graph = styled.section`
	height: 100vh;
	flex-basis: 50vw;
`

Object.assign(window, { cy })

const App = () => {
	const cytoscapeContainer = useRef<HTMLElement>(null)

	useLayoutEffect(() => {
		if (!cytoscapeContainer.current) return

		cy.add(elements)
		cy.mount(cytoscapeContainer.current)

		cy.fit()

		for (const edge of cy.edges()) {
			const { x: tx, y: ty } = edge.target().position()
			const { x: sx, y: sy } = edge.source().position()

			const d = Math.sqrt((sx - tx) ** 2 + (sy - ty) ** 2)

			edge.scratch('_irlCrowFliesDistance', d)
		}

		const layoutOptions: FcoseLayoutOptions = {
			name: 'fcose',
			randomize: false,
			animate: false,
			idealEdgeLength(edge: Cytoscape.EdgeSingular) {
				return edge.scratch('_irlCrowFliesDistance')
			},
			nodeRepulsion: 80000,
			uniformNodeDimensions: true,
			...constraints,
			stop() {
				const edges = cy.elements(
					'edge[type="green"],edge[type="blue"],edge[type="red"],edge[type="black"]',
				)

				for (const edge of edges) {
					const label: string = edge.data('label')
					const prev = edge.source().incomers(`edge[label="${label}"]`)
					const next = edge.target().outgoers(`edge[label="${label}"]`)

					const { x: sx, y: sy } = edge.source().position()
					const { x: tx, y: ty } = edge.target().position()

					const dx = tx - sx
					const dy = ty - sy

					const d = Math.sqrt(dx * dx + dy * dy)

					edge.scratch('_dx', dx)
					edge.scratch('_dy', dy)
					edge.scratch('_edgeLength', d)

					if (next.length && next[0].isEdge()) {
						const { x: nx, y: ny } = next[0].target().position()

						edge.scratch(
							'_targetDirection',
							Math.abs(sx - nx) > Math.abs(sy - ny) ? 'horizontal' : 'vertical',
						)
					} else {
						edge.scratch(
							'_targetDirection',
							Math.abs(dx) > Math.abs(dy) ? 'horizontal' : 'vertical',
						)
					}

					if (prev.length && prev[0].isEdge()) {
						const { x: px, y: py } = prev[0].source().position()

						edge.scratch(
							'_sourceDirection',
							Math.abs(tx - px) > Math.abs(ty - py) ? 'horizontal' : 'vertical',
						)
					} else {
						edge.scratch(
							'_sourceDirection',
							Math.abs(dx) > Math.abs(dy) ? 'horizontal' : 'vertical',
						)
					}
				}

				const bendOffset = 0.2

				cy.elements(
					'edge[type="green"],edge[type="blue"],edge[type="red"],edge[type="black"]',
				).style({
					'segment-weights': (edge: Cytoscape.EdgeSingular) => {
						if (edge.scratch('_targetDirection') === edge.scratch('_sourceDirection')) {
							return [bendOffset, 1 - bendOffset]
						}
						const dy: number = edge.scratch('_dy')
						const d: number = edge.scratch('_edgeLength')
						const sourceDirection: string = edge.scratch('_sourceDirection')
						const w = (dy * dy) / (d * d)
						return [sourceDirection === 'horizontal' ? 1 - w : w]
					},
					'segment-distances': (edge: Cytoscape.EdgeSingular) => {
						const dx: number = edge.scratch('_dx')
						const dy: number = edge.scratch('_dy')
						const d: number = edge.scratch('_edgeLength')
						const targetDirection: string = edge.scratch('_targetDirection')
						const sourceDirection: string = edge.scratch('_sourceDirection')

						if (targetDirection === sourceDirection) {
							const h = targetDirection === 'horizontal'
							const d1 = h ? dx : dy
							const d2 = h ? dy : -dx
							const sd = (bendOffset * d * d2) / d1
							return [-sd, sd]
						}

						const sd = (dx * dy) / d
						return [sourceDirection === 'horizontal' ? -sd : sd]
					},
				})
			},
		}

		cy.layout(layoutOptions).run()
	}, [])

	return (
		<>
			<GlobalStyles />

			<Fullscreen>
				<Graph ref={cytoscapeContainer} />
			</Fullscreen>
		</>
	)
}

const container = document.querySelector('main')
if (!container) throw new Error('No <main> element found')
createRoot(container).render(<App />)

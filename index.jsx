import React, { useState, useMemo, useRef, useLayoutEffect, useEffect } from 'react'
import { render } from 'react-dom'
import { elements, constraints } from './data'
import minBy from 'lodash.minby'
import styled, { createGlobalStyle } from 'styled-components'
import colours from '@quarterto/colours'
import Cytoscape from 'cytoscape'
import fcose from 'cytoscape-fcose';

Cytoscape.use( fcose );

const runTypes = ['green', 'blue', 'red', 'black']

const cy = new Cytoscape({
	// maxZoom: 1,
	autoungrabify: true,
	autounselectify: true,
	style: [
		{
			selector: 'node',
			style: {
				shape: 'square',
				width: 4,
				height: 4,
				'background-color'(node) {
					return Array.from(node.connectedEdges()).reduce(
						(colour, edge) => runTypes.includes(edge.data('type'))
							? runTypes[Math.min(runTypes.indexOf(colour), runTypes.indexOf(edge.data('type')))]
							: colour,
						'black'
					)
				},
				'corner-radius': 2,
			}
		},
		{
			selector: '[label]',
			style: {
				'label': 'data(label)',
				"font-size": '8px',
				'min-zoomed-font-size': '3px'
			}
		},
		{
			selector: 'edge',
			style: {
				'text-rotation': 'autorotate',
				width: 2,
				'z-index'(edge) {
					return 5 - runTypes.indexOf(edge.data('type'))
				},
				'curve-style': 'round-segments',
				'source-arrow-shape': 'circle',
				'target-arrow-shape': 'circle',
				'source-endpoint': 'inside-to-node',
				'target-endpoint': 'inside-to-node',
				'arrow-scale': 0.5,
			}
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
				"target-arrow-shape": 'none',
				'source-arrow-shape': 'none',
				'curve-style': 'round-segments',
			}
		},
		{
			selector: '[direction]',
			style: {
				'taxi-direction': 'data(direction)'
			}
		},
		{
			selector: '[turnDistance]',
			style: {
				'taxi-turn': 'data(turnDistance)'
			}
		},
		{
			selector: 'edge.tunnel',
			style: {
				'line-style': 'dashed'
			}
		}
	]
})

const StopSelect = props => (
	<select defaultValue='' {...props}>
		<option disabled value='' />
		{elements.map(node =>
			['village', 'picnic'].includes(node.data.type) ? (
				<option key={node.data.id} value={node.data.id}>
					{getIcon(node.data.type)} {node.data.label}
				</option>
			) : null,
		)}
	</select>
)

const Filter = ({ props, onChange, items }) => (
	<select
		multiple
		onChange={event => {
			if (onChange) {
				onChange(Array.from(event.target.selectedOptions, o => o.value))
			}
		}}
	>
		<optgroup label='Exclude...'>
			{items.map(item => (
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
	border-bottom: 1px solid ${colours.steel.lightest};
`

const GlobalStyles = createGlobalStyle`
	body {
		font-family: 'Galaxie Polaris';
		color: ${colours.steel.darkest};
	}
`

const Icon = styled.span`
	margin-right: 0.5em;
`

const getIcon = type =>
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
	}[type] || '⁉️')

const StopIcon = ({ type }) => <Icon>{getIcon(type)}</Icon>

const Stop = ({ name, type, length }) =>
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

const Path = ({ from, to, runFilter, liftFilter }) => {
	const path = useMemo(() => getPath(from, to, runFilter, liftFilter), [from, to, runFilter, liftFilter])

	return (
		<List>
			{path.length === 0 ? (
				<ListItem>
					⚠️ no path from <strong>{from}</strong> to <strong>{to}</strong>
					{exclude.length > 0 && (
						<>
							{' '}
							(excluding {exclude.map(x => `${getIcon(x)} ${x}`).join(', ')})
						</>
					)}
				</ListItem>
			) : (
				path.map(p => <Stop key={p} name={p} {...data[p]} />)
			)}
		</List>
	)
}

const Fullscreen = styled.div`
	width: 100vw;
	height: 100vh;
`

const Flex = styled.div`
	display: flex;
	gap: 1rem;
	flex-direction: ${({ vertical }) => vertical ? 'column' : 'row'};
`

const Graph = styled.section`
	height: 100vh;
	flex-basis: 50vw;
`

window.cy = cy

const App = () => {
	const [from, setFrom] = useState()
	const [to, setTo] = useState()
	const [runFilter, setRunFilter] = useState([])
	const [liftFilter, setLiftFilter] = useState([])

	const cytoscapeContainer = useRef()

	useLayoutEffect(() => {
		cy.add(elements)
		cy.mount(cytoscapeContainer.current)

		cy.fit()

		cy.edges().forEach(
			(edge) => {
				const { x: tx, y: ty } = edge.target().position()
				const { x: sx, y: sy } = edge.source().position()

				const d = Math.sqrt(
					Math.pow(sx - tx, 2) +
					Math.pow(sy - ty, 2)
				)

				edge.scratch('_irlCrowFliesDistance', d)
			}
		)

		cy.elements().on('click', evt => console.log(evt.target.data('id')))

		cy.layout({
			name: 'fcose',
			randomize: false,
			animate: false,
			idealEdgeLength(edge) {
				return edge.scratch('_irlCrowFliesDistance')
			},
			nodeRepulsion: 80000,
			uniformNodeDimensions: true,
			...constraints,
			stop() {
				cy.elements('edge[type="green"],edge[type="blue"],edge[type="red"],edge[type="black"]').forEach(edge => {
					const label = edge.data('label')
					const prev = edge.source().incomers(`edge[label="${label}"]`)
					const next = edge.target().outgoers(`edge[label="${label}"]`)

					const { x: sx, y: sy } = edge._private.source._private.position
					const { x: tx, y: ty } = edge._private.target._private.position

					const dx = tx - sx
					const dy = ty - sy

					const d = Math.sqrt(dx * dx + dy * dy)

					edge.scratch('_dx', dx)
					edge.scratch('_dy', dy)
					edge.scratch('_edgeLength', d)

					if(next.length) {
						const { x: nx, y: ny } = next[0]._private.target._private.position

						edge.scratch(
							'_targetDirection',
							Math.abs(sx - nx) > Math.abs(sy - ny) ? 'horizontal' : 'vertical'
						)
					} else {
						edge.scratch(
							'_targetDirection',
							Math.abs(dx) > Math.abs(dy) ? 'horizontal' : 'vertical'
						)
					}

					if(prev.length) {
						const { x: px, y: py } = prev[0]._private.source._private.position
						edge.scratch(
							'_sourceDirection',
							Math.abs(tx - px) > Math.abs(ty - py) ? 'horizontal' : 'vertical'
						)
					} else {
						edge.scratch(
							'_sourceDirection',
							Math.abs(dx) > Math.abs(dy) ? 'horizontal' : 'vertical'
						)
					}
				})

				const bendOffset = 0.2

				cy.elements('edge[type="green"],edge[type="blue"],edge[type="red"],edge[type="black"]').style({
					'segment-weights'(edge) {
						if(edge.scratch('_targetDirection') === edge.scratch('_sourceDirection')) {
							return [bendOffset, 1 - bendOffset]
						} else {
							const { _dy: dy, _edgeLength: d, _sourceDirection } = edge.scratch()
							const w = (dy * dy) / (d * d)
							return [_sourceDirection === 'horizontal' ? 1 - w : w]
						}
					},
					'segment-distances'(edge) {
						const { _dx: dx, _dy: dy, _edgeLength: d, _targetDirection } = edge.scratch()

						if(edge.scratch('_targetDirection') === edge.scratch('_sourceDirection')) {
							const h = _targetDirection === 'horizontal'
							const d1 = h ? dx : dy
							const d2 = h ? dy : -dx

							const sd = bendOffset * d * d2/d1

							return [
								-sd,
								sd
							]
						} else {
							const { _dx: dx, _dy: dy, _edgeLength: d, _sourceDirection } = edge.scratch()
							const sd = (dx * dy) / d
							return [ _sourceDirection === 'horizontal' ? -sd : sd ]
						}
					}
				})
			}
		}).run()

	}, [cytoscapeContainer.current])

	return (
		<>
			<GlobalStyles />

			<Fullscreen>
				<Graph ref={cytoscapeContainer} />
			</Fullscreen>
		</>
	)
}

render(<App />, document.querySelector('main'))

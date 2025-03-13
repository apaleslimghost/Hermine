import React, { useState, useMemo, useRef, useLayoutEffect } from 'react'
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
			selector: 'node:childless',
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
				'source-label': 'data(label)',
				'source-text-offset': '50%',
				'font-size': '6px'
			}
		},
		{
			selector: 'edge[type="green"],edge[type="blue"],edge[type="red"],edge[type="black"]',
			style: {
				'line-color': 'data(type)',
				'text-outline-width': 1,
				'text-outline-color': 'data(type)',
				color: 'white',
			}
		},
		{
			selector: 'edge',
			style: {
				'text-rotation': 'autorotate',
				width(edge) {
					return runTypes.includes(edge.data('type')) ? 4 : 2
				},
				'z-index'(edge) {
					return 5 - runTypes.indexOf(edge.data('type'))
				},
				'curve-style'(edge) {
					return runTypes.includes(edge.data('type')) ? 'round-taxi' : 'round-segments'
				},
				'source-arrow-shape'(edge) {
					return runTypes.includes(edge.data('type')) ? 'none' : 'circle'
				},
				'target-arrow-shape'(edge) {
					return runTypes.includes(edge.data('type')) ? 'none' : 'circle'
				},
				'arrow-scale': 0.5,
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

		cy.nodes().forEach(
			(node) => node.scratch('_originalPosition', node.position())
		)

		cy.elements().on('click', evt => console.log(evt.target.data('id')))

		cy.elements('node,edge[type="green"],edge[type="blue"],edge[type="red"],edge[type="black"]').layout({
			name: 'fcose',
			randomize: false,
			idealEdgeLength(edge) {
				const { x: tx, y: ty } = edge.target().scratch('_originalPosition')
				const { x: sx, y: sy } = edge.source().scratch('_originalPosition')

				return Math.sqrt(
					Math.pow(sx - tx, 2) +
					Math.pow(sy - ty, 2)
				)
			},
			nodeRepulsion: 60000,
			...constraints
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

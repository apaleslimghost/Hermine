import React, { useState, useMemo, useRef, useLayoutEffect } from 'react'
import { render } from 'react-dom'
import elements from './data'
import minBy from 'lodash.minby'
import styled, { createGlobalStyle } from 'styled-components'
import colours from '@quarterto/colours'
import Cytoscape from 'cytoscape'
import coseBilkent from 'cytoscape-cose-bilkent';

Cytoscape.use( coseBilkent );

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
				'label': 'data(label)',
			}
		},
		{
			selector: 'edge[type="green"],edge[type="blue"],edge[type="red"],edge[type="black"]',
			style: {
				'line-color': 'data(type)',
			}
		},
		{
			selector: 'edge',
			style: {
				'text-rotation': 'autorotate',
				'text-outline-width': 1,
				'text-outline-color': 'white',
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
				'arrow-scale': 0.5
			}
		},
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

	const [model, setModel] = useState(elements)

	const cytoscapeContainer = useRef()

	useLayoutEffect(() => {
		cy.add(elements)
		cy.mount(cytoscapeContainer.current)

		cy.on('layoutstop', () => {
			setModel(
				cy.elements().jsons()
			)
		})

		cy.elements('node,edge[type="green"],edge[type="blue"],edge[type="red"],edge[type="black"]').layout({
			name: 'cose-bilkent',
			randomize: false,
			idealEdgeLength: 100,
			nodeRepulsion: 60000,
		}).run()

	}, [cytoscapeContainer.current])

	return (
		<>
			<GlobalStyles />

			<Fullscreen>
				<Flex>
					<Flex vertical>
						{/* <Flex style={{ flex: 0 }}>
							<StopSelect value={from} onChange={ev => setFrom(ev.target.value)} />
							<StopSelect value={to} onChange={ev => setTo(ev.target.value)} />
							<Filter
								items={['green', 'blue', 'red', 'black']}
								onChange={setRunFilter}
							/>
							<Filter
								items={[
									'funitel',
									'telecabine',
									'telesiege',
									'telepherique',
									'teleski',
									'tapis',
								]}
								onChange={setLiftFilter}
							/>
						</Flex> */}


						{/* {from && to && (
							<Path {...{ from, to, runFilter, liftFilter}} />
						)} */}

						<textarea style={{ flex: 3, overflowY: 'scroll' }} value={JSON.stringify(model, null, 2)} readOnly />
					</Flex>

					<Graph ref={cytoscapeContainer} />
				</Flex>
			</Fullscreen>
		</>
	)
}

render(<App />, document.querySelector('main'))

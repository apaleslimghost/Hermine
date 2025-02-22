import React, { useState, useMemo, useRef, useLayoutEffect } from 'react'
import { render } from 'react-dom'
import elements from './data'
import minBy from 'lodash.minby'
import styled, { createGlobalStyle } from 'styled-components'
import colours from '@quarterto/colours'
import Cytoscape from 'cytoscape'
import dagre from 'cytoscape-dagre';

Cytoscape.use( dagre );

const runTypes = ['green', 'blue', 'red', 'black']

const cy = new Cytoscape({
	elements,
	maxZoom: 1,
	style: [
		{
			selector: 'node',
			style: {
				'label': 'data(label)',
				width(node) {
					return node.data('label') ? 8 : 4
				},
				height(node) {
					return node.data('label') ? 8 : 4
				},
			}
		},
		{
			selector: 'edge',
			style: {
				'label': 'data(label)',
				'line-color': 'data(type)',
				'source-endpoint': 'inside-to-node',
				'target-endpoint': 'inside-to-node',
				'text-rotation': 'autorotate',
				'text-outline-width': 1,
				'text-outline-color': 'white',
				width(edge) {
					return runTypes.includes(edge.data('type')) ? 4 : 2
				},
				'z-index'(edge) {
					return runTypes.includes(edge.data('type')) ? 1 : 2
				},
				'curve-style'(edge) {
					return runTypes.includes(edge.data('type')) ? 'round-taxi' : 'round-segments'
				},
				'control-point-step-size': 10
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

const Panes = styled.div`
	display: flex;
	gap: 1rem;
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
		cy.mount(cytoscapeContainer.current)
		cy.elements('node,edge[type="green"],edge[type="blue"],edge[type="red"],edge[type="black"]').layout({
			name: 'dagre',
			edgeSep: 50,
			nodeSep: 75,
			rankSep: 75,
			edgeWeight(edge) {
				return edge.data('length') ?? 1
			},
			ready() {

			}
		}).run()
	}, [cytoscapeContainer.current])

	return (
		<>
			<GlobalStyles />

			<Panes>
				<section>
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

					{/* {from && to && (
						<Path {...{ from, to, runFilter, liftFilter}} />
					)} */}
				</section>
				<Graph ref={cytoscapeContainer} />
			</Panes>
		</>
	)
}

render(<App />, document.querySelector('main'))

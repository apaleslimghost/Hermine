import React, { useState, useMemo } from 'react'
import { render } from 'react-dom'
import data from './data'
import minBy from 'lodash.minby'
import styled, { createGlobalStyle } from 'styled-components'
import colours from '@quarterto/colours'

const orInfinity = n => (typeof n === 'undefined' ? Infinity : n)

function getPath(from, to) {
	const unvisited = new Set(Object.keys(data))
	const distances = new Map([[from, 0]])
	const previous = new Map()

	while (unvisited.size) {
		const u = minBy(Array.from(unvisited), key =>
			orInfinity(distances.get(key)),
		)
		unvisited.delete(u)

		if (u === to) break

		data[u].to
			.filter(v => unvisited.has(v))
			.forEach(v => {
				const alt = orInfinity(distances.get(u)) + (data[u].length || 1)
				if (alt < orInfinity(distances.get(v))) {
					distances.set(v, alt)
					previous.set(v, u)
				}
			})
	}

	if (unvisited.has(to)) {
		return [from]
	}

	const path = [to]

	while (path[0] !== from) {
		path.unshift(previous.get(path[0]))
	}

	return path
}

const Select = props => (
	<select defaultValue='' {...props}>
		<option disabled value='' />
		{Object.keys(data).map(key =>
			data[key].type ? (
				<option key={key} value={key}>
					{key}
				</option>
			) : null,
		)}
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

const StopIcon = ({ type }) => (
	<Icon>
		{{
			green: '✅',
			blue: '🔵',
			red: '🔴',
			black: '⚫️',
			funitel: '🚡',
			telesiege: '🛋',
		}[type] || '⁉️'}
	</Icon>
)

const Stop = ({ name, type, length }) =>
	type ? (
		<ListItem>
			<StopIcon type={type} />
			{name}
		</ListItem>
	) : null

const Path = ({ from, to }) => {
	const path = useMemo(() => getPath(from, to), [from, to])

	return (
		<List>
			{path.map(p => (
				<Stop key={p} name={p} {...data[p]} />
			))}
		</List>
	)
}

const App = () => {
	const [from, setFrom] = useState()
	const [to, setTo] = useState()

	return (
		<>
			<GlobalStyles />

			<Select value={from} onChange={ev => setFrom(ev.target.value)} />
			<Select value={to} onChange={ev => setTo(ev.target.value)} />

			{from && to && <Path {...{ from, to }} />}
		</>
	)
}

render(<App />, document.querySelector('main'))

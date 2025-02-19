import React, { useState, useMemo } from 'react'
import { render } from 'react-dom'
import data from './data'
import minBy from 'lodash.minby'
import styled, { createGlobalStyle } from 'styled-components'
import colours from '@quarterto/colours'

const orInfinity = n => (typeof n === 'undefined' ? Infinity : n)

function getPath(from, to, exclude) {
	const unvisited = new Set(
		Object.entries(data).flatMap(([k, v]) =>
			v.type && exclude.includes(v.type) ? [] : [k],
		),
	)
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

	const path = [to]

	while (path[0] !== from) {
		if (!previous.get(path[0])) {
			return []
		}

		path.unshift(previous.get(path[0]))
	}

	return path
}

const StopSelect = props => (
	<select defaultValue='' {...props}>
		<option disabled value='' />
		{Object.keys(data).map(key =>
			data[key].type ? (
				<option key={key} value={key}>
					{getIcon(data[key].type)} {key}
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
			{name}
		</ListItem>
	) : null

const Path = ({ from, to, exclude }) => {
	const path = useMemo(() => getPath(from, to, exclude), [from, to, exclude])

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

const App = () => {
	const [from, setFrom] = useState()
	const [to, setTo] = useState()
	const [runFilter, setRunFilter] = useState([])
	const [liftFilter, setLiftFilter] = useState([])

	return (
		<>
			<GlobalStyles />

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

			{from && to && (
				<Path {...{ from, to }} exclude={[...runFilter, ...liftFilter]} />
			)}
		</>
	)
}

render(<App />, document.querySelector('main'))

import React, { useState, useMemo } from 'react'
import { render } from 'react-dom'
import data from './data'
import minBy from 'lodash.minby'

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
		{Object.keys(data).map(key => (
			<option key={key} value={key}>
				{key}
			</option>
		))}
	</select>
)

const Path = ({ from, to }) => {
	const path = useMemo(() => getPath(from, to), [from, to])

	return (
		<ul>
			{path.map(p => (
				<li key={p}>{p}</li>
			))}
		</ul>
	)
}

const App = () => {
	const [from, setFrom] = useState()
	const [to, setTo] = useState()

	return (
		<>
			<Select value={from} onChange={ev => setFrom(ev.target.value)} />
			<Select value={to} onChange={ev => setTo(ev.target.value)} />

			{from && to && <Path {...{ from, to }} />}
		</>
	)
}

render(<App />, document.querySelector('main'))

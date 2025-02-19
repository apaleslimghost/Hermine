export default {
	'Auris en Oisans': {
		type: 'village',
		to: ['Sures', 'Auris Express', 'Piegut'],
	},
	Sures: {
		type: 'telesiege',
		to: ['Gentianes', 'Rhodos (top)', 'Jacques le Bucheron'],
		length: 2,
	},
	Gentianes: { type: 'blue', to: ['Col (bottom)'], length: 0.6 },
	'Rhodos (top)': {
		type: 'red',
		to: ['La Fuma', 'Rhodos (bottom)'],
		length: 1,
	},
	'Col (bottom)': { type: 'blue', to: ['Auris en Oisans'] },
	'Rhodos (bottom)': {
		type: 'red',
		to: ['Farcis', 'Col (bottom)'],
		length: 0.4,
	},
	'La Fuma': { type: 'black', to: ['Farcis'], length: 0.7 },
	Farcis: { type: 'blue', to: ['Maronne'], length: 1.4 },
	Maronne: { type: 'telesiege', to: ['Rhodos (top)', 'Gentianes'], length: 4 },
	'Auris Express': {
		type: 'telesiege',
		to: ['Col (top)', 'Éterlous', 'Demoiselles', 'Pre-rond (middle)'],
		length: 6,
	},
	'Col (top)': { type: 'blue', to: ['Rosai (bottom)', 'Col (middle)'] },
	'Col (middle)': { type: 'blue', to: ['Farcis', 'Col (bottom)'] },
	'Rosai (bottom)': { type: 'red', to: ['Farcis'] },
	'Jacques le Bucheron': { type: 'green', to: ['Crocus'], length: 1.4 },
	Crocus: { type: 'green', to: ['Auris en Oisans'] },
	Piegut: { type: 'teleski', to: ['Crocus', 'Foret'] },
	Foret: { type: 'teleski', to: ['Epicea'] },
	Epicea: { type: 'green', to: ['Foret'] },
	Éterlous: { type: 'blue', to: ['Fontfroide picnic area'], length: 1 },
	Demoiselles: {
		type: 'green',
		to: ['Fontfroide picnic area'],
		length: 0.9,
	},
	'Pre-rond (middle)': {
		type: 'blue',
		to: ['Fontfroide (bottom)', 'Pre-rond (bottom)', 'Lys', 'Gua'],
		length: 1,
	},
	'Pre-rond (bottom)': {
		type: 'blue',
		to: ['Fontfroide picnic area'],
		length: 0.7,
	},
	'Fontfroide picnic area': {
		type: 'picnic',
		to: ['Louvets', 'Fontfroide', 'Alpauris (Auris)'],
	},
}

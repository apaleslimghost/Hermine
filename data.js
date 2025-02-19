export default {
	'Auris en Oisans': {
		type: 'village',
		to: ['Sures', 'Auris Express', 'Piegut'],
	},
	Sures: {
		type: 'telesiege',
		to: ['Gentianes', 'Rhodos (top)', 'Jacques le Bucheron'],
	},
	Gentianes: { type: 'blue', to: ['Col (bottom)'] },
	'Rhodos (top)': { type: 'red', to: ['La Fuma', 'Rhodos (bottom)'] },
	'Col (bottom)': { type: 'blue', to: ['Auris en Oisans'] },
	'Rhodos (bottom)': { type: 'red', to: ['Farcis', 'Col (bottom)'] },
	'La Fuma': { type: 'black', to: ['Farcis'] },
	Farcis: { type: 'blue', to: ['Maronne'] },
	Maronne: { type: 'telesiege', to: ['Rhodos (top)', 'Gentianes'] },
	'Auris Express': {
		type: 'telesiege',
		to: ['Col (top)', 'Éterlous', 'Demoiselles', 'Pre-rond (middle)'],
	},
	'Col (top)': { type: 'blue', to: ['Rosai (bottom)', 'Col (middle)'] },
	'Col (middle)': { type: 'blue', to: ['Farcis', 'Col (bottom)'] },
	'Rosai (bottom)': { type: 'red', to: ['Farcis'] },
	'Jacques le Bucheron': { type: 'green', to: ['Crocus'] },
	Crocus: { type: 'green', to: ['Auris en Oisans'] },
	Piegut: { type: 'teleski', to: ['Crocus', 'Foret'] },
	Foret: { type: 'teleski', to: ['Epicea'] },
	Epicea: { type: 'green', to: ['Foret'] },
	Éterlous: { type: 'blue', to: ['Fontfroide picnic area'] },
	Demoiselles: {
		type: 'green',
		to: ['Fontfroide picnic area'],
	},
	'Pre-rond (middle)': {
		type: 'blue',
		to: ['Fontfroide (bottom)', 'Pre-rond (bottom)', 'Lys', 'Gua'],
	},
	'Pre-rond (bottom)': {
		type: 'blue',
		to: ['Fontfroide picnic area'],
	},
	'Fontfroide picnic area': {
		type: 'picnic',
		to: ['Louvets', 'Fontfroide', 'Alpauris (Auris)'],
	},
}

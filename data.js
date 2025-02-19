export default {
	'Auris en Oisans': {
		type: 'village',
		to: ['Sures', 'Auris Express', 'Piegut'],
	},
	Sures: { type: 'telesiege', to: ['Gentianes', 'Rhodos (top)'] },
	Gentianes: { type: 'blue', to: ['Col (bottom)'] },
	'Rhodos (top)': { type: 'red', to: ['La Fuma', 'Rhodos (bottom)'] },
	'Col (bottom)': { type: 'blue', to: ['Auris en Oisans'] },
	'Rhodos (bottom)': { type: 'red', to: ['Farcis', 'Col (bottom)'] },
	'La Fuma': { type: 'black', to: ['Farcis'] },
	Farcis: { type: 'blue', to: ['Maronne'] },
	Maronne: { type: 'telesiege', to: ['Rhodos (top)', 'Gentianes'] },
	'Auris Express': {
		type: 'telesiege',
		to: ['Col (top)', 'Éterlous', 'Demoiselles', 'Gua (top)'],
	},
	'Col (top)': { type: 'blue', to: ['Rosai (bottom)', 'Col (middle)'] },
	'Col (middle)': { type: 'blue', to: ['Farcis', 'Col (bottom)'] },
	'Rosai (bottom)': { type: 'red', to: ['Farcis'] },
}

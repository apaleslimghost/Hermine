export default [
	/// locations
	{ data: { id: 'auris', label: 'Auris en Oisans', type: 'village' } },
		// to: ['Auris Express', 'Piegut'],
	{ data: { id: 'bergers', label: 'Bergers', type: 'village' } },
		// to: ['Alpauris (Huez-Auris)'],
	{ data: { id: 'maronne-village', label: 'Maronne', type: 'village' } },
	{ data: { id: 'fontfroide-picnic', label: 'Fontfroide picnic area', type: 'picnic'} },
		// to: ['Louvets', 'Fontfroide', 'Alpauris (Auris-Gua)'],

	/// junction nodes
	{ data: { id: 'sures-top' }},
		// to: ['Rhodos (top)', 'Jacques le Bucheron'],
	{ data: { id: 'gentianes-col-junction' }},
	{ data: { id: 'maronne-top' }},
	{ data: { id: 'rhodos-farcis-col-junction'}},
		// to: ['Farcis', 'Col (bottom)']
	{ data: { id: 'farcis-fuma-junction'}},

	/// lifts
	{ data: { id: 'sures', label: 'Sures', type: 'telesiege', source: 'auris', target: 'sures-top', length: 2 } },
	{ data: { id: 'maronne', label: 'Maronne', type: 'telesiege', source: 'maronne-village', target: 'maronne-top', length: 2 } },

	/// runs
	{ data: { id: 'gentianes', label: 'Gentianes', type: 'blue', source: 'sures-top', target: 'gentianes-col-junction', length: 0.6 }},
	{ data: { id: 'rhodos-top', label: 'Rhodos', type: 'red', source: 'sures-top', target: 'maronne-top', length: 1 }},
	{ data: { id: 'col-bottom', label: 'Col', type: 'blue', source: 'gentianes-col-junction', target: 'auris'} },
	{ data: { id: 'rhodos-middle', label: 'Rhodos', type: 'red', source: 'maronne-top', target: 'rhodos-farcis-col-junction', length: 0.4,}},
	{ data: { id: 'rhodos-bottom', label: 'Rhodos', type: 'red', source: 'rhodos-farcis-col-junction', target: 'gentianes-col-junction' } },
	{ data: { id: 'fuma', label: 'La Fuma', type: 'black', source: 'maronne-top', target: 'farcis-fuma-junction', length: 0.7 }},
	{ data: { id: 'farcis-top', label: 'Farcis', type: 'blue', source: 'rhodos-farcis-col-junction', target: 'farcis-fuma-junction', length: 0.7 }},
	{ data: { id: 'farcis-bottom', label: 'Farcis', type: 'blue', source: 'farcis-fuma-junction', target: 'maronne-village', length: 0.7 }},
]

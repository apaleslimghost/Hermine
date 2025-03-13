export default [
	/// locations
	{ data: { id: 'auris', label: 'Auris en Oisans', type: 'village' }, position: {
		y: -565.9, x: 764.2
	} },
		// to: ['Auris Express', 'Piegut'],
	{ data: { id: 'bergers', label: 'Bergers', type: 'village' }, position: {
		y: -908.5, x: 762.9
	} },
		// to: ['Alpauris (Huez-Auris)'],
	{ data: { id: 'maronne-village', label: 'Maronne', type: 'village' }, position: {
		y: -670.0, x: 612.2
	} },
	{ data: { id: 'fontfroide-picnic', label: 'Fontfroide picnic area', type: 'picnic'}, position: {
		y: -788.4, x: 848.2
	} },
		// to: ['Louvets', 'Fontfroide', 'Alpauris (Auris-Gua)'],
	{ data: { id: 'signal-de-lhomme', label: 'Signal de l\'Homme', type: 'viewpoint'}, position: {
		y: -677.3, x: 858.0
	} },

	/// junction nodes
	{ data: { id: 'sures-top' }, position: {
		y: -563.1, x: 676.3
	}},
		// to: ['Rhodos (top)', 'Jacques le Bucheron'],
	{ data: { id: 'gentianes-col-junction' }, position: {
		y: -604.3, x: 747.7
	}},
	{ data: { id: 'maronne-top' }, position: {
		y: -615.9, x: 695.8
	}},
	{ data: { id: 'rhodos-farcis-col-junction'}, position: {
		y: -633.7, x: 726.1
	}},
		// to: ['Farcis', 'Col (bottom)']
	{ data: { id: 'farcis-fuma-junction'}, position: {
		y: -653.8, x: 675.3
	}},
	{ data: { id: 'auris-express-top'}, position: {
		y: -722.2, x: 787.1
	}},
	{ data: { id: 'pre-rond-fontfroide-junction'}, position: {
		y: -751.2, x: 850.1
	}},
	{ data: { id: 'lys-gua-junction'}, position: {
		y: -760.1, x: 904.0
	}},
	{ data: { id: 'gua-sarenne-junction'}, position: {
		y: -788.3, x: 1046.4
	}},
	{ data: { id: 'lombards-bottom'}, position: {
		y: -805.5, x: 916.2
	}},
	{ data: { id: 'lombards-top'}, position: {
		y: -752.3, x: 896.3
	}},
	{ data: { id: 'alpauris-bottom'}, position: {
		y: -810.7, x: 831.5
	}},
	{ data: { id: 'chalvets-bottom'}, position: {
		y: -806.6, x: 1023.0
	}},
	{ data: { id: 'charbonniere-campanules-junction'}, position: {
		y: -939.3, x: 1030.6
	}},
	{ data: { id: 'rosai-pre-rond-junction'}, position: {
		y: -700.8, x: 779.5
	}},
	{ data: { id: 'rosai-col-junction'}, position: {
		y: -702.1, x: 737.4
	}},

	/// lifts
	{ data: { id: 'sures', label: 'Sures', type: 'telesiege', source: 'auris', target: 'sures-top',} },
	{ data: { id: 'maronne', label: 'Maronne', type: 'telesiege', source: 'maronne-village', target: 'maronne-top',} },
	{ data: { id: 'auris-express', label: 'Auris Express', type: 'telesiege', source: 'auris', target: 'auris-express-top',} },
	{ data: { id: 'louvets', label: 'Lovets', type: 'telesiege', source: 'fontfroide-picnic', target: 'auris-express-top',} },
	{ data: { id: 'lombards', label: 'Lovets', type: 'telesiege', source: 'lombards-bottom', target: 'lombards-top',} },
	{ data: { id: 'alpauris-auris-gua', label: 'Alpauris', type: 'telesiege', source: 'fontfroide-picnic', target: 'alpauris-bottom',} },
	{ data: { id: 'alpauris-gua-bergers', label: 'Alpauris', type: 'telesiege', source: 'alpauris-bottom', target: 'bergers',} },
	{ data: { id: 'alpauris-bergers-auris', label: 'Alpauris', type: 'telesiege', source: 'bergers', target: 'fontfroide-picnic',} },
	{ data: { id: 'chalvets', label: 'Chalvets', type: 'telesiege', source: 'chalvets-bottom', target: 'charbonniere-campanules-junction',} },

	/// runs
	{ data: { id: 'gentianes', label: 'Gentianes', type: 'blue', source: 'sures-top', target: 'gentianes-col-junction'}},
	{ data: { id: 'rhodos-top', label: 'Rhodos', type: 'red', source: 'sures-top', target: 'maronne-top',}},
	{ data: { id: 'col-top', label: 'Col', type: 'blue', source: 'auris-express-top', target: 'gentianes-col-junction'} },
	{ data: { id: 'col-middle', label: 'Col', type: 'blue', source: 'gentianes-col-junction', target: 'rosai-col-junction'} },
	{ data: { id: 'col-bottom', label: 'Col', type: 'blue', source: 'rosai-col-junction', target: 'auris'} },
	{ data: { id: 'rhodos-middle', label: 'Rhodos', type: 'red', source: 'maronne-top', target: 'rhodos-farcis-col-junction',}},
	{ data: { id: 'rhodos-bottom', label: 'Rhodos', type: 'red', source: 'rhodos-farcis-col-junction', target: 'gentianes-col-junction' } },
	{ data: { id: 'fuma', label: 'La Fuma', type: 'black', source: 'maronne-top', target: 'farcis-fuma-junction',}},
	{ data: { id: 'farcis-top', label: 'Farcis', type: 'blue', source: 'rhodos-farcis-col-junction', target: 'farcis-fuma-junction',}},
	{ data: { id: 'farcis-bottom', label: 'Farcis', type: 'blue', source: 'farcis-fuma-junction', target: 'maronne-village',}},
	{ data: { id: 'eterlous', label: 'Eterlous', type: 'blue', source: 'auris-express-top', target: 'fontfroide-picnic', length: 1}},
	{ data: { id: 'demoiselles', label: 'Demoiselles', type: 'green', source: 'auris-express-top', target: 'fontfroide-picnic', length: 2}},
	{ data: { id: 'pre-rond-middle', label: 'Pre-Rond', type: 'blue', source: 'auris-express-top', target: 'pre-rond-fontfroide-junction',}},
	{ data: { id: 'fontfroide-bottom', label: 'Fontfroide', type: 'red', source: 'pre-rond-fontfroide-junction', target: 'fontfroide-picnic',}},
	{ data: { id: 'fontfroide-bottom', label: 'Fontfroide', type: 'red', source: 'pre-rond-fontfroide-junction', target: 'fontfroide-picnic',}},
	{ data: { id: 'fontfroide-top', label: 'Fontfroide', type: 'red', source: 'signal-de-lhomme', target: 'pre-rond-fontfroide-junction',}},
	{ data: { id: 'pre-rond-top', label: 'Pre-rond', type: 'blue', source: 'signal-de-lhomme', target: 'rosai-pre-rond-junction',}},
	{ data: { id: 'pre-rond-top-2', label: 'Pre-rond', type: 'blue', source: 'rosai-pre-rond-junction', target: 'auris-express-top',}},
	{ data: { id: 'pre-rond-bottom', label: 'Pre-rond', type: 'blue', source: 'pre-rond-fontfroide-junction', target: 'fontfroide-picnic',}},
	{ data: { id: 'bergerie', label: 'Bergerie', type: 'black', source: 'signal-de-lhomme', target: 'lys-gua-junction',}},
	{ data: { id: 'gua-top', label: 'Gua', type: 'blue', source: 'pre-rond-fontfroide-junction', target: 'lys-gua-junction',}},
	{ data: { id: 'gua-middle', label: 'Gua', type: 'blue', source: 'lys-gua-junction', target: 'gua-sarenne-junction',}},
	{ data: { id: 'gua-middle-2', label: 'Gua', type: 'blue', source: 'gua-sarenne-junction', target: 'chalvets-bottom',}},
	{ data: { id: 'gua-middle-3', label: 'Gua', type: 'blue', source: 'chalvets-bottom', target: 'lombards-bottom',}},
	{ data: { id: 'gua-bottom', label: 'Gua', type: 'blue', source: 'lombards-bottom', target: 'alpauris-bottom',}},
	{ data: { id: 'lys-top', label: 'Lys', type: 'blue', source: 'lombards-top', target: 'lys-gua-junction',}},
	{ data: { id: 'lys-bottom', label: 'Lys', type: 'blue', source: 'lys-gua-junction', target: 'lombards-bottom',}},
	{ data: { id: 'col-de-cluy', label: 'Col de Cluy', type: 'black', source: 'signal-de-lhomme', target: 'gua-sarenne-junction',}},
	{ data: { id: 'la-mine', label: 'La Mine', type: 'red', source: 'charbonniere-campanules-junction', target: 'chalvets-bottom',}},
	{ data: { id: 'campanules', label: 'Campanules', type: 'red', source: 'charbonniere-campanules-junction', target: 'bergers',}},
	{ data: { id: 'rosai-top', label: 'Rosai', type: 'red', source: 'signal-de-lhomme', target: 'rosai-pre-rond-junction',}},
	{ data: { id: 'rosai-middle', label: 'Rosai', type: 'red', source: 'rosai-pre-rond-junction', target: 'rosai-col-junction',}},
	{ data: { id: 'rosai-bottom', label: 'Rosai', type: 'red', source: 'rosai-col-junction', target: 'rhodos-farcis-col-junction',}},
]

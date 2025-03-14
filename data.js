export const elements = [
	/// locations
	{ data: { id: 'auris', label: 'Auris en Oisans', type: 'village' }, position: {
		x: -565.9, y: -764.2
	} },
	{ data: { id: 'bergers', label: 'Bergers', type: 'village' }, position: {
		x: -908.5, y: -762.9
	} },
	{ data: { id: 'maronne-village', label: 'Maronne', type: 'village' }, position: {
		x: -670.0, y: -612.2
	} },
	{ data: { id: 'fontfroide-picnic', label: 'Fontfroide picnic area', type: 'picnic'}, position: {
		x: -788.4, y: -848.2
	} },
	{ data: { id: 'signal-de-lhomme', label: 'Signal de l\'Homme', type: 'viewpoint'}, position: {
		x: -677.3, y: -858.0
	} },

	/// junction nodes
	{ data: { id: 'sures-top' }, position: {
		x: -563.1, y: -676.3
	}},
	{ data: { id: 'gentianes-col-junction' }, position: {
		x: -604.3, y: -747.7
	}},
	{ data: { id: 'maronne-top' }, position: {
		x: -615.9, y: -695.8
	}},
	{ data: { id: 'rhodos-farcis-col-junction'}, position: {
		x: -633.7, y: -726.1
	}},
	{ data: { id: 'farcis-fuma-junction'}, position: {
		x: -653.8, y: -675.3
	}},
	{ data: { id: 'auris-express-top'}, position: {
		x: -722.2, y: -787.1
	}},
	{ data: { id: 'pre-rond-fontfroide-junction'}, position: {
		x: -751.2, y: -850.1
	}},
	{ data: { id: 'lys-gua-junction'}, position: {
		x: -760.1, y: -904.0
	}},
	{ data: { id: 'gua-sarenne-junction'}, position: {
		x: -788.3, y: -1046.4
	}},
	{ data: { id: 'lombards-bottom'}, position: {
		x: -805.5, y: -916.2
	}},
	{ data: { id: 'lombards-top'}, position: {
		x: -752.3, y: -896.3
	}},
	{ data: { id: 'alpauris-bottom'}, position: {
		x: -810.7, y: -831.5
	}},
	{ data: { id: 'chalvets-bottom'}, position: {
		x: -806.6, y: -1023.0
	}},
	{ data: { id: 'charbonniere-campanules-junction'}, position: {
		x: -939.3, y: -1030.6
	}},
	{ data: { id: 'rosai-pre-rond-junction'}, position: {
		x: -700.8, y: -779.5
	}},
	{ data: { id: 'rosai-col-junction'}, position: {
		x: -702.1, y: -737.4
	}},
	{ data: { id: 'piegut-top'}, position: {
		x: -535.7, y: -747.7
	}},
	{ data: { id: 'foret-bottom'}, position: {
		x: -507.4, y: -749.9
	}},
	{ data: { id: 'foret-top'}, position: {
		x: -477.0, y: -730.4
	}},
	{ data: { id: 'rhodos-split'}, position: {
		x: -611.7, y: -706.6
	}},
	{ data: {id: 'marmottes-1-top'}, position: {
		x: -1044.4, y: -963.1
	}},
	{ data: {id: 'olympique-split'}, position: {
		x: -979.7, y: -897.0
	}},
	{ data: {id: 'agneaux-loup-blanc-junction'}, position: {
		x: -976.1, y: -865.3
	}},
	{ data: {id: 'campagnules-loup-blanc-junction'}, position: {
		x: -924.1, y: -855.8
	}},
	{ data: {id: 'bergers-lac-blanc-junction'}, position: {
		x: -978.9, y: -838.4
	}},
	{ data: {id: 'bergers-agneaux-junction'}, position: {
		x: -1002.6, y: -865.8
	}},
	{ data: {id: 'romains-top'}, position: {
		x: -1016.3, y: -904.0
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
	{ data: { id: 'fontfroide', label: 'Fontfroide', type: 'telesiege', source: 'fontfroide-picnic', target: 'signal-de-lhomme'}},
	{ data: {id: 'piegut', label: 'Piegut', type: 'tapis', source: 'auris', target: 'piegut-top'}},
	{ data: {id: 'foret', label: 'Foret', type: 'tapis', source: 'foret-bottom', target: 'foret-top'}},
	{ data: {id: 'marmotte-1', label: 'Marmottes 1', type: 'telesiege', source: 'bergers', target: 'marmottes-1-top'}},
	{ data: {id: 'romains', label: 'Romains', type: 'telesiege', source: 'bergers', target: 'romains-top'}},

	/// runs
	{ data: { id: 'gentianes', label: 'Gentianes', type: 'blue', source: 'sures-top', target: 'gentianes-col-junction'}},
	{ data: { id: 'rhodos-top', label: 'Rhodos', type: 'red', source: 'sures-top', target: 'maronne-top',}},
	{ data: { id: 'col-top', label: 'Col', type: 'blue', source: 'auris-express-top', target: 'rosai-col-junction'} },
	{ data: { id: 'col-middle', label: 'Col', type: 'blue', source: 'rosai-col-junction', target: 'gentianes-col-junction'} },
	{ data: { id: 'col-bottom', label: 'Col', type: 'blue', source: 'gentianes-col-junction', target: 'auris'} },
	{ data: { id: 'rhodos-middle', label: 'Rhodos', type: 'red', source: 'maronne-top', target: 'rhodos-split',}},
	{ data: { id: 'rhodos-bottom-1', label: 'Rhodos', type: 'red', source: 'rhodos-split', target: 'rhodos-farcis-col-junction' } },
	{ data: { id: 'rhodos-bottom-2', label: 'Rhodos', type: 'red', source: 'rhodos-split', target: 'gentianes-col-junction' } },
	{ data: { id: 'fuma', label: 'La Fuma', type: 'black', source: 'maronne-top', target: 'farcis-fuma-junction'}},
	{ data: { id: 'farcis-top', label: 'Farcis', type: 'blue', source: 'gentianes-col-junction', target: 'rhodos-farcis-col-junction',}},
	{ data: { id: 'farcis-middle', label: 'Farcis', type: 'blue', source: 'rhodos-farcis-col-junction', target: 'farcis-fuma-junction',}},
	{ data: { id: 'farcis-bottom', label: 'Farcis', type: 'blue', source: 'farcis-fuma-junction', target: 'maronne-village'}},
	{ data: { id: 'eterlous', label: 'Eterlous', type: 'blue', source: 'auris-express-top', target: 'fontfroide-picnic'}},
	{ data: { id: 'demoiselles', label: 'Demoiselles', type: 'green', source: 'auris-express-top', target: 'fontfroide-picnic', length: 2}},
	{ data: { id: 'pre-rond-middle', label: 'Pre-Rond', type: 'blue', source: 'auris-express-top', target: 'pre-rond-fontfroide-junction',}},
	{ data: { id: 'fontfroide-bottom', label: 'Fontfroide', type: 'red', source: 'pre-rond-fontfroide-junction', target: 'fontfroide-picnic',}},
	{ data: { id: 'fontfroide-top', label: 'Fontfroide', type: 'red', source: 'signal-de-lhomme', target: 'pre-rond-fontfroide-junction',}},
	{ data: { id: 'pre-rond-top', label: 'Pre-rond', type: 'blue', source: 'signal-de-lhomme', target: 'rosai-pre-rond-junction'}},
	{ data: { id: 'pre-rond-top-2', label: 'Pre-rond', type: 'blue', source: 'rosai-pre-rond-junction', target: 'auris-express-top',}},
	{ data: { id: 'pre-rond-bottom-1', label: 'Pre-rond', type: 'blue', source: 'pre-rond-fontfroide-junction', target: 'lys-gua-junction'}},
	{ data: { id: 'pre-rond-bottom-2', label: 'Pre-rond', type: 'blue', source: 'lys-gua-junction', target: 'fontfroide-picnic'}},
	{ data: { id: 'bergerie', label: 'Bergerie', type: 'black', source: 'signal-de-lhomme', target: 'lys-gua-junction'}},
	{ data: { id: 'gua-top', label: 'Gua', type: 'blue', source: 'lys-gua-junction', target: 'gua-sarenne-junction'}},
	{ data: { id: 'gua-middle-2', label: 'Gua', type: 'blue', source: 'gua-sarenne-junction', target: 'chalvets-bottom'}},
	{ data: { id: 'gua-middle-3', label: 'Gua', type: 'blue', source: 'chalvets-bottom', target: 'lombards-bottom',}},
	{ data: { id: 'gua-bottom', label: 'Gua', type: 'blue', source: 'lombards-bottom', target: 'alpauris-bottom',}},
	{ data: { id: 'lys-top', label: 'Lys', type: 'blue', source: 'lombards-top', target: 'lys-gua-junction',}},
	{ data: { id: 'lys-bottom', label: 'Lys', type: 'blue', source: 'lys-gua-junction', target: 'lombards-bottom',}},
	{ data: { id: 'col-de-cluy', label: 'Col de Cluy', type: 'black', source: 'signal-de-lhomme', target: 'gua-sarenne-junction'}},
	{ data: { id: 'la-mine', label: 'La Mine', type: 'red', source: 'charbonniere-campanules-junction', target: 'chalvets-bottom',}},
	{ data: { id: 'campanules', label: 'Campanules', type: 'red', source: 'charbonniere-campanules-junction', target: 'campagnules-loup-blanc-junction',}},
	{ data: { id: 'rosai-top', label: 'Rosai', type: 'red', source: 'signal-de-lhomme', target: 'rosai-pre-rond-junction'}},
	{ data: { id: 'rosai-middle', label: 'Rosai', type: 'red', source: 'rosai-pre-rond-junction', target: 'rosai-col-junction',}},
	{ data: { id: 'rosai-bottom', label: 'Rosai', type: 'red', source: 'rosai-col-junction', target: 'rhodos-farcis-col-junction',}},
	{ data: { id: 'crocus-top', label: 'Crocus', type: 'green', source: 'foret-bottom', target: 'piegut-top',}},
	{ data: { id: 'crocus-bottom', label: 'Crocus', type: 'green', source: 'piegut-top', target: 'auris',}},
	{ data: { id: 'bucheron', label: 'Jaques le Bucheron', type: 'green', source: 'sures-top', target: 'foret-bottom',}},
	{ data: { id: 'marmottes-auris', label: 'Marmottes', type: 'green', source: 'foret-top', target: 'foret-bottom',}},
	{ data: { id: 'olympique-top', label: 'Olympique', type: 'red', source: 'marmottes-1-top', target: 'olympique-split',}},
	{ data: { id: 'olympique-bottom-1', label: 'Olympique', type: 'red', source: 'olympique-split', target: 'agneaux-loup-blanc-junction',}},
	{ data: { id: 'olympique-bottom-2', label: 'Olympique', type: 'red', source: 'olympique-split', target: 'campagnules-loup-blanc-junction',}},
	{ data: { id: 'loup-blanc-bottom', label: 'Loup Blanc', type: 'green', source: 'campagnules-loup-blanc-junction', target: 'bergers',}},
	{ data: { id: 'loup-blanc-middle', label: 'Loup Blanc', type: 'green', source: 'agneaux-loup-blanc-junction', target: 'campagnules-loup-blanc-junction',}},
	{ data: { id: 'loup-blanc-top', label: 'Loup Blanc', type: 'green', source: 'bergers-lac-blanc-junction', target: 'agneaux-loup-blanc-junction',}},
	{ data: { id: 'bergers-bottom', label: 'Bergers', type: 'blue', source: 'bergers-lac-blanc-junction', target: 'bergers',}},
	{ data: { id: 'agneaux-bottom', label: 'Agneaux', type: 'blue', source: 'agneaux-loup-blanc-junction', target: 'bergers',}},
	{ data: { id: 'agneaux-middle', label: 'Agneaux', type: 'blue', source: 'bergers-agneaux-junction', target: 'agneaux-loup-blanc-junction',}},
	{ data: { id: 'bergers-middle', label: 'Bergers', type: 'blue', source: 'bergers-agneaux-junction', target: 'bergers-lac-blanc-junction',}},
	{ data: { id: 'bergers-top', label: 'Bergers', type: 'blue', source: 'marmottes-1-top', target: 'bergers-agneaux-junction',}},
	{ data: { id: 'agneaux-top', label: 'Agneaux', type: 'blue', source: 'romains-top', target: 'bergers-agneaux-junction',}},

]

export const constraints = {
	alignmentConstraint: {
		vertical: [
			['lombards-bottom', 'alpauris-bottom']
		],
		horizontal: [
			['fontfroide-picnic', 'pre-rond-fontfroide-junction', 'signal-de-lhomme']
		]
	}
}

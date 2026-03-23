import type cytoscape from 'cytoscape'

export const elements: cytoscape.ElementDefinition[] = [
	{
		data: {
			label: 'Genépi',
			id: 'genepi-run-top',
			source: 'moraine-top',
			target: 'face-nord-bottom',
			type: 'blue',
		},
	},
	{
		data: {
			label: 'Genépi',
			id: 'genepi-run-bottom',
			target: 'moraine-bottom',
			source: 'face-nord-bottom',
			type: 'blue',
		},
	},
	{
		data: {
			label: 'Moraine',
			id: 'moraine-run',
			target: 'moraine-bottom',
			source: 'moraine-top',
			type: 'blue',
		},
	},
	{
		data: {
			label: 'Face Nord',
			id: 'face-nord-run',
			target: 'face-nord-bottom',
			source: 'thorens-top',
			type: 'blue',
		},
	},
	{
		data: {
			label: 'Chocards',
			id: 'chocards-run',
			target: 'thorens-bottom',
			source: 'thorens-top',
			type: 'blue',
		},
	},
	{
		data: {
			label: 'Portette',
			id: 'portette-run',
			source: 'thorens-bottom',
			target: 'moraine-bottom',
			type: 'red',
		},
	},
	{
		data: {
			label: 'Niverolle',
			id: 'niverolle-top',
			source: 'grand-fond-top',
			target: 'niverolle-junction',
			type: 'blue',
		},
	},
	{
		data: {
			label: 'Niverolle',
			id: 'niverolle-bottom',
			target: 'thorens-bottom',
			source: 'niverolle-junction',
			type: 'blue',
		},
	},
	{
		data: {
			label: 'Fond',
			id: 'fond-top',
			target: 'fond-rhodos-junction',
			source: 'niverolle-junction',
			type: 'blue',
		},
	},
	{
		data: {
			label: 'Fond',
			id: 'fond-bottom',
			source: 'fond-rhodos-junction',
			target: 'plateau-2-top',
			type: 'blue',
		},
	},
	{
		data: {
			label: 'Rhodos',
			id: 'rhodos',
			source: 'fond-rhodos-junction',
			target: 'moraine-bottom',
			type: 'red',
		},
	},
	{
		data: {
			label: 'Plateau',
			id: 'plateau-run',
			source: 'plateau-2-top',
			target: 'plateau-2-bottom',
			type: 'blue',
		},
	},
	{
		data: {
			label: 'Lagopède',
			id: 'lagopede-top',
			source: 'deux-lacs-top',
			target: 'plateau-2-bottom',
			type: 'blue',
		},
	},
	{
		data: {
			label: 'Lagopède',
			id: 'lagopede-middle',
			source: 'plateau-2-bottom',
			target: 'grand-fond-bottom',
			type: 'blue',
		},
	},
	{
		data: {
			label: 'Lagopède',
			id: 'lagopede-bottom',
			source: 'grand-fond-bottom',
			target: 'caron-top',
			type: 'blue',
		},
	},
	{
		data: {
			label: 'Médaille',
			id: 'medaille',
			source: 'niverolle-junction',
			target: 'plateau-2-top',
			type: 'red',
		},
	},
	{
		data: {
			label: 'Tête Ronde',
			id: 'tete-ronde-top',
			source: 'funitel-p-clet-top',
			target: 'tete-ronde-junction',
			type: 'blue',
		},
	},
	{
		data: {
			label: 'Christine',
			id: 'christine',
			source: 'tete-ronde-junction',
			target: 'moraine-bottom',
			type: 'red',
		},
	},
	{
		data: {
			label: 'Cime',
			id: 'cime-top',
			source: 'cime-caron-top',
			target: 'cime-falaise-junction',
			type: 'red',
		},
	},
	{
		data: {
			label: 'Cime',
			id: 'cime-bottom',
			source: 'plateau-2-top',
			target: 'cime-falaise-junction',
			type: 'red',
		},
	},
	{
		data: {
			label: 'Falaise',
			id: 'falaise-bottom',
			source: 'cime-falaise-junction',
			target: 'plateau-2-bottom',
			type: 'red',
		},
	},
	{
		data: {
			label: 'Traverseé 2 Lacs',
			id: 'traversee-deux-lacs-top',
			type: 'green',
			source: 'deux-lacs-top',
			target: 'deux-lacs-junction',
		},
	},
	{
		data: {
			label: 'Hermine',
			id: 'hermine-top',
			type: 'blue',
			source: 'deux-lacs-junction',
			target: 'hermine-junction',
		},
	},
	{
		data: {
			label: 'Hermine',
			id: 'hermine-bottom',
			type: 'blue',
			source: 'hermine-junction',
			target: 'cairn-bottom__caron-bottom',
		},
	},
	{
		data: {
			label: 'Gentianes',
			id: 'gentianes',
			type: 'blue',
			source: 'caron-top',
			target: 'cairn-bottom__caron-bottom',
		},
	},
	{
		data: {
			label: 'Arolles',
			id: 'arolles',
			type: 'black',
			source: 'deux-lacs-top',
			target: 'hermine-junction',
		},
	},

	/// junctions
	{
		data: {
			id: 'hermine-junction',
		},
	},
	{
		data: {
			id: 'deux-lacs-junction',
		},
	},
	{
		data: {
			id: 'tete-ronde-junction',
		},
	},
	{
		data: {
			id: 'niverolle-junction',
		},
	},
	{
		data: {
			id: 'fond-rhodos-junction',
		},
	},
	{
		data: {
			id: 'fond-rhodos-junction',
		},
	},
	{
		data: {
			id: 'cime-falaise-junction',
		},
	},
	/// generated lifts/nodes
	{
		data: {
			type: 'chair_lift',
			id: 'cascades',
			source: 'cascades-bottom',
			target: 'cascades-top',
			label: 'Cascades',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'portette',
			source: 'moraine-bottom',
			target: 'thorens-bottom',
			label: 'Portette',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'caron',
			source: 'cairn-bottom__caron-bottom',
			target: 'caron-top',
			label: 'Caron',
		},
	},
	{
		data: {
			type: 'cable_car',
			id: 'cime-caron',
			source: 'caron-top',
			target: 'cime-caron-top',
			label: 'Cime Caron',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'boismint',
			source: 'boismint-bottom',
			target: 'boismint-top',
			label: 'Boismint',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'tortollet',
			source: 'tortollet-bottom',
			target: 'tortollet-top',
			label: 'Tortollet',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'roc-1',
			source: 'roc-1-bottom',
			target: 'roc-1-top',
			label: 'Roc 1',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'cairn',
			source: 'cairn-bottom__caron-bottom',
			target: 'cairn-top',
			label: 'Cairn',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'masse',
			source: 'masse-bottom',
			target: 'masse-top',
			label: 'Masse',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'mouti-re',
			source: 'cairn-bottom__caron-bottom',
			target: 'deux-lacs-top',
			label: 'Moutière',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'grand-fond',
			source: 'grand-fond-bottom',
			target: 'grand-fond-top',
			label: 'Grand Fond',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'rosa-l',
			source: 'rosa-l-bottom',
			target: 'rosa-l-top',
			label: 'Rosaël',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'peyron',
			source: 'peyron-bottom',
			target: 'peyron-top',
			label: 'Peyron',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'bouchet',
			source: 'bouchet-bottom',
			target: 'bouchet-top',
			label: 'Bouchet',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'plateau-2',
			source: 'plateau-2-bottom',
			target: 'plateau-2-top',
			label: 'Plateau 2',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'moraine',
			source: 'moraine-bottom',
			target: 'moraine-top',
			label: 'Moraine',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'plein-sud',
			source: 'plein-sud-bottom',
			target: 'plein-sud-top',
			label: 'Plein Sud',
		},
	},
	{
		data: {
			type: 'cable_car',
			id: 'funitel-3-vall-es',
			source: 'funitel-3-vall-es-bottom',
			target: 'funitel-3-vall-es-top',
			label: 'Funitel 3 Vallées',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: '3-vall-es',
			source: '3-vall-es-bottom',
			target: '3-vall-es-top',
			label: '3 Vallées',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'mont-de-la-chambre',
			source: 'mont-de-la-chambre-bottom',
			target: 'mont-de-la-chambre-top',
			label: 'Mont de la Chambre',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'becca',
			source: 'becca-bottom',
			target: 'becca-top',
			label: 'Becca',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'roc-2',
			source: 'roc-2-bottom',
			target: 'roc-2-top',
			label: 'Roc 2',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'plan-des-mains',
			source: 'plan-des-mains-bottom',
			target: 'plan-des-mains-top',
			label: 'Plan des Mains',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'bruy-res-2',
			source: 'bruy-res-1-top__bruy-res-2-bottom',
			target: 'bruy-res-2-top',
			label: 'Bruyères 2',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'mont-vallon',
			source: 'mont-vallon-bottom',
			target: 'mont-vallon-top',
			label: 'Mont Vallon',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'bouquetin',
			source: 'bouquetin-bottom',
			target: 'bouquetin-top',
			label: 'Bouquetin',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'granges',
			source: 'granges-bottom',
			target: 'granges-top',
			label: 'Granges',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'doron',
			source: 'doron-bottom',
			target: 'mont-de-la-chambre-bottom',
			label: 'Doron',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'menuires',
			source: 'roc-1-bottom',
			target: 'menuires-top',
			label: 'Menuires',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'pas-du-lac-1',
			source: 'pas-du-lac-1-bottom',
			target: 'pas-du-lac-1-top__pas-du-lac-2-bottom',
			label: 'Pas du Lac 1',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'pas-du-lac-2',
			source: 'pas-du-lac-1-top__pas-du-lac-2-bottom',
			target: 'pas-du-lac-2-top',
			label: 'Pas du Lac 2',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'aiguille-du-fruit',
			source: 'aiguille-du-fruit-bottom',
			target: 'aiguille-du-fruit-top',
			label: 'Aiguille du Fruit',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'marmottes',
			source: 'marmottes-bottom',
			target: 'suisses-top',
			label: 'Marmottes',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'suisses',
			source: 'suisses-bottom',
			target: 'suisses-top',
			label: 'Suisses',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'vizelle',
			source: 'vizelle-bottom',
			target: 'vizelle-top',
			label: 'Vizelle',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'chanrossa',
			source: 'chanrossa-bottom',
			target: 'chanrossa-top',
			label: 'Chanrossa',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'saint-martin-express',
			source: 'saint-martin-express-bottom',
			target: 'saint-martin-express-top',
			label: 'Saint Martin Express',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'pionniers',
			source: 'pionniers-bottom',
			target: '3-vall-es-bottom',
			label: 'Pionniers',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'la-tania',
			source: 'la-tania-bottom',
			target: 'la-tania-top',
			label: 'La Tania',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'dou-des-lanches',
			source: 'dou-des-lanches-bottom',
			target: 'dou-des-lanches-top',
			label: 'Dou des Lanches',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'sources',
			source: 'sources-bottom',
			target: 'sources-top',
			label: 'Sources',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'rocher-de-l-ombre',
			source: 'sources-bottom',
			target: 'sources-top',
			label: "Rocher de l'Ombre",
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'chenus',
			source: 'chenus-bottom',
			target: 'chenus-top',
			label: 'Chenus',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'tougn-te-1',
			source: 'tougn-te-1-bottom',
			target: 'tougn-te-1-top',
			label: 'Tougnète 1',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'rhodos-1',
			source: 'rhodos-1-bottom',
			target: 'rhodos-1-top__rhodos-2-bottom',
			label: 'Rhodos 1',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'saint-martin-1',
			source: 'saint-martin-1-bottom',
			target: 'saint-martin-express-bottom',
			label: 'Saint Martin 1',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'caves',
			source: 'caves-bottom',
			target: 'caves-top',
			label: 'Caves',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'loze',
			source: 'loze-bottom',
			target: 'loze-top',
			label: 'Loze',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'roc-mugnier',
			source: 'roc-mugnier-bottom',
			target: 'roc-mugnier-top',
			label: 'Roc Mugnier',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'signal',
			source: 'signal-bottom',
			target: 'signal-top',
			label: 'Signal',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'biollay',
			source: 'biollay-bottom',
			target: 'biollay-top',
			label: 'Biollay',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'pralong',
			source: 'pralong-bottom',
			target: 'pralong-top',
			label: 'Pralong',
		},
	},
	{
		data: {
			type: 'magic_carpet',
			id: 'castor-pollux',
			source: 'castor-pollux-bottom',
			target: 'castor-pollux-top',
			label: 'Castor Pollux',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'golf',
			source: 'golf-bottom',
			target: 'golf-top',
			label: 'Golf',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'altiport',
			source: 'altiport-bottom',
			target: 'altiport-top',
			label: 'Altiport',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'inuits',
			source: 'inuits-bottom',
			target: 'inuits-top',
			label: 'Inuits',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'jardin-alpin',
			source: 'jardin-alpin-bottom',
			target: 'jardin-alpin-top',
			label: 'Jardin Alpin',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'tkd-gros-murger',
			source: 'tkd-gros-murger-bottom',
			target: 'tkd-gros-murger-top',
			label: 'TKD Gros Murger',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'roc-merlet',
			source: 'roc-merlet-bottom',
			target: 'chanrossa-top',
			label: 'Roc Merlet',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'chapelets',
			source: 'chapelets-bottom',
			target: 'chapelets-top',
			label: 'Chapelets',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'ariondaz',
			source: 'ariondaz-bottom',
			target: 'ariondaz-top',
			label: 'Ariondaz',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'croisette',
			source: 'croisette-bottom',
			target: 'croisette-top',
			label: 'Croisette',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'olympic',
			source: 'olympic-bottom',
			target: 'olympic-top',
			label: 'Olympic',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'legends',
			source: 'legends-bottom',
			target: 'caves-top',
			label: 'Legends',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'arpasson',
			source: 'arpasson-bottom',
			target: 'arpasson-top',
			label: 'Arpasson',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'dent-de-burgin',
			source: 'dent-de-burgin-bottom',
			target: 'dent-de-burgin-top',
			label: 'Dent de Burgin',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'adret',
			source: 'adret-bottom',
			target: 'adret-top',
			label: 'Adret',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'saulire-express-1',
			source: 'legends-bottom',
			target: 'saulire-express-1-top__saulire-express-2-bottom',
			label: 'Saulire Express 1',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'grangettes',
			source: 'grangettes-bottom',
			target: 'jardin-alpin-bottom',
			label: 'Grangettes',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'petite-bosse',
			source: 'signal-bottom',
			target: 'petite-bosse-top',
			label: 'Petite Bosse',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'plantrey',
			source: 'plantrey-bottom',
			target: 'plantrey-top',
			label: 'Plantrey',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'tovets',
			source: 'tovets-bottom',
			target: 'tovets-top',
			label: 'Tovets',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'stade',
			source: 'legends-bottom',
			target: 'stade-top',
			label: 'Stade',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'plan-de-l-eau',
			source: 'plan-de-l-eau-bottom',
			target: 'plan-de-l-eau-top',
			label: "Plan de l'Eau",
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'morel',
			source: 'morel-bottom',
			target: 'morel-top',
			label: 'Morel',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'stade-tania',
			source: 'stade-tania-bottom',
			target: 'stade-tania-top',
			label: 'Stade Tania',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'roc-de-tougne',
			source: 'roc-de-tougne-bottom',
			target: 'roc-de-tougne-top',
			label: 'Roc de Tougne',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'tougn-te-2',
			source: 'tougn-te-2-bottom',
			target: 'tougn-te-2-top',
			label: 'Tougnète 2',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'olympe-2',
			source: 'olympe-1-top__olympe-2-bottom',
			target: 'olympe-2-top__olympe-3-bottom',
			label: 'Olympe 2',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'sunny-express',
			source: 'sunny-express-bottom',
			target: 'sunny-express-top',
			label: 'Sunny Express',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'reberty',
			source: 'reberty-bottom',
			target: 'sunny-express-bottom',
			label: 'Reberty',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'granges',
			source: 'granges-bottom',
			target: 'granges-top',
			label: 'Granges',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'teppes',
			source: 'teppes-bottom',
			target: 'teppes-top',
			label: 'Teppes',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'mures-rouges',
			source: 'mures-rouges-bottom',
			target: 'mures-rouges-top',
			label: 'Mures Rouges',
		},
	},
	{
		data: {
			type: 'cable_car',
			id: 'preyerand',
			source: 'preyerand-bottom',
			target: 'preyerand-top',
			label: 'Preyerand',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'aigle',
			source: 'aigle-bottom',
			target: 'aigle-top',
			label: 'Aigle',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'village',
			source: 'village-bottom',
			target: 'village-top',
			label: 'Village',
		},
	},
	{
		data: {
			type: 'cable_car',
			id: 'saulire',
			source: 'saulire-bottom',
			target: 'saulire-top',
			label: 'Saulire',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'verdons',
			source: 'verdons-bottom',
			target: 'vizelle-bottom',
			label: 'Verdons',
		},
	},
	{
		data: {
			type: 'magic_carpet',
			id: 'plans',
			source: 'bruy-res-1-bottom',
			target: 'plans-top',
			label: 'Plans',
		},
	},
	{
		data: {
			type: 'magic_carpet',
			id: 'musaraigne',
			source: 'musaraigne-bottom',
			target: 'musaraigne-top',
			label: 'Musaraigne',
		},
	},
	{
		data: {
			type: 'magic_carpet',
			id: 'campagnols',
			source: 'cascades-bottom',
			target: 'campagnols-top',
			label: 'Campagnols',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'chalets',
			source: 'chalets-bottom',
			target: 'chalets-top',
			label: 'Chalets',
		},
	},
	{
		data: {
			type: 'magic_carpet',
			id: 'doron',
			source: 'doron-bottom',
			target: 'mont-de-la-chambre-bottom',
			label: 'Doron',
		},
	},
	{
		data: {
			type: 'drag_lift',
			id: 'loze-b',
			source: 'chenus-bottom',
			target: 'loze-b-top',
			label: 'Loze B',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'epicea',
			source: 'epicea-bottom',
			target: 'epicea-top',
			label: 'Epicea',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'jardin-d-enfants',
			source: 'jardin-d-enfants-bottom',
			target: 'jardin-d-enfants-top',
			label: "Jardin d'Enfants",
		},
	},
	{
		data: {
			type: 'platter',
			id: 'c-tes',
			source: 'c-tes-bottom',
			target: 'c-tes-top',
			label: 'Côtes',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'toiles',
			source: 'toiles-bottom',
			target: 'toiles-top',
			label: 'Étoiles',
		},
	},
	{
		data: {
			type: 'rope_tow',
			id: 'fontany',
			source: 'inuits-bottom',
			target: 'fontany-top',
			label: 'Fontany',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'jardin-d-enfants',
			source: 'jardin-d-enfants-bottom',
			target: 'jardin-d-enfants-top',
			label: "Jardin d'Enfants",
		},
	},
	{
		data: {
			type: 'platter',
			id: 'stade',
			source: 'legends-bottom',
			target: 'stade-top',
			label: 'Stade',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'pyramides-1',
			source: 'pyramides-2-bottom',
			target: 'pyramides-2-top',
			label: 'Pyramides 1',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'pyramides-2',
			source: 'pyramides-2-bottom',
			target: 'pyramides-2-top',
			label: 'Pyramides 2',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'altiport',
			source: 'altiport-bottom',
			target: 'altiport-top',
			label: 'Altiport',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'ferme',
			source: 'altiport-bottom',
			target: 'ferme-top',
			label: 'Ferme',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'mickey',
			source: 'belv-d-re-bottom',
			target: 'mickey-top',
			label: 'Mickey',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'belv-d-re',
			source: 'belv-d-re-bottom',
			target: 'belv-d-re-top',
			label: 'Belvédère',
		},
	},
	{
		data: {
			type: 'magic_carpet',
			id: 'preyerand',
			source: 'preyerand-bottom',
			target: 'preyerand-top',
			label: 'Preyerand',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'cospillot',
			source: 'cospillot-bottom',
			target: 'cospillot-top',
			label: 'Cospillot',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'roys',
			source: 'roys-bottom',
			target: 'roys-top',
			label: 'Roys',
		},
	},
	{
		data: {
			type: 'platter',
			id: 'bellec-te',
			source: 'bellec-te-bottom',
			target: 'bellec-te-top',
			label: 'Bellecôte',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'c-te-brune',
			source: 'c-te-brune-bottom',
			target: 'c-te-brune-top',
			label: 'Côte Brune',
		},
	},
	{
		data: {
			type: 'cable_car',
			id: 'thorens',
			source: 'thorens-bottom',
			target: 'thorens-top',
			label: 'Thorens',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'saulire-express-2',
			source: 'saulire-express-1-top__saulire-express-2-bottom',
			target: 'saulire-express-2-top',
			label: 'Saulire Express 2',
		},
	},
	{
		data: {
			type: 'drag_lift',
			id: 'loze-a',
			source: 'chenus-bottom',
			target: 'loze-b-top',
			label: 'Loze A',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'bouc-blanc',
			source: 'bouc-blanc-bottom',
			target: 'bouc-blanc-top',
			label: 'Bouc Blanc',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'plattieres',
			source: 'plattieres-bottom',
			target: 'plattieres-top',
			label: 'Plattieres',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'combes',
			source: 'doron-bottom',
			target: 'combes-top',
			label: 'Combes',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'for-t',
			source: 'for-t-bottom',
			target: 'for-t-top',
			label: 'Forêt',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'lac-blanc',
			source: 'lac-blanc-bottom',
			target: 'lac-blanc-top',
			label: 'Lac Blanc',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'cherferie',
			source: 'cherferie-bottom',
			target: 'cherferie-top',
			label: 'Cherferie',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'funitel-p-clet',
			source: 'funitel-p-clet-bottom',
			target: 'funitel-p-clet-top',
			label: 'Funitel Péclet',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'praz',
			source: 'praz-bottom',
			target: 'praz-top',
			label: 'Praz',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 't-l-cabine-d-orelle-caron',
			source: 't-l-cabine-d-orelle-caron-bottom',
			target: 't-l-cabine-d-orelle-caron-top',
			label: "Télécabine d'Orelle-Caron",
		},
	},
	{
		data: {
			type: 'magic_carpet',
			id: 'biolley-2',
			source: 'biolley-2-bottom',
			target: 'biolley-2-top',
			label: 'Biolley 2',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 't-l-cabine-d-orelle',
			source: 't-l-cabine-d-orelle-bottom',
			target: 'rosa-l-bottom',
			label: "Télécabine d'Orelle",
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'rhodos-2',
			source: 'rhodos-1-top__rhodos-2-bottom',
			target: 'rhodos-2-top',
			label: 'Rhodos 2',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'bruy-res-1',
			source: 'bruy-res-1-bottom',
			target: 'bruy-res-1-top__bruy-res-2-bottom',
			label: 'Bruyères 1',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'olympe-1',
			source: 'olympe-1-bottom',
			target: 'olympe-1-top__olympe-2-bottom',
			label: 'Olympe 1',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'olympe-3',
			source: 'olympe-2-top__olympe-3-bottom',
			target: 'olympe-3-top',
			label: 'Olympe 3',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'face-nord',
			source: 'face-nord-bottom',
			target: 'thorens-top',
			label: 'Face Nord',
		},
	},
	{
		data: {
			type: 'gondola',
			id: 'deux-lacs',
			source: 'deux-lacs-bottom',
			target: 'deux-lacs-top',
			label: 'Deux Lacs',
		},
	},
	{
		data: {
			type: 'chair_lift',
			id: 'marmottons',
			source: 'marmottons-bottom',
			target: 'marmottons-top',
			label: 'Marmottons',
		},
	},
	{
		data: {
			id: 't-l-cabine-d-orelle-bottom',
		},
		position: {
			y: 2 * (500 - 255),
			x: 2 * (500 - 0),
		},
	},
	{
		data: {
			id: 'rosa-l-bottom',
		},
		position: {
			y: 2 * (500 - 405),
			x: 2 * (500 - 160),
		},
	},
	{
		data: {
			id: 'peyron-bottom',
		},
		position: {
			y: 2 * (500 - 410),
			x: 2 * (500 - 160),
		},
	},
	{
		data: {
			id: 'marmottons-top',
		},
		position: {
			y: 2 * (500 - 405),
			x: 2 * (500 - 155),
		},
	},
	{
		data: {
			id: 't-l-cabine-d-orelle-caron-bottom',
		},
		position: {
			y: 2 * (500 - 400),
			x: 2 * (500 - 160),
		},
	},
	{
		data: {
			id: 'rosa-l-bottom',
		},
		position: {
			y: 2 * (500 - 405),
			x: 2 * (500 - 160),
		},
	},
	{
		data: {
			id: 'marmottons-bottom',
		},
		position: {
			y: 2 * (500 - 400),
			x: 2 * (500 - 155),
		},
	},
	{
		data: {
			id: 'peyron-top',
		},
		position: {
			y: 2 * (500 - 515),
			x: 2 * (500 - 180),
		},
	},
	{
		data: {
			id: 'bouchet-bottom',
		},
		position: {
			y: 2 * (500 - 510),
			x: 2 * (500 - 175),
		},
	},
	{
		data: {
			id: 'bouchet-top',
		},
		position: {
			y: 2 * (500 - 590),
			x: 2 * (500 - 195),
		},
	},
	{
		data: {
			id: 'boismint-top',
		},
		position: {
			y: 2 * (500 - 290),
			x: 2 * (500 - 305),
		},
	},
	{
		data: {
			id: 'plan-de-l-eau-top',
		},
		position: {
			y: 2 * (500 - 275),
			x: 2 * (500 - 325),
		},
	},
	{
		data: {
			id: 'masse-top',
		},
		position: {
			y: 2 * (500 - 95),
			x: 2 * (500 - 395),
		},
	},
	{
		data: {
			id: 'masse-bottom',
		},
		position: {
			y: 2 * (500 - 85),
			x: 2 * (500 - 420),
		},
	},
	{
		data: {
			id: 'plan-de-l-eau-bottom',
		},
		position: {
			y: 2 * (500 - 245),
			x: 2 * (500 - 390),
		},
	},
	{
		data: {
			id: 'bruy-res-1-bottom',
		},
		position: {
			y: 2 * (500 - 235),
			x: 2 * (500 - 430),
		},
	},
	{
		data: {
			id: 'sunny-express-bottom',
		},
		position: {
			y: 2 * (500 - 245),
			x: 2 * (500 - 435),
		},
	},
	{
		data: {
			id: 'plans-top',
		},
		position: {
			y: 2 * (500 - 240),
			x: 2 * (500 - 425),
		},
	},
	{
		data: {
			id: 'bruy-res-1-bottom',
		},
		position: {
			y: 2 * (500 - 235),
			x: 2 * (500 - 430),
		},
	},
	{
		data: {
			id: 'sunny-express-bottom',
		},
		position: {
			y: 2 * (500 - 245),
			x: 2 * (500 - 435),
		},
	},
	{
		data: {
			id: 't-l-cabine-d-orelle-caron-top',
		},
		position: {
			y: 2 * (500 - 340),
			x: 2 * (500 - 230),
		},
	},
	{
		data: {
			id: 'cime-caron-top',
		},
		position: {
			y: 2 * (500 - 345),
			x: 2 * (500 - 230),
		},
	},
	{
		data: {
			id: 'rosa-l-top',
		},
		position: {
			y: 2 * (500 - 435),
			x: 2 * (500 - 240),
		},
	},
	{
		data: {
			id: 'caron-top',
		},
		position: {
			y: 2 * (500 - 360),
			x: 2 * (500 - 300),
		},
	},
	{
		data: {
			id: 'caron-top',
		},
		position: {
			y: 2 * (500 - 360),
			x: 2 * (500 - 300),
		},
	},
	{
		data: {
			id: 'grand-fond-bottom',
		},
		position: {
			y: 2 * (500 - 390),
			x: 2 * (500 - 300),
		},
	},
	{
		data: {
			id: 'plateau-2-bottom',
		},
		position: {
			y: 2 * (500 - 420),
			x: 2 * (500 - 300),
		},
	},
	{
		data: {
			id: 'plateau-2-top',
		},
		position: {
			y: 2 * (500 - 465),
			x: 2 * (500 - 285),
		},
	},
	{
		data: {
			id: 'deux-lacs-top',
		},
		position: {
			y: 2 * (500 - 430),
			x: 2 * (500 - 305),
		},
	},
	{
		data: {
			id: 'grand-fond-top',
		},
		position: {
			y: 2 * (500 - 470),
			x: 2 * (500 - 240),
		},
	},
	{
		data: {
			id: 'thorens-bottom',
		},
		position: {
			y: 2 * (500 - 540),
			x: 2 * (500 - 265),
		},
	},
	{
		data: {
			id: 'thorens-top',
		},
		position: {
			y: 2 * (500 - 560),
			x: 2 * (500 - 240),
		},
	},
	{
		data: {
			id: 'moraine-bottom',
		},
		position: {
			y: 2 * (500 - 485),
			x: 2 * (500 - 330),
		},
	},
	{
		data: {
			id: 'face-nord-bottom',
		},
		position: {
			y: 2 * (500 - 580),
			x: 2 * (500 - 280),
		},
	},
	{
		data: {
			id: 'cairn-bottom__caron-bottom',
		},
		position: {
			y: 2 * (500 - 370),
			x: 2 * (500 - 355),
		},
	},
	{
		data: {
			id: 'boismint-bottom',
		},
		position: {
			y: 2 * (500 - 350),
			x: 2 * (500 - 360),
		},
	},
	{
		data: {
			id: 'mouti-re-bottom',
		},
		position: {
			y: 2 * (500 - 355),
			x: 2 * (500 - 360),
		},
	},
	{
		data: {
			id: 'plein-sud-bottom',
		},
		position: {
			y: 2 * (500 - 415),
			x: 2 * (500 - 360),
		},
	},
	{
		data: {
			id: 'cascades-bottom',
		},
		position: {
			y: 2 * (500 - 450),
			x: 2 * (500 - 360),
		},
	},
	{
		data: {
			id: 'deux-lacs-bottom',
		},
		position: {
			y: 2 * (500 - 410),
			x: 2 * (500 - 365),
		},
	},
	{
		data: {
			id: 'cairn-top',
		},
		position: {
			y: 2 * (500 - 450),
			x: 2 * (500 - 375),
		},
	},
	{
		data: {
			id: 'cascades-bottom',
		},
		position: {
			y: 2 * (500 - 450),
			x: 2 * (500 - 360),
		},
	},
	{
		data: {
			id: 'musaraigne-bottom',
		},
		position: {
			y: 2 * (500 - 440),
			x: 2 * (500 - 365),
		},
	},
	{
		data: {
			id: 'musaraigne-top',
		},
		position: {
			y: 2 * (500 - 455),
			x: 2 * (500 - 365),
		},
	},
	{
		data: {
			id: 'funitel-p-clet-bottom',
		},
		position: {
			y: 2 * (500 - 440),
			x: 2 * (500 - 360),
		},
	},
	{
		data: {
			id: 'bruy-res-1-top__bruy-res-2-bottom',
		},
		position: {
			y: 2 * (500 - 330),
			x: 2 * (500 - 435),
		},
	},
	{
		data: {
			id: 'lac-blanc-bottom',
		},
		position: {
			y: 2 * (500 - 480),
			x: 2 * (500 - 355),
		},
	},
	{
		data: {
			id: 'campagnols-top',
		},
		position: {
			y: 2 * (500 - 470),
			x: 2 * (500 - 360),
		},
	},
	{
		data: {
			id: 'castor-pollux-top',
		},
		position: {
			y: 2 * (500 - 480),
			x: 2 * (500 - 370),
		},
	},
	{
		data: {
			id: 'pionniers-bottom',
		},
		position: {
			y: 2 * (500 - 480),
			x: 2 * (500 - 360),
		},
	},
	{
		data: {
			id: 'castor-pollux-bottom',
		},
		position: {
			y: 2 * (500 - 475),
			x: 2 * (500 - 360),
		},
	},
	{
		data: {
			id: 'cascades-top',
		},
		position: {
			y: 2 * (500 - 555),
			x: 2 * (500 - 345),
		},
	},
	{
		data: {
			id: 'funitel-3-vall-es-bottom',
		},
		position: {
			y: 2 * (500 - 500),
			x: 2 * (500 - 400),
		},
	},
	{
		data: {
			id: '3-vall-es-bottom',
		},
		position: {
			y: 2 * (500 - 505),
			x: 2 * (500 - 400),
		},
	},
	{
		data: {
			id: 'plein-sud-top',
		},
		position: {
			y: 2 * (500 - 520),
			x: 2 * (500 - 405),
		},
	},
	{
		data: {
			id: '3-vall-es-bottom',
		},
		position: {
			y: 2 * (500 - 505),
			x: 2 * (500 - 400),
		},
	},
	{
		data: {
			id: 'funitel-3-vall-es-top',
		},
		position: {
			y: 2 * (500 - 475),
			x: 2 * (500 - 430),
		},
	},
	{
		data: {
			id: '3-vall-es-top',
		},
		position: {
			y: 2 * (500 - 510),
			x: 2 * (500 - 430),
		},
	},
	{
		data: {
			id: 'moraine-top',
		},
		position: {
			y: 2 * (500 - 625),
			x: 2 * (500 - 270),
		},
	},
	{
		data: {
			id: 'funitel-p-clet-top',
		},
		position: {
			y: 2 * (500 - 675),
			x: 2 * (500 - 345),
		},
	},
	{
		data: {
			id: 'lac-blanc-top',
		},
		position: {
			y: 2 * (500 - 630),
			x: 2 * (500 - 365),
		},
	},
	{
		data: {
			id: 'doron-bottom',
		},
		position: {
			y: 2 * (500 - 190),
			x: 2 * (500 - 460),
		},
	},
	{
		data: {
			id: 'croisette-bottom',
		},
		position: {
			y: 2 * (500 - 185),
			x: 2 * (500 - 460),
		},
	},
	{
		data: {
			id: 'reberty-bottom',
		},
		position: {
			y: 2 * (500 - 190),
			x: 2 * (500 - 455),
		},
	},
	{
		data: {
			id: 'jardin-d-enfants-bottom',
		},
		position: {
			y: 2 * (500 - 210),
			x: 2 * (500 - 470),
		},
	},
	{
		data: {
			id: 'jardin-d-enfants-top',
		},
		position: {
			y: 2 * (500 - 220),
			x: 2 * (500 - 460),
		},
	},
	{
		data: {
			id: 'tortollet-bottom',
		},
		position: {
			y: 2 * (500 - 160),
			x: 2 * (500 - 485),
		},
	},
	{
		data: {
			id: 'roc-1-bottom',
		},
		position: {
			y: 2 * (500 - 210),
			x: 2 * (500 - 475),
		},
	},
	{
		data: {
			id: 'roc-1-bottom',
		},
		position: {
			y: 2 * (500 - 210),
			x: 2 * (500 - 475),
		},
	},
	{
		data: {
			id: 'croisette-top',
		},
		position: {
			y: 2 * (500 - 205),
			x: 2 * (500 - 470),
		},
	},
	{
		data: {
			id: 'preyerand-bottom',
		},
		position: {
			y: 2 * (500 - 190),
			x: 2 * (500 - 490),
		},
	},
	{
		data: {
			id: 'preyerand-top',
		},
		position: {
			y: 2 * (500 - 215),
			x: 2 * (500 - 485),
		},
	},
	{
		data: {
			id: 'preyerand-bottom',
		},
		position: {
			y: 2 * (500 - 190),
			x: 2 * (500 - 490),
		},
	},
	{
		data: {
			id: 'preyerand-top',
		},
		position: {
			y: 2 * (500 - 200),
			x: 2 * (500 - 490),
		},
	},
	{
		data: {
			id: 'tortollet-top',
		},
		position: {
			y: 2 * (500 - 220),
			x: 2 * (500 - 490),
		},
	},
	{
		data: {
			id: 'mont-de-la-chambre-bottom',
		},
		position: {
			y: 2 * (500 - 280),
			x: 2 * (500 - 460),
		},
	},
	{
		data: {
			id: 'menuires-top',
		},
		position: {
			y: 2 * (500 - 290),
			x: 2 * (500 - 465),
		},
	},
	{
		data: {
			id: 'mont-de-la-chambre-bottom',
		},
		position: {
			y: 2 * (500 - 280),
			x: 2 * (500 - 460),
		},
	},
	{
		data: {
			id: 'legends-bottom',
		},
		position: {
			y: 2 * (500 - 230),
			x: 2 * (500 - 475),
		},
	},
	{
		data: {
			id: 'becca-bottom',
		},
		position: {
			y: 2 * (500 - 300),
			x: 2 * (500 - 490),
		},
	},
	{
		data: {
			id: 'stade-top',
		},
		position: {
			y: 2 * (500 - 295),
			x: 2 * (500 - 485),
		},
	},
	{
		data: {
			id: 'sunny-express-top',
		},
		position: {
			y: 2 * (500 - 370),
			x: 2 * (500 - 480),
		},
	},
	{
		data: {
			id: 'mont-de-la-chambre-top',
		},
		position: {
			y: 2 * (500 - 455),
			x: 2 * (500 - 460),
		},
	},
	{
		data: {
			id: 'bruy-res-2-top',
		},
		position: {
			y: 2 * (500 - 455),
			x: 2 * (500 - 455),
		},
	},
	{
		data: {
			id: 'roc-1-top',
		},
		position: {
			y: 2 * (500 - 310),
			x: 2 * (500 - 505),
		},
	},
	{
		data: {
			id: 'roc-2-bottom',
		},
		position: {
			y: 2 * (500 - 315),
			x: 2 * (500 - 520),
		},
	},
	{
		data: {
			id: 'becca-top',
		},
		position: {
			y: 2 * (500 - 410),
			x: 2 * (500 - 510),
		},
	},
	{
		data: {
			id: 'roc-2-top',
		},
		position: {
			y: 2 * (500 - 410),
			x: 2 * (500 - 535),
		},
	},
	{
		data: {
			id: 'granges-top',
		},
		position: {
			y: 2 * (500 - 420),
			x: 2 * (500 - 540),
		},
	},
	{
		data: {
			id: 'bouquetin-top',
		},
		position: {
			y: 2 * (500 - 425),
			x: 2 * (500 - 540),
		},
	},
	{
		data: {
			id: 'c-te-brune-top',
		},
		position: {
			y: 2 * (500 - 465),
			x: 2 * (500 - 460),
		},
	},
	{
		data: {
			id: 'c-te-brune-bottom',
		},
		position: {
			y: 2 * (500 - 475),
			x: 2 * (500 - 530),
		},
	},
	{
		data: {
			id: 'plan-des-mains-bottom',
		},
		position: {
			y: 2 * (500 - 520),
			x: 2 * (500 - 550),
		},
	},
	{
		data: {
			id: 'granges-bottom',
		},
		position: {
			y: 2 * (500 - 305),
			x: 2 * (500 - 600),
		},
	},
	{
		data: {
			id: 'teppes-top',
		},
		position: {
			y: 2 * (500 - 380),
			x: 2 * (500 - 600),
		},
	},
	{
		data: {
			id: 'plan-des-mains-top',
		},
		position: {
			y: 2 * (500 - 460),
			x: 2 * (500 - 555),
		},
	},
	{
		data: {
			id: 'plattieres-top',
		},
		position: {
			y: 2 * (500 - 450),
			x: 2 * (500 - 560),
		},
	},
	{
		data: {
			id: 'roc-de-tougne-top',
		},
		position: {
			y: 2 * (500 - 385),
			x: 2 * (500 - 600),
		},
	},
	{
		data: {
			id: 'teppes-bottom',
		},
		position: {
			y: 2 * (500 - 305),
			x: 2 * (500 - 605),
		},
	},
	{
		data: {
			id: 'tougn-te-2-top',
		},
		position: {
			y: 2 * (500 - 330),
			x: 2 * (500 - 645),
		},
	},
	{
		data: {
			id: 'saint-martin-express-top',
		},
		position: {
			y: 2 * (500 - 325),
			x: 2 * (500 - 645),
		},
	},
	{
		data: {
			id: 'roc-de-tougne-bottom',
		},
		position: {
			y: 2 * (500 - 390),
			x: 2 * (500 - 645),
		},
	},
	{
		data: {
			id: 'combes-top',
		},
		position: {
			y: 2 * (500 - 390),
			x: 2 * (500 - 650),
		},
	},
	{
		data: {
			id: 'bouquetin-bottom',
		},
		position: {
			y: 2 * (500 - 465),
			x: 2 * (500 - 555),
		},
	},
	{
		data: {
			id: 'mont-vallon-bottom',
		},
		position: {
			y: 2 * (500 - 530),
			x: 2 * (500 - 550),
		},
	},
	{
		data: {
			id: 'mures-rouges-top',
		},
		position: {
			y: 2 * (500 - 530),
			x: 2 * (500 - 555),
		},
	},
	{
		data: {
			id: 'mures-rouges-bottom',
		},
		position: {
			y: 2 * (500 - 540),
			x: 2 * (500 - 585),
		},
	},
	{
		data: {
			id: 'saint-martin-1-bottom',
		},
		position: {
			y: 2 * (500 - 0),
			x: 2 * (500 - 695),
		},
	},
	{
		data: {
			id: 'village-bottom',
		},
		position: {
			y: 2 * (500 - 0),
			x: 2 * (500 - 705),
		},
	},
	{
		data: {
			id: 'village-top',
		},
		position: {
			y: 2 * (500 - 10),
			x: 2 * (500 - 700),
		},
	},
	{
		data: {
			id: 'biolley-2-bottom',
		},
		position: {
			y: 2 * (500 - 5),
			x: 2 * (500 - 695),
		},
	},
	{
		data: {
			id: 'biolley-2-top',
		},
		position: {
			y: 2 * (500 - 10),
			x: 2 * (500 - 695),
		},
	},
	{
		data: {
			id: 'saint-martin-express-bottom',
		},
		position: {
			y: 2 * (500 - 150),
			x: 2 * (500 - 680),
		},
	},
	{
		data: {
			id: 'saint-martin-express-bottom',
		},
		position: {
			y: 2 * (500 - 150),
			x: 2 * (500 - 680),
		},
	},
	{
		data: {
			id: 'cherferie-top',
		},
		position: {
			y: 2 * (500 - 285),
			x: 2 * (500 - 685),
		},
	},
	{
		data: {
			id: 'olympic-top',
		},
		position: {
			y: 2 * (500 - 195),
			x: 2 * (500 - 760),
		},
	},
	{
		data: {
			id: 'caves-bottom',
		},
		position: {
			y: 2 * (500 - 300),
			x: 2 * (500 - 725),
		},
	},
	{
		data: {
			id: 'olympic-bottom',
		},
		position: {
			y: 2 * (500 - 295),
			x: 2 * (500 - 755),
		},
	},
	{
		data: {
			id: 'caves-top',
		},
		position: {
			y: 2 * (500 - 305),
			x: 2 * (500 - 710),
		},
	},
	{
		data: {
			id: 'arpasson-top',
		},
		position: {
			y: 2 * (500 - 310),
			x: 2 * (500 - 710),
		},
	},
	{
		data: {
			id: 'tougn-te-2-bottom',
		},
		position: {
			y: 2 * (500 - 360),
			x: 2 * (500 - 695),
		},
	},
	{
		data: {
			id: 'tougn-te-1-top',
		},
		position: {
			y: 2 * (500 - 365),
			x: 2 * (500 - 700),
		},
	},
	{
		data: {
			id: 'mont-de-la-chambre-bottom',
		},
		position: {
			y: 2 * (500 - 455),
			x: 2 * (500 - 680),
		},
	},
	{
		data: {
			id: 'chalets-top',
		},
		position: {
			y: 2 * (500 - 425),
			x: 2 * (500 - 685),
		},
	},
	{
		data: {
			id: 'caves-top',
		},
		position: {
			y: 2 * (500 - 305),
			x: 2 * (500 - 710),
		},
	},
	{
		data: {
			id: 'cherferie-bottom',
		},
		position: {
			y: 2 * (500 - 305),
			x: 2 * (500 - 725),
		},
	},
	{
		data: {
			id: 'arpasson-bottom',
		},
		position: {
			y: 2 * (500 - 360),
			x: 2 * (500 - 720),
		},
	},
	{
		data: {
			id: 'stade-top',
		},
		position: {
			y: 2 * (500 - 340),
			x: 2 * (500 - 755),
		},
	},
	{
		data: {
			id: 'legends-bottom',
		},
		position: {
			y: 2 * (500 - 385),
			x: 2 * (500 - 755),
		},
	},
	{
		data: {
			id: 'rhodos-1-bottom',
		},
		position: {
			y: 2 * (500 - 390),
			x: 2 * (500 - 760),
		},
	},
	{
		data: {
			id: 'legends-bottom',
		},
		position: {
			y: 2 * (500 - 385),
			x: 2 * (500 - 755),
		},
	},
	{
		data: {
			id: 'tougn-te-1-bottom',
		},
		position: {
			y: 2 * (500 - 390),
			x: 2 * (500 - 755),
		},
	},
	{
		data: {
			id: 'legends-bottom',
		},
		position: {
			y: 2 * (500 - 385),
			x: 2 * (500 - 755),
		},
	},
	{
		data: {
			id: 'pas-du-lac-1-bottom',
		},
		position: {
			y: 2 * (500 - 465),
			x: 2 * (500 - 675),
		},
	},
	{
		data: {
			id: 'aigle-bottom',
		},
		position: {
			y: 2 * (500 - 470),
			x: 2 * (500 - 680),
		},
	},
	{
		data: {
			id: 'aigle-top',
		},
		position: {
			y: 2 * (500 - 505),
			x: 2 * (500 - 680),
		},
	},
	{
		data: {
			id: '1134357012',
		},
		position: {
			y: 2 * (500 - 470),
			x: 2 * (500 - 670),
		},
	},
	{
		data: {
			id: '1134357015',
		},
		position: {
			y: 2 * (500 - 475),
			x: 2 * (500 - 670),
		},
	},
	{
		data: {
			id: 'doron-bottom',
		},
		position: {
			y: 2 * (500 - 465),
			x: 2 * (500 - 680),
		},
	},
	{
		data: {
			id: 'plattieres-bottom',
		},
		position: {
			y: 2 * (500 - 470),
			x: 2 * (500 - 675),
		},
	},
	{
		data: {
			id: 'doron-bottom',
		},
		position: {
			y: 2 * (500 - 465),
			x: 2 * (500 - 680),
		},
	},
	{
		data: {
			id: 'chalets-bottom',
		},
		position: {
			y: 2 * (500 - 465),
			x: 2 * (500 - 685),
		},
	},
	{
		data: {
			id: 'pas-du-lac-1-top__pas-du-lac-2-bottom',
		},
		position: {
			y: 2 * (500 - 570),
			x: 2 * (500 - 710),
		},
	},
	{
		data: {
			id: 'saulire-express-1-top__saulire-express-2-bottom',
		},
		position: {
			y: 2 * (500 - 515),
			x: 2 * (500 - 750),
		},
	},
	{
		data: {
			id: 'dent-de-burgin-top',
		},
		position: {
			y: 2 * (500 - 580),
			x: 2 * (500 - 745),
		},
	},
	{
		data: {
			id: 'adret-top',
		},
		position: {
			y: 2 * (500 - 545),
			x: 2 * (500 - 745),
		},
	},
	{
		data: {
			id: 'olympe-3-top',
		},
		position: {
			y: 2 * (500 - 375),
			x: 2 * (500 - 770),
		},
	},
	{
		data: {
			id: 'adret-bottom',
		},
		position: {
			y: 2 * (500 - 410),
			x: 2 * (500 - 780),
		},
	},
	{
		data: {
			id: 'rhodos-1-top__rhodos-2-bottom',
		},
		position: {
			y: 2 * (500 - 440),
			x: 2 * (500 - 765),
		},
	},
	{
		data: {
			id: 'c-tes-bottom',
		},
		position: {
			y: 2 * (500 - 435),
			x: 2 * (500 - 775),
		},
	},
	{
		data: {
			id: 'c-tes-top',
		},
		position: {
			y: 2 * (500 - 445),
			x: 2 * (500 - 765),
		},
	},
	{
		data: {
			id: '1179587182',
		},
		position: {
			y: 2 * (500 - 440),
			x: 2 * (500 - 775),
		},
	},
	{
		data: {
			id: '1190087927',
		},
		position: {
			y: 2 * (500 - 430),
			x: 2 * (500 - 775),
		},
	},
	{
		data: {
			id: '1190087950',
		},
		position: {
			y: 2 * (500 - 430),
			x: 2 * (500 - 780),
		},
	},
	{
		data: {
			id: 'c-tes-bottom',
		},
		position: {
			y: 2 * (500 - 435),
			x: 2 * (500 - 775),
		},
	},
	{
		data: {
			id: 'morel-bottom',
		},
		position: {
			y: 2 * (500 - 405),
			x: 2 * (500 - 805),
		},
	},
	{
		data: {
			id: 'golf-top',
		},
		position: {
			y: 2 * (500 - 455),
			x: 2 * (500 - 815),
		},
	},
	{
		data: {
			id: 'altiport-bottom',
		},
		position: {
			y: 2 * (500 - 460),
			x: 2 * (500 - 810),
		},
	},
	{
		data: {
			id: 'inuits-bottom',
		},
		position: {
			y: 2 * (500 - 455),
			x: 2 * (500 - 810),
		},
	},
	{
		data: {
			id: 'morel-top',
		},
		position: {
			y: 2 * (500 - 450),
			x: 2 * (500 - 800),
		},
	},
	{
		data: {
			id: 'inuits-bottom',
		},
		position: {
			y: 2 * (500 - 455),
			x: 2 * (500 - 810),
		},
	},
	{
		data: {
			id: 'fontany-top',
		},
		position: {
			y: 2 * (500 - 450),
			x: 2 * (500 - 805),
		},
	},
	{
		data: {
			id: 'olympe-2-top__olympe-3-bottom',
		},
		position: {
			y: 2 * (500 - 345),
			x: 2 * (500 - 825),
		},
	},
	{
		data: {
			id: 'golf-bottom',
		},
		position: {
			y: 2 * (500 - 375),
			x: 2 * (500 - 855),
		},
	},
	{
		data: {
			id: 'rhodos-2-top',
		},
		position: {
			y: 2 * (500 - 500),
			x: 2 * (500 - 775),
		},
	},
	{
		data: {
			id: 'altiport-top',
		},
		position: {
			y: 2 * (500 - 515),
			x: 2 * (500 - 770),
		},
	},
	{
		data: {
			id: 'dent-de-burgin-bottom',
		},
		position: {
			y: 2 * (500 - 520),
			x: 2 * (500 - 785),
		},
	},
	{
		data: {
			id: 'inuits-top',
		},
		position: {
			y: 2 * (500 - 480),
			x: 2 * (500 - 795),
		},
	},
	{
		data: {
			id: 'loze-bottom',
		},
		position: {
			y: 2 * (500 - 510),
			x: 2 * (500 - 805),
		},
	},
	{
		data: {
			id: 'dou-des-lanches-top',
		},
		position: {
			y: 2 * (500 - 605),
			x: 2 * (500 - 825),
		},
	},
	{
		data: {
			id: 'loze-top',
		},
		position: {
			y: 2 * (500 - 600),
			x: 2 * (500 - 825),
		},
	},
	{
		data: {
			id: 'mont-vallon-top',
		},
		position: {
			y: 2 * (500 - 650),
			x: 2 * (500 - 500),
		},
	},
	{
		data: {
			id: 'pas-du-lac-2-top',
		},
		position: {
			y: 2 * (500 - 645),
			x: 2 * (500 - 715),
		},
	},
	{
		data: {
			id: 'saulire-top',
		},
		position: {
			y: 2 * (500 - 655),
			x: 2 * (500 - 725),
		},
	},
	{
		data: {
			id: 'saulire-express-2-top',
		},
		position: {
			y: 2 * (500 - 650),
			x: 2 * (500 - 725),
		},
	},
	{
		data: {
			id: 'suisses-top',
		},
		position: {
			y: 2 * (500 - 685),
			x: 2 * (500 - 720),
		},
	},
	{
		data: {
			id: 'vizelle-top',
		},
		position: {
			y: 2 * (500 - 680),
			x: 2 * (500 - 720),
		},
	},
	{
		data: {
			id: 'suisses-top',
		},
		position: {
			y: 2 * (500 - 685),
			x: 2 * (500 - 720),
		},
	},
	{
		data: {
			id: 'aiguille-du-fruit-top',
		},
		position: {
			y: 2 * (500 - 775),
			x: 2 * (500 - 725),
		},
	},
	{
		data: {
			id: 'pralong-top',
		},
		position: {
			y: 2 * (500 - 740),
			x: 2 * (500 - 760),
		},
	},
	{
		data: {
			id: 'biollay-top',
		},
		position: {
			y: 2 * (500 - 735),
			x: 2 * (500 - 760),
		},
	},
	{
		data: {
			id: 'suisses-bottom',
		},
		position: {
			y: 2 * (500 - 775),
			x: 2 * (500 - 755),
		},
	},
	{
		data: {
			id: 'chanrossa-top',
		},
		position: {
			y: 2 * (500 - 865),
			x: 2 * (500 - 675),
		},
	},
	{
		data: {
			id: 'chanrossa-top',
		},
		position: {
			y: 2 * (500 - 865),
			x: 2 * (500 - 675),
		},
	},
	{
		data: {
			id: 'marmottes-bottom',
		},
		position: {
			y: 2 * (500 - 790),
			x: 2 * (500 - 705),
		},
	},
	{
		data: {
			id: 'chanrossa-bottom',
		},
		position: {
			y: 2 * (500 - 795),
			x: 2 * (500 - 705),
		},
	},
	{
		data: {
			id: 'roc-merlet-bottom',
		},
		position: {
			y: 2 * (500 - 905),
			x: 2 * (500 - 680),
		},
	},
	{
		data: {
			id: 'pyramides-2-top',
		},
		position: {
			y: 2 * (500 - 915),
			x: 2 * (500 - 680),
		},
	},
	{
		data: {
			id: 'pyramides-2-top',
		},
		position: {
			y: 2 * (500 - 915),
			x: 2 * (500 - 680),
		},
	},
	{
		data: {
			id: 'aiguille-du-fruit-bottom',
		},
		position: {
			y: 2 * (500 - 850),
			x: 2 * (500 - 760),
		},
	},
	{
		data: {
			id: 'roc-mugnier-bottom',
		},
		position: {
			y: 2 * (500 - 855),
			x: 2 * (500 - 760),
		},
	},
	{
		data: {
			id: 'pyramides-2-bottom',
		},
		position: {
			y: 2 * (500 - 915),
			x: 2 * (500 - 735),
		},
	},
	{
		data: {
			id: 'roc-mugnier-top',
		},
		position: {
			y: 2 * (500 - 925),
			x: 2 * (500 - 735),
		},
	},
	{
		data: {
			id: 'pyramides-2-bottom',
		},
		position: {
			y: 2 * (500 - 915),
			x: 2 * (500 - 735),
		},
	},
	{
		data: {
			id: 'sources-top',
		},
		position: {
			y: 2 * (500 - 690),
			x: 2 * (500 - 775),
		},
	},
	{
		data: {
			id: 'sources-top',
		},
		position: {
			y: 2 * (500 - 690),
			x: 2 * (500 - 775),
		},
	},
	{
		data: {
			id: 'chenus-top',
		},
		position: {
			y: 2 * (500 - 675),
			x: 2 * (500 - 820),
		},
	},
	{
		data: {
			id: 'vizelle-bottom',
		},
		position: {
			y: 2 * (500 - 715),
			x: 2 * (500 - 775),
		},
	},
	{
		data: {
			id: 'vizelle-bottom',
		},
		position: {
			y: 2 * (500 - 715),
			x: 2 * (500 - 775),
		},
	},
	{
		data: {
			id: 'saulire-bottom',
		},
		position: {
			y: 2 * (500 - 710),
			x: 2 * (500 - 775),
		},
	},
	{
		data: {
			id: 'sources-bottom',
		},
		position: {
			y: 2 * (500 - 750),
			x: 2 * (500 - 810),
		},
	},
	{
		data: {
			id: 'sources-bottom',
		},
		position: {
			y: 2 * (500 - 750),
			x: 2 * (500 - 810),
		},
	},
	{
		data: {
			id: 'biollay-bottom',
		},
		position: {
			y: 2 * (500 - 770),
			x: 2 * (500 - 820),
		},
	},
	{
		data: {
			id: 'jardin-alpin-top',
		},
		position: {
			y: 2 * (500 - 770),
			x: 2 * (500 - 795),
		},
	},
	{
		data: {
			id: 'bellec-te-top',
		},
		position: {
			y: 2 * (500 - 785),
			x: 2 * (500 - 805),
		},
	},
	{
		data: {
			id: 'plantrey-top',
		},
		position: {
			y: 2 * (500 - 690),
			x: 2 * (500 - 840),
		},
	},
	{
		data: {
			id: 'loze-b-top',
		},
		position: {
			y: 2 * (500 - 690),
			x: 2 * (500 - 835),
		},
	},
	{
		data: {
			id: 'loze-b-top',
		},
		position: {
			y: 2 * (500 - 690),
			x: 2 * (500 - 835),
		},
	},
	{
		data: {
			id: 'bouc-blanc-top',
		},
		position: {
			y: 2 * (500 - 675),
			x: 2 * (500 - 825),
		},
	},
	{
		data: {
			id: 'la-tania-top',
		},
		position: {
			y: 2 * (500 - 645),
			x: 2 * (500 - 865),
		},
	},
	{
		data: {
			id: 'dou-des-lanches-bottom',
		},
		position: {
			y: 2 * (500 - 630),
			x: 2 * (500 - 860),
		},
	},
	{
		data: {
			id: 'stade-tania-top',
		},
		position: {
			y: 2 * (500 - 635),
			x: 2 * (500 - 860),
		},
	},
	{
		data: {
			id: '1189944176',
		},
		position: {
			y: 2 * (500 - 650),
			x: 2 * (500 - 860),
		},
	},
	{
		data: {
			id: '1189944176',
		},
		position: {
			y: 2 * (500 - 650),
			x: 2 * (500 - 860),
		},
	},
	{
		data: {
			id: 'for-t-top',
		},
		position: {
			y: 2 * (500 - 655),
			x: 2 * (500 - 865),
		},
	},
	{
		data: {
			id: 'toiles-top',
		},
		position: {
			y: 2 * (500 - 785),
			x: 2 * (500 - 820),
		},
	},
	{
		data: {
			id: 'epicea-top',
		},
		position: {
			y: 2 * (500 - 740),
			x: 2 * (500 - 865),
		},
	},
	{
		data: {
			id: 'chenus-bottom',
		},
		position: {
			y: 2 * (500 - 785),
			x: 2 * (500 - 850),
		},
	},
	{
		data: {
			id: 'chenus-bottom',
		},
		position: {
			y: 2 * (500 - 785),
			x: 2 * (500 - 850),
		},
	},
	{
		data: {
			id: 'chenus-bottom',
		},
		position: {
			y: 2 * (500 - 785),
			x: 2 * (500 - 850),
		},
	},
	{
		data: {
			id: 'altiport-top',
		},
		position: {
			y: 2 * (500 - 790),
			x: 2 * (500 - 785),
		},
	},
	{
		data: {
			id: 'pralong-bottom',
		},
		position: {
			y: 2 * (500 - 810),
			x: 2 * (500 - 810),
		},
	},
	{
		data: {
			id: 'altiport-bottom',
		},
		position: {
			y: 2 * (500 - 820),
			x: 2 * (500 - 810),
		},
	},
	{
		data: {
			id: 'altiport-bottom',
		},
		position: {
			y: 2 * (500 - 820),
			x: 2 * (500 - 810),
		},
	},
	{
		data: {
			id: 'ferme-top',
		},
		position: {
			y: 2 * (500 - 805),
			x: 2 * (500 - 795),
		},
	},
	{
		data: {
			id: 'cospillot-top',
		},
		position: {
			y: 2 * (500 - 815),
			x: 2 * (500 - 810),
		},
	},
	{
		data: {
			id: 'petite-bosse-top',
		},
		position: {
			y: 2 * (500 - 895),
			x: 2 * (500 - 785),
		},
	},
	{
		data: {
			id: 'ariondaz-top',
		},
		position: {
			y: 2 * (500 - 940),
			x: 2 * (500 - 775),
		},
	},
	{
		data: {
			id: 'granges-top',
		},
		position: {
			y: 2 * (500 - 935),
			x: 2 * (500 - 790),
		},
	},
	{
		data: {
			id: '9758920513',
		},
		position: {
			y: 2 * (500 - 945),
			x: 2 * (500 - 770),
		},
	},
	{
		data: {
			id: '9758920513',
		},
		position: {
			y: 2 * (500 - 945),
			x: 2 * (500 - 770),
		},
	},
	{
		data: {
			id: '13208384569',
		},
		position: {
			y: 2 * (500 - 950),
			x: 2 * (500 - 770),
		},
	},
	{
		data: {
			id: '13208384570',
		},
		position: {
			y: 2 * (500 - 945),
			x: 2 * (500 - 765),
		},
	},
	{
		data: {
			id: 'signal-bottom',
		},
		position: {
			y: 2 * (500 - 920),
			x: 2 * (500 - 795),
		},
	},
	{
		data: {
			id: 'signal-bottom',
		},
		position: {
			y: 2 * (500 - 920),
			x: 2 * (500 - 795),
		},
	},
	{
		data: {
			id: 'toiles-bottom',
		},
		position: {
			y: 2 * (500 - 800),
			x: 2 * (500 - 840),
		},
	},
	{
		data: {
			id: 'cospillot-bottom',
		},
		position: {
			y: 2 * (500 - 835),
			x: 2 * (500 - 840),
		},
	},
	{
		data: {
			id: 'verdons-bottom',
		},
		position: {
			y: 2 * (500 - 790),
			x: 2 * (500 - 855),
		},
	},
	{
		data: {
			id: 'jardin-alpin-bottom',
		},
		position: {
			y: 2 * (500 - 795),
			x: 2 * (500 - 855),
		},
	},
	{
		data: {
			id: 'jardin-alpin-bottom',
		},
		position: {
			y: 2 * (500 - 795),
			x: 2 * (500 - 855),
		},
	},
	{
		data: {
			id: 'tovets-top',
		},
		position: {
			y: 2 * (500 - 800),
			x: 2 * (500 - 860),
		},
	},
	{
		data: {
			id: 'jardin-d-enfants-top',
		},
		position: {
			y: 2 * (500 - 790),
			x: 2 * (500 - 860),
		},
	},
	{
		data: {
			id: 'jardin-d-enfants-bottom',
		},
		position: {
			y: 2 * (500 - 800),
			x: 2 * (500 - 870),
		},
	},
	{
		data: {
			id: 'bellec-te-bottom',
		},
		position: {
			y: 2 * (500 - 795),
			x: 2 * (500 - 850),
		},
	},
	{
		data: {
			id: 'praz-top',
		},
		position: {
			y: 2 * (500 - 805),
			x: 2 * (500 - 860),
		},
	},
	{
		data: {
			id: 'belv-d-re-top',
		},
		position: {
			y: 2 * (500 - 935),
			x: 2 * (500 - 825),
		},
	},
	{
		data: {
			id: 'ariondaz-bottom',
		},
		position: {
			y: 2 * (500 - 910),
			x: 2 * (500 - 865),
		},
	},
	{
		data: {
			id: 'belv-d-re-bottom',
		},
		position: {
			y: 2 * (500 - 920),
			x: 2 * (500 - 860),
		},
	},
	{
		data: {
			id: 'mickey-top',
		},
		position: {
			y: 2 * (500 - 925),
			x: 2 * (500 - 855),
		},
	},
	{
		data: {
			id: 'belv-d-re-bottom',
		},
		position: {
			y: 2 * (500 - 920),
			x: 2 * (500 - 860),
		},
	},
	{
		data: {
			id: 'signal-top',
		},
		position: {
			y: 2 * (500 - 960),
			x: 2 * (500 - 730),
		},
	},
	{
		data: {
			id: 'chapelets-top',
		},
		position: {
			y: 2 * (500 - 970),
			x: 2 * (500 - 735),
		},
	},
	{
		data: {
			id: 'chapelets-bottom',
		},
		position: {
			y: 2 * (500 - 1000),
			x: 2 * (500 - 795),
		},
	},
	{
		data: {
			id: 'granges-bottom',
		},
		position: {
			y: 2 * (500 - 965),
			x: 2 * (500 - 820),
		},
	},
	{
		data: {
			id: 'olympe-1-top__olympe-2-bottom',
		},
		position: {
			y: 2 * (500 - 325),
			x: 2 * (500 - 910),
		},
	},
	{
		data: {
			id: 'tkd-gros-murger-top',
		},
		position: {
			y: 2 * (500 - 610),
			x: 2 * (500 - 880),
		},
	},
	{
		data: {
			id: 'stade-tania-bottom',
		},
		position: {
			y: 2 * (500 - 615),
			x: 2 * (500 - 885),
		},
	},
	{
		data: {
			id: 'bouc-blanc-bottom',
		},
		position: {
			y: 2 * (500 - 610),
			x: 2 * (500 - 885),
		},
	},
	{
		data: {
			id: 'la-tania-bottom',
		},
		position: {
			y: 2 * (500 - 575),
			x: 2 * (500 - 920),
		},
	},
	{
		data: {
			id: 'tkd-gros-murger-bottom',
		},
		position: {
			y: 2 * (500 - 570),
			x: 2 * (500 - 920),
		},
	},
	{
		data: {
			id: 'olympe-1-bottom',
		},
		position: {
			y: 2 * (500 - 375),
			x: 2 * (500 - 1000),
		},
	},
	{
		data: {
			id: 'epicea-bottom',
		},
		position: {
			y: 2 * (500 - 785),
			x: 2 * (500 - 875),
		},
	},
	{
		data: {
			id: 'for-t-bottom',
		},
		position: {
			y: 2 * (500 - 710),
			x: 2 * (500 - 920),
		},
	},
	{
		data: {
			id: 'praz-bottom',
		},
		position: {
			y: 2 * (500 - 705),
			x: 2 * (500 - 920),
		},
	},
	{
		data: {
			id: 'plantrey-bottom',
		},
		position: {
			y: 2 * (500 - 790),
			x: 2 * (500 - 875),
		},
	},
	{
		data: {
			id: 'grangettes-bottom',
		},
		position: {
			y: 2 * (500 - 850),
			x: 2 * (500 - 880),
		},
	},
	{
		data: {
			id: 'tovets-bottom',
		},
		position: {
			y: 2 * (500 - 835),
			x: 2 * (500 - 890),
		},
	},
	{
		data: {
			id: 'roys-top',
		},
		position: {
			y: 2 * (500 - 840),
			x: 2 * (500 - 880),
		},
	},
	{
		data: {
			id: 'roys-bottom',
		},
		position: {
			y: 2 * (500 - 845),
			x: 2 * (500 - 885),
		},
	},
]

export const constraints = []

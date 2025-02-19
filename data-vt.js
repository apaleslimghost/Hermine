export default {
	Pionniers: { type: 'telesiege', to: ['La Folie Douce'] },
	'La Folie Douce': { to: ['Plein sud', 'Corniche'] },
	'Plein sud': { type: 'blue', to: ['La Val Tho (top)', 'Voie de la boucle'] },
	'La Val Tho (top)': { type: 'blue', to: ['Place de Caron'] },
	'Place de Caron': { to: ['La Val Tho (bottom)', 'Voie lactee'] },
	'La Val Tho (bottom)': { type: 'blue', to: ['Rond-point des pistes'] },
	'Roc (bottom)': {
		type: 'green',
		to: [
			'Campagnols',
			'Muscaraigne',
			'Circuit de Glace',
			'Peclet',
			'Cascades (lift)',
		],
	},
	'Voie lactee': { type: 'green', to: ['Rond-point des pistes'] },
	Corniche: { type: 'blue', to: ['Corniche (bottom)'] },
	'Corniche (bottom)': { type: 'blue', to: ['Roc (top)'] },
	'Voie de la boucle': { type: 'blue', to: ['Plein Sud'] },
	'Castor & Pollux': { type: 'tapis', to: ['Place de Caron'] },
	'Rond-point des pistes': {
		to: ['Roc (bottom)', 'Castor & Pollux', 'Pionniers', 'Lac Blanc'],
	},
	'Plein Sud': { type: 'telesiege', to: ['La Folie Douce'] },
	'Roc (top)': { type: 'green', to: ['Rond-point des pistes'] },
	Campagnols: { type: 'tapis', to: ['Rond-point des pistes'] },
	Muscaraigne: { type: 'tapis', to: ['Roc (bottom)'] },
	Cairn: { type: 'blue', to: ['Circuit de Glace'] },
	'Cairn (bottom)': { type: 'blue', to: ['Cairn (lift)'] },
	Croissant: { type: 'red', to: ['Corniche (bottom)'] },
	'2 Lacs': { type: 'telesiege', to: ['2 Lacs (top)'] },
	'2 Lacs (top)': { to: ['Chalets', 'Hermine', 'Traversee 2 Lacs'], length: 0 },
	Hermine: { type: 'blue', to: ['Gentiane (bottom)'] },
	'Gentiane (bottom)': { type: 'blue', to: ['Moutiere', 'Caron', 'Cumin'] },
	Chalets: { type: 'blue', to: ['Circuit de Glace'] },
	Moutiere: { type: 'blue', to: ['Linotte', 'Arolles', 'Moutiere (top)'] },
	Caron: { type: 'telecabine', to: [] },
	Cumin: { type: 'blue', to: [] },
	'Cairn (lift)': { type: 'telecabine', to: ['Cairn'] },
	Linotte: { type: 'blue', to: ['2 Lacs (top)'] },
	'Moutiere (top)': { type: 'blue', to: ['Lac 2'] },
	'Lac 2': { to: ['Moutiere (bottom)', 'Plateau (lift)'] },
	'Moutiere (bottom)': {
		type: 'blue',
		to: ['Grand Fond', 'Lagopede (bottom)'],
	},
	'Lagopede (bottom)': { type: 'blue', to: ['Gentiane (top)', 'Cime Caron'] },
	'Gentiane (top)': { type: 'blue', to: ['Gentiane (bottom)'] },
	'Plateau (lift)': { type: 'teleski', to: ['360 Bar'] },
	Plateau: { type: 'blue', to: ['Lac 2'] },
	Arolles: { type: 'black', to: ['Hermine'] },
	'Traversee 2 Lacs': { type: 'green', to: ['Chalet du Thorens'] },
	'Combe de thorens': { type: 'green', to: ['Combe de thorens (bottom)'] },
	'Combe de thorens (bottom)': { type: 'green', to: ['Rond-point des pistes'] },
	'Fond (bottom)': { type: 'blue', to: ['Chalet du Thorens'] },
	'Grand Fond': {
		type: 'funitel',
		to: ['Niverolle (top)', 'Bd rosael (top)', 'Variente'],
	},
	'Bd rosael (top)': { type: 'blue', to: ['Chamois (top)'] },
	'Chamois (top)': { type: 'blue', to: ['Chamois (mid)', 'Falaise (top)'] },
	'Falaise (top)': { type: 'red', to: ['Cime (bottom)', 'Falaise (bottom)'] },
	'Falaise (bottom)': { type: 'red', to: ['Plateau'] },
	'Cime (bottom)': { type: 'red', to: ['Chamois (bottom)'] },
	'Chamois (mid)': { type: 'blue', to: ['Eterlou', 'Chamois (bottom)'] },
	Variente: { type: 'red', to: ['Chamois (bottom)'] },
	'Niverolle (top)': { type: 'blue', to: ['Niverolle (bottom)', 'Medaille'] },
	'Circuit de Glace': { to: ['Plein Sud', 'Cairn (bottom)', '2 Lacs'] },
	'Chamois (bottom)': { type: 'blue', to: ['360 Bar'] },
	'360 Bar': { to: ['Plateau', 'Fond (bottom)'] },
	'Niverolle (bottom)': { type: 'blue', to: ['Col de Thorens'] },
	'Col de Thorens': { to: ['Portette', 'Fond (top)', 'Thorens'] },
	'Fond (top)': { type: 'blue', to: ['Rhodos', 'Fond (bottom)'] },
	Rhodos: { type: 'red', to: ['Chalet du Thorens'] },
	Portette: { type: 'red', to: ['Chalet du Thorens'] },
	Eterlou: { type: 'blue', to: ['360 Bar'] },
	Medaille: { type: 'red', to: ['360 Bar'] },
	Thorens: { type: 'funitel', to: ['Chocard', 'Asters', 'Lory'] },
	Chocard: { type: 'blue', to: ['Col de Thorens'] },
	Asters: { type: 'red', to: ['Genepi'] },
	Genepi: { type: 'blue', to: ['Chalet du Thorens'] },
	'Chalet du Thorens': {
		to: ['Combe de thorens', 'Moraine (lift)', 'Portette (lift)'],
	},
	'Portette (lift)': { type: 'telesiege', to: ['Col de Thorens'] },
	'Moraine (lift)': { type: 'telecabine', to: ['Glacier de Thorens'] },
	'Col (lift)': { type: 'telesiege', to: ['Col'] },
	Col: { type: 'red', to: ['Glacier de Thorens'] },
	'Glacier de Thorens': { to: ['Moraine', 'Genepi', 'Col (lift)'] },
	Moraine: { type: 'blue', to: ['Chalet du Thorens'] },
	Peclet: {
		type: 'funitel',
		to: ['Beranger (top)', 'Tete ronde (top)', 'Lac blanc (top)'],
	},
	'Lac blanc (top)': { type: 'red', to: ['Les vires', 'Lac blanc (bottom)'] },
	'Lac blanc (bottom)': {
		type: 'red',
		to: ['Beranger (bottom)', 'Bd Lauzes (bottom)'],
	},
	'Beranger (top)': {
		type: 'red',
		to: ['Beranger (bottom)', 'Bd Lauzes (bottom)'],
	},
	'Les vires': {
		type: 'red',
		to: ['Bd Lauzes (top)', 'Croissant', 'Adrien Theaux'],
	},
	'Lac Blanc': {
		type: 'telesiege',
		to: ['Bd Lauzes (top)', 'Croissant', 'Adrien Theaux'],
	},
	'Bd Lauzes (top)': { type: 'red', to: ['Lac blanc (bottom)'] },
	'Bd Lauzes (bottom)': { type: 'red', to: ['Cascades (top)'] },
	'Cascades (lift)': { type: 'telesiege', to: ['Cascades (top)'] },
	'Cascades (top)': {
		to: ['Ardoises', 'Dalles (top)', '2 combes (top)', 'Cascades'],
	},
	Cascades: { type: 'black', to: ['Bleuets (bottom)'] },
	'Beranger (bottom)': { type: 'red', to: ['Bleuets (bottom)'] },
	Ardoises: { type: 'red', to: ['Bleuets (bottom)'] },
	'Bleuets (bottom)': { type: 'blue', to: ['Roc (top)'] },
	'Adrien Theaux': { type: 'red', to: ['Roc (top)'] },
	'Dalles (top)': { type: 'blue', to: ['La Marine'] },
	'Tete ronde (bottom)': { type: 'blue', to: ['La Marine'] },
	'2 combes (top)': { type: 'green', to: ['La Marine'] },
	'La Marine': { to: ['Dalles (bottom)', '2 combes (bottom)'] },
	'Dalles (bottom)': {
		type: 'blue',
		to: ['Bleuets (top)', 'Combe de thorens (bottom)'],
	},
	'2 combes (bottom)': { type: 'green', to: ['Combe de thorens'] },
	'Bleuets (top)': { type: 'blue', to: ['Bleuets (bottom)'] },
	'Tete ronde (top)': {
		type: 'blue',
		to: ['Tete ronde (bottom)', 'Christine'],
	},
	Christine: { type: 'red', to: ['Chalet du Thorens'] },
	'Cime Caron': {
		type: 'telepherique',
		to: ['Cime (top)', 'Combe de caron', `Col de l'audzin`, 'Combe rosael'],
	},
	'Cime (top)': { type: 'red', to: ['Cime (bottom)', 'Falaise (bottom)'] },
}

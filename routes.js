const routes = {
	'home' : {
		generatorFn: homeTmplGenFn,
		controller: homeCtrl
	},
	'list' : {
		generatorFn: listTmplGenFn,
		controller: listCtrl
	},
	'add': {
		generatorFn: addTmplGenFn,
		controller: addCtrl
	}
};
function homeCtrl(homeTempGenFn,updateViewFn){
	console.log('Home Ctrl');
	updateViewFn(homeTempGenFn({}));

	document.querySelector('#btn').onclick = function(){
		console.log('home controller...');
		console.log('I have been clicked.');
	};
}
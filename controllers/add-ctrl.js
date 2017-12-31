function addCtrl(addTemplGnFn,updateViewFn){
	console.log('Add Ctrl');
	updateViewFn(addTemplGnFn({}));

	document.querySelector('#btn').onclick = function(){
		console.log('Add Controller...');
		console.log('I have been clicked.');
	};
}
function listCtrl(tempGeneratorFn,updateViewFn){
	console.log('listCtrl : ',tempGeneratorFn);
	const items = fetchData();
	updateViewFn(tempGeneratorFn(items));

	document.querySelector('#btn').onclick = function(){
		console.log('I have been clicked.');
	};
}

function fetchData() {
    const items = [];
    for (let i = 0; i < 10; i++) {
        items.push(`Item ${i}`);
    }

    return items;
}
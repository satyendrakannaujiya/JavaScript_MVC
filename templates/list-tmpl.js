function listTmplGenFn(items) {
		
    const processedTemplate = `
		<h1>Items</h1>
    <ul> ${items.map(function(item){
					return `${ item === 'Item 4' ? `<li class='in-active'>${item}</li>`: `<li>${item}</li>`}`;
		}).join('')}</ul>
		<button id='btn'>Click Me</button>
		`;
    return processedTemplate;
}


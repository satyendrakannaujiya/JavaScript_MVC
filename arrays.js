const names = [];
for (let i = 0; i < 10; i++) {
    names.push(`Name ${i}`);
}

console.log('names : ', names);


// map creates a new array out of return value.
const updatedNames = names.map(function(name) {
    return `Update ${name}`;
});

console.log('Org Names : ', names);
console.log('Updated Names : ', updatedNames);

// concatenates every item of an array seperated by delimeter supplied.
const concatinatedNames = updatedNames.join('|');
console.log('concatenated names : ', concatinatedNames);

function generateListTemplate() {
		const items = fetchData();
    const processedTemplate = `<ul> ${items.map(function(item){
					return `${ item === 'Item 4' ? `<li class='in-active'>${item}</li>`: `<li>${item}</li>`}`;
		}).join('')}</ul>`;
    return processedTemplate;
}


console.log('newNames : ', generateTemplate());

// dummy function to fetch data
// TODO: update this method with realtime data.

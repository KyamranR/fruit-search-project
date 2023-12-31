const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	
	
	for(let i = 0; i < fruit.length; i++){
		if(fruit[i].toLowerCase().includes(str.toLowerCase())){
			results.push(fruit[i]);
			
		} 
	}

	return results;
}

function searchHandler(e) {
	const inputVal = e.target.value;
	const results = search(inputVal);
	showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';
	
	if(results.length > 0 && inputVal.trim() !== '') {
		for (let i = 0; i < results.length; i++){
			const li = document.createElement('li');
			
			const suggestionText = results[i];

			const span = document.createElement('span');
			const matchingIndex = suggestionText.toLowerCase().indexOf(inputVal.toLowerCase());
			if (matchingIndex !== -1) {
			  const beforeMatch = suggestionText.slice(0, matchingIndex);
			  const matchedPart = suggestionText.slice(matchingIndex, matchingIndex + inputVal.length);
			  const afterMatch = suggestionText.slice(matchingIndex + inputVal.length);

			  span.innerHTML = `${beforeMatch} <b class="bold">${matchedPart}</b> ${afterMatch}`;
			} else {
			  span.textContent = suggestionText;
			}
			li.appendChild(span);  
			suggestions.appendChild(li);
		}
		
	} 
}

function useSuggestion(e) {
	if(e.target.tagName === 'SPAN'){
		input.value = e.target.textContent;
		
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
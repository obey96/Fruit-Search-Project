// const input = document.querySelector('#fruit');
// const suggestions = document.querySelector('.suggestions ul');

// // const fruit = ['Apple', 'Apricot', 'Avocado 🥑',
//  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut',
//   'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry',
//    'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit',
//     'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon',
// 	 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach',
// 	  'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant',
// 	   'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// function search(str) {
// 	let results = [];

// 	// TODO

// 	return results;
// }

// function searchHandler(e) {
// 	// TODO
// }

// function showSuggestions(results, inputVal) {

// 	// TODO
// }

// function useSuggestion(e) {
// 	// TODO
// }

// input.addEventListener('keyup', searchHandler);
// suggestions.addEventListener('click', useSuggestion);




// adding ul to const to easy manage code

const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = [
    'Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 
    'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 
    'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 
    'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 
    'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 
    'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 
    'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 
    'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 
    'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 
    'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 
    'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 
    'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 
    'Tamarillo', 'Tamarind', 'Yuzu'
];

// This function loops every single fruit in const fruit array to move it to lw case to mkae it easier to search, and
// returns result

function search(str) {
    const results = [];
    const query = str.toLowerCase();
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i].toLowerCase().includes(query)) {
            results.push(fruit[i]);
        }
    }
    return results;
}

// gets input value and calls search value as well use "showSuggestions" to give me more options with 
// the specific letters or values

function searchHandler(e) {
    const inputVal = e.target.value;
    const results = search(inputVal);
    showSuggestions(results, inputVal);
}


// This will add or "create" and suggestion to the "ul value" that
// it was empty. It will loop and create an <li> for every single fruit
// in the suggestion, if the the input is empty it will show nothing
// if not type it will not call css for suggestion bar
function showSuggestions(results, inputVal) {
    suggestions.innerHTML = '';
    if (inputVal.length === 0) {
        suggestions.style.display = 'none';
        return;
    }
    suggestions.style.display = 'block';
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        suggestions.appendChild(li);
    });
}

// clicking event that will put the value "<li>" in the input "serachbar"

function useSuggestion(e) {
    if (e.target.tagName === 'LI') {
        input.value = e.target.textContent;
        suggestions.innerHTML = '';
        suggestions.style.display = 'none';
    }
}


// adds events listeners to the input field, it will call "useSuggestion"
// when click on the value.
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

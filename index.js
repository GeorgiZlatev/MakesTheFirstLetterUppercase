// 1 Name a let that stores the name user

let name = prompt('What is your name');

// 2 Capitalise the first letter of name

// a first char

let firstChar = name.slice(0,1);

// b Turn the first char Upper case.

let upperCaseFirstChar = firstChar.toUpperCase();

// c Isolate the rest of the name.

let restName = name.slice(1,name.length);

// d Change the rest of the name to lower case.

restName = firstChar.toLowerCase();

// de concactenate the first char with rest of the char.

let captionName = upperCaseFirstChar + restName;

 // 3 We use the capitalised version ot the to greet them using an alret.

alert('Hello ' + captionName);
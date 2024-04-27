// node exp3.js to run

var array = []; 
var arr = ['cat', 'goat', 'bat'];
console.log(arr[0]); // prints 'cat'
var arr = ['cat', 'dog', 'goat', 'mummy', 'goat'];
console.log(arr.indexOf("avatar")); // prints -1
console.log(arr.lastIndexOf("avatar")); // prints -1
console.log(arr.lastIndexOf("goat")); // prints the last index of "goat"
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // prints 3
console.log(fruits); // prints the array contents
fruits.push("grapes");
console.log(fruits); // adds 'grapes' to the array
console.log(fruits.pop()); // removes and prints the last element ('grapes')
var arr = ['cat', 'dog', 'goat'];
arr.pop(); // removes the last element ('goat') from the array
console.log(arr);
arr.unshift("pug"); // adds 'pug' to the beginning of the array
console.log(arr);
arr.shift(); // removes the first element ('pug') from the array
console.log(arr);
var arr = ['cat', 'goat', 'dog', 'mummy', 'goat'];
console.log(arr.sort()); // sorts the array alphabetically
var arr = [1, 9, 3];
console.log(arr); // prints the array contents
arr.reverse(); // reverses the order of the array elements
console.log(arr);
arr = ['jack fruit', 'grape'];
arr2 = ['mango', 'kiwi', 'apple'];
var new_arr = arr.concat(arr2); // concatenates two arrays
console.log(new_arr);
console.log(new_arr.sort()); // sorts the concatenated array
const fruit = [];
fruit.push("banana", "apple", "peach");
fruit.forEach(function (i) {
    console.log(i);
});

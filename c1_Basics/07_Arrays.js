let arr = ["a", "b", "v"];
console.log(arr);
console.log(typeof arr);
console.log(arr.reverse());

//array operations
arr.push("d"); //[ 'v', 'b', 'a', 'd' ]
arr.pop(); //[ 'v', 'b', 'a' ]
arr.unshift("e"); //[ 'e', 'v', 'b', 'a' ]
arr.shift();
console.log(arr);

//cacatination
let arr2 = ["e", "f", "g", "h"];
let newArray = arr.concat(arr2); //['v', 'b', 'a','e', 'f', 'g','h']
console.log(newArray);
// arr.push(arr2) //[ 'v', 'b', 'a', [ 'e', 'f', 'g', 'h' ] ]
// console.log(arr)
//using spread operator
newArray = [...arr2, ...arr];
console.log(newArray); //['e', 'f', 'g','h', 'v', 'b', 'a']

let myArray = new Array(0, 1, 2, 3, 4, 5);
console.log("A:", myArray);
console.log("A array length: ", myArray.length);
console.log("Element at index 2:", myArray.at(2));

// The toReversed() method of Array instances is the copying counterpart of the reverse() method.
// It returns a new array with the elements in reversed order.
let reversed = myArray.toReversed();
console.log("Reversed array:", reversed);

console.log("-------join()--------");
// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array,
// separated by commas or a specified separator string.
// If the array has only one item, then that item will be returned without using the separator.

console.log(myArray.join(" -> "));

console.log("-------concat()--------");
// The concat() method of Array instances is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.
let concatedArray = myArray.concat(arr);
console.log(`[${arr}] + [${myArray}] : [${concatedArray}]`);

console.log("-------entries()--------");
// The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.
for ([index, elem] of myArray.entries()) {
  console.log(`${index}: ${elem}`);
}

console.log("-------slice()--------");
// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected
// from start(default 0) to end (end not included) where start and end represent the index of items in that array.
// The original array will not be modified.

console.log("A: ", myArray);
let slicedArray = myArray.slice(2, 5);
console.log("Sliced array:", slicedArray);
console.log("A: ", myArray);

console.log("-------splice(startIndex, deletCount, item)--------");
// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or
// adding new elements in place. It modify the original array
//Return value
// An array containing the deleted elements.
// If only one element is removed, an array of one element is returned.
// If no elements are removed, an empty array is returned.

let splicedArray = myArray.splice(2, 2, 0, 8);
console.log("Spliced array: ", splicedArray);
console.log("A: ", myArray);

// The toSpliced() method of Array instances is the copying version of the splice() method.
// It returns a new array with some elements removed and/or replaced at a given index.
// It doesn't modify the original array.

//toLocaleString()
console.log("---------toLocaleString()-----------");
const prices = ["￥7", 500, 8123, 12];
prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

// "￥7,￥500,￥8,123,￥12"

const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
  3: 4, // ignored by toLocaleString() since length is 3
};
console.log(Array.prototype.toLocaleString.call(arrayLike));
// 1,2,3

//toSorted() -> The toSorted() method of Array instances is the copying version of the sort() method. It returns a new array with the elements sorted in ascending order.
//toReverserd() -> The toReversed() method of Array instances is the copying counterpart of the reverse() method. It returns a new array with the elements in reversed order.

//The copyWithin() method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.
//copyWithin(target, start)
// copyWithin(target, start, end)
let array1 = ["a", "b", "c", "d", "e"];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]

// Sparse arrays
// Arrays can contain "empty slots", which are not the same as slots filled with the value undefined.
// Array constructor:
const a = Array(5); // [ <5 empty items> ]

// Consecutive commas in array literal:
const b = [1, 2, , , 5]; // [ 1, 2, <2 empty items>, 5 ]

// Directly setting a slot with index greater than array.length:
const c = [1, 2];
c[4] = 5; // [ 1, 2, <2 empty items>, 5 ]

// Elongating an array by directly setting .length:
const d = [1, 2];
d.length = 5; // [ 1, 2, <3 empty items> ]

// Deleting an element:
const e = [1, 2, 3, 4, 5];
delete e[2]; // [ 1, 2, <1 empty item>, 4, 5 ]

console.log("-----------keys()-----------");
// The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.
array1 = ["a", "b", "c"];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2

// Using keys() on sparse arrays
// Unlike Object.keys(), which only includes keys that actually exist in the array, the keys() iterator doesn't ignore holes representing missing properties.
arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]

console.log("-----------reduceRight()------------");
// The reduceRight() method of Array instances applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = array1.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);

console.log(result);
// Expected output: Array [4, 5, 2, 3, 0, 1]

//   reduce()
// The reduce() method executes a reducer function on each element of the array and returns a single output value.

// The first time that the callback is run there is no "return value of the previous calculation".
// If supplied, an initial value may be used in its place.
// Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
const message = ["JavaScript ", "is ", "fun."];

// function to join each string elements
function joinStrings(accumulator, currentValue) {
  return accumulator + currentValue;
}

// reduce join each element of the string
let joinedString = message.reduce(joinStrings);
console.log(joinedString);

// Output: JavaScript is fun.

console.log(Array.isArray(message)); //The isArray() method checks whether the passed argument is an array or not.
console.log(Array.from("Vedant"));
console.log(Array.from({ name: "Vedant" }));
// Array.from(arraylike, mapFunc, thisArg)
// function that returns a new array
function createArray(arraylike, mapFunc) {
  return Array.from(arraylike, mapFunc);
}

// using arrow function for mapFunc
res = createArray([2, 4, 6], (element) => element + 2);

console.log(result);
{
  let score1 = 100;
  let score2 = 200;
  let score3 = 300;
  console.log(Array.of(score1, score2, score3)); //The of() method creates a new array instance from the given arguments.
}

//array-destructuring
const array = [10, 20, 30, 40];
const [p, q, , r] = array;
console.log("Example 2");
console.log(p);
console.log(q);
console.log(r);

// Values can be swapped using destructuring assignment as below:
let x = 10,
  y = 20;
console.log(x + " " + y);
// Swapping
[x, y] = [y, x];

console.log(x + " " + y);

// Nesyed Object destructuring : The Nested objects can also be destructured using destructuring syntax.
const marks = {
  section1: { alpha: 15, beta: 16 },
  section2: { alpha: -31, beta: 19 },
};
const {
  section2: { alpha: alpha1, beta: beta1 },
} = marks;
console.log(alpha1, beta1);

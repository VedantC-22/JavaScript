let arr = ['a', 'b', 'v']
console.log(arr)
console.log(typeof arr)
console.log(arr.reverse())
let myArray = new Array(0,1,2,3,4,5)
console.log("A:",myArray)
console.log("A array length: ", myArray.length)
console.log("Element at index 2:",myArray.at(2))

// The toReversed() method of Array instances is the copying counterpart of the reverse() method. 
// It returns a new array with the elements in reversed order.
let reversed = myArray.toReversed();
console.log("Reversed array:" ,reversed)


console.log("-------join()--------")
// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, 
// separated by commas or a specified separator string. 
// If the array has only one item, then that item will be returned without using the separator.

console.log(myArray.join(" -> "))


console.log("-------concat()--------")
// The concat() method of Array instances is used to merge two or more arrays. 
// This method does not change the existing arrays, but instead returns a new array.
let concatedArray = myArray.concat(arr)
console.log(`[${arr}] + [${myArray}] : [${concatedArray}]`)

console.log("-------entries()--------")
// The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.
for([index, elem] of myArray.entries()) {
    console.log(`${index}: ${elem}`)
}

console.log("-------slice()--------")
// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected 
// from start(default 0) to end (end not included) where start and end represent the index of items in that array. 
// The original array will not be modified.

console.log("A: ", myArray)
let slicedArray = myArray.slice(2, 5)
console.log("Sliced array:", slicedArray)
console.log("A: ", myArray)


console.log("-------splice(startIndex, deletCount, item)--------")
// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or 
// adding new elements in place. It modify the original array
//Return value
// An array containing the deleted elements.
// If only one element is removed, an array of one element is returned.
// If no elements are removed, an empty array is returned.

let splicedArray = myArray.splice(2, 2, 0,8)
console.log("Spliced array: ", slicedArray)
console.log("A: ", myArray)

// The toSpliced() method of Array instances is the copying version of the splice() method. 
// It returns a new array with some elements removed and/or replaced at a given index.
// It doesn't modify the original array.

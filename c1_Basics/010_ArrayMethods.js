let arr = [1,2,3,4,5,6,7,8];
// console.log(arr)

let val = arr.forEach((item) => {
    if (item == 5) {
        return item
    }
})
console.log(val)

console.log("-------filter()--------")
// The filter() method creates a new array containing elements that satisfy a specified condition. 
// This method skips empty elements and does not change the original array.

let evenNums = arr.filter((item) => {
    return item % 2 === 0
})
console.log(evenNums)

console.log("-------map()-------")
// The map() method is an ES5 feature that creates a new array by applying a function to each element of the original array. 
// It skips empty elements and does not modify the original array.

let squarePlusOne = arr.map((item) => (item * item))
                    .map((square) => square + 1)
console.log(squarePlusOne)

let squarePlusOneOdd = arr.map((item) => (item * item))
                    .map((square) => square + 1)
                    .filter((val) => val % 2 != 0)
console.log(squarePlusOneOdd)

console.log("------reduce()-------")
// The JavaScript Array.reduce() method iterates over an array, applying a reducer function to each element, accumulating a 
// single output value. It takes an initial value and processes elements from left to right, reducing the array to a single 
// result. It is useful for doing operations like max in an array, min in an array and sum of array

let sum = arr.reduce((accum, curr) => accum + curr, 0)
console.log(`sum of ${arr} elements is ${sum}`)

let initialValue = 33
let sumPlus33 = arr.reduce((accum, curr) => {
    console.log(`${accum} ${curr}`)
    return (accum + curr)
}, initialValue)

console.log(`sum of ${arr} elements plus 33 is ${sumPlus33}`)

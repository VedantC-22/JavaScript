"user strict"; //treat all js code as newer version

//Primitive
// 7 types: Number, String, Boolean, null, undefined, BigInt, Symbol

//Reference(non - primitive)
//Array, Object, Functions

//stack and heap memory area
// 1️⃣ Stack Memory (Primitive Data Types)
// Used for storing primitive values (number, string, boolean, null, undefined, symbol, bigint).
// Works on LIFO (Last In, First Out) principle.
// Fast and automatically cleared when the function exits.

// 2️⃣ Heap Memory (Reference Types - Objects, Arrays, Functions)
// Used for storing objects, arrays, and functions.
// Objects are stored in Heap, but references (addresses) are stored in Stack.
// When assigned, the reference (not the actual object) is copied.

//number => range 2 to power 53
//bigint
//string => ""
//boolean => flase/true
//null => empty -> assigned as null
//undefined => declared but uninitialized
//objects

let num = 22
let name = "Vedant"
let email;

console.log(typeof(null))
console.log(typeof(email))

//----------datatype conversion-------------
console.log("----------datatype conversion-------------")
console.log("----------------------------------\n1.Number")
let age = 21
let n = "22vc"
let number = "22"
let valInNumber = Number(n)
console.log(typeof age)
console.log(typeof valInNumber)
console.log(valInNumber)
console.log(Number(null))
console.log(Number(undefined))
console.log(typeof number)
console.log(Number(number))

console.log("----------------------------------\n2.Boolean")
//true -> 1, false -> 0
let a = 0 //false
a = 1 //true
a = "" //false
a = "A" //true
a = null //false
a = undefined //false
let flag = Boolean(a)
console.log(flag)

console.log("----------------------------------\n3.String")
let x  = 33
console.log (typeof String(x))
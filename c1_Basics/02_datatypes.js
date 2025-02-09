"user strict"; //treat all js code as newer version

//Primitive
// 7 types: Number, String, Boolean, null, undefined, BigInt, Symbol

//Reference(non - primitive)
//Array, Object, Functions

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
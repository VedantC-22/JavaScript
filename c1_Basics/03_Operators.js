let num = 4
let negValue = -num
console.log(negValue)

console.log(2**3) // 2^3 = 8

console.log('"2" + 2 = ',"2" + 2)
console.log('2 + "2" = ',2 + "2")
console.log('"2" + 2 + 1 = ',"2" + 2 + 1)
console.log('2 + 2 + "2" = ',2 + 2 + "2") // 2 + 2 + "2"  --(left to right)--> (2 + 2) => 4 + "2" => 42
console.log("2+true = ",2+true)

//Comparision
console.log('"2" > 1 =>', "2" > 1)
console.log('"02" > 1 =>', "02" > 1)
console.log('null > 0 =>', null > 0)
console.log('null == 0 =>', null == 0)
console.log('null >= 0 =>', null >= 0)

// === vs == 
console.log("2" == 2) //checks only values
console.log("2" === 2) //datatype is also checked here

//Nullish coalescing operator (??)
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side 
// operand is null or undefined, and otherwise returns its left-hand side operand.
const foo = null ?? "default string";
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0

// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a 
// question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and 
// finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an 
// if...else statement.

let a = 10
a > 20 ? console.log("a is greter than 20") : console.log("a is less than 20")
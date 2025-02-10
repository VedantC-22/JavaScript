const score = 500
console.log(score)

const balance = new Number(5445464);
console.log(balance)

// The toFixed() method of Number values returns a string representing this number using fixed-point notation with the 
// specified number of decimal places.
let decimalNo = 4522.366421545
console.log(decimalNo.toFixed(2))


// The toPrecision() method of Number values returns a string representing this number to the specified number of significant digits.
const precisionValue = 255.6465
console.log(precisionValue.toPrecision(3))

// The toLocaleString() method of Number values returns a string with a language-sensitive representation of this number. 
// In implementations with Intl.NumberFormat API support, this method delegates to Intl.NumberFormat.
const b = 4505500
console.log(b.toLocaleString("en-IN"))

console.log("-------------Math------------")
console.log(Math)
// Static properties
// Math.E
// Euler's number and the base of natural logarithms; approximately 2.718.

// Math.LN10
// Natural logarithm of 10; approximately 2.303.

// Math.LN2
// Natural logarithm of 2; approximately 0.693.

// Math.LOG10E
// Base-10 logarithm of E; approximately 0.434.

// Math.LOG2E
// Base-2 logarithm of E; approximately 1.443.

// Math.PI
// Ratio of a circle's circumference to its diameter; approximately 3.14159.

// Math.SQRT1_2
// Square root of ½; approximately 0.707.

// Math.SQRT2
// Square root of 2; approximately 1.414.

// Static methods
// Math.abs()
// Returns the absolute value of the input.

// Math.acos()
// Returns the arccosine of the input.

// Math.acosh()
// Returns the hyperbolic arccosine of the input.

// Math.asin()
// Returns the arcsine of the input.

// Math.asinh()
// Returns the hyperbolic arcsine of a number.

// Math.atan()
// Returns the arctangent of the input.

// Math.atan2()
// Returns the arctangent of the quotient of its arguments.

// Math.atanh()
// Returns the hyperbolic arctangent of the input.

// Math.cbrt()
// Returns the cube root of the input.

// Math.ceil()
// Returns the smallest integer greater than or equal to the input.

// Math.clz32()
// Returns the number of leading zero bits of the 32-bit integer input.

// Math.cos()
// Returns the cosine of the input.

// Math.cosh()
// Returns the hyperbolic cosine of the input.

// Math.exp()
// Returns ex, where x is the argument, and e is Euler's number (2.718…, the base of the natural logarithm).

// Math.expm1()
// Returns subtracting 1 from exp(x).

// Math.floor()
// Returns the largest integer less than or equal to the input.

// Math.f16round()
// Returns the nearest half precision float representation of the input.

// Math.fround()
// Returns the nearest single precision float representation of the input.

// Math.hypot()
// Returns the square root of the sum of squares of its arguments.

// Math.imul()
// Returns the result of the 32-bit integer multiplication of the inputs.

// Math.log()
// Returns the natural logarithm (㏒e; also, ㏑) of the input.

// Math.log10()
// Returns the base-10 logarithm of the input.

// Math.log1p()
// Returns the natural logarithm (㏒e; also ㏑) of 1 + x for the number x.

// Math.log2()
// Returns the base-2 logarithm of the input.

// Math.max()
// Returns the largest of zero or more numbers.

// Math.min()
// Returns the smallest of zero or more numbers.

// Math.pow()
// Returns base x to the exponent power y (that is, xy).

// Math.random()
// Returns a pseudo-random number between 0 and 1.
//Random numbers between 1 - 100
console.log(Math.floor(Math.random()*100 + 1))

const min = 10
const max = 20

let ran = Math.random() * (max - min + 1) + min
console.log(ran)

// Math.round()
// Returns the value of the input rounded to the nearest integer.

// Math.sign()
// Returns the sign of the input, indicating whether it is positive, negative, or zero.

// Math.sin()
// Returns the sine of the input.

// Math.sinh()
// Returns the hyperbolic sine of the input.

// Math.sqrt()
// Returns the positive square root of the input.

// Math.tan()
// Returns the tangent of the input.

// Math.tanh()
// Returns the hyperbolic tangent of the input.

// Math.trunc()
// Returns the integer portion of the input, removing any fractional digits.
// Template literals are the most modern and preferred method for string interpolation in JavaScript. 
// They use backticks (“ ` “) and ${} syntax to embed expressions.
let firstName = "Vedant"
let lastName = "Chaudhari"
console.log(firstName + " " + lastName)
console.log(`I am ${firstName} ${lastName}`)

let str = new String('Hello')
console.log(str)
console.log(str[1])
console.log(str.length)
console.log(str.toUpperCase())
let res = str.slice(-3, 5)

// When using bracket notation for character access, attempting to delete or assign a value to these properties will not succeed.
// The properties involved are neither writable nor configurable. (See Object.defineProperty() for more information.)
let obj = Object.defineProperty(str, 'property1',{
    value: str,
    writable: true,
});
obj.property = 'a'
console.log(obj.property1)


// String literals (denoted by double or single quotes) and strings returned from String calls in a non-constructor context 
// (that is, called without using the new keyword) are primitive strings.
const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"

// String primitives and String objects also give different results when using eval().
// Primitives passed to eval are treated as source code; String objects are treated as all other objects are, by returning the object. For example:
console.log("--------------eval()----------------")
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
// A String object can always be converted to its primitive counterpart with the valueOf() method.
console.log(eval(s2.valueOf()))

console.log("-------------trim()-----------------")
// The trim() method of String values removes whitespace from both ends of this string and returns a new string, 
// without modifying the original string.
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";

let url = ""

console.log("-------------fromCharCode()-----------------")
// The String.fromCharCode() static method returns a string created from the specified sequence of UTF-16 code units.
console.log(String.fromCharCode(189, 43, 190, 61));
// Expected output: "½+¾="
// A number between 0 and 65535 (0xFFFF) representing a UTF-16 code unit. 
// Numbers greater than 0xFFFF are truncated to the last 16 bits. No validity checks are performed.
console.log(String.fromCharCode(1));

console.log("-------------fromCodePoint()-----------------")
// The String.fromCodePoint() static method returns a string created from the specified sequence of code points.
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));
// Expected output: "☃★♲你"

// The String.raw() static method is a tag function of template literals. This is similar to the r prefix in Python, 
// or the @ prefix in C# for string literals.
// It's used to get the raw string form of template literals — that is, substitutions (e.g. ${foo}) are processed, but escape sequences (e.g. \n) are not.
console.log("-------------raw()-----------------")
// Create a variable that uses a Windows
// path without escaping the backslashes:
let rawfilePath = String.raw`C:\Development\profile\aboutme.html`;
filePath = "C:\Development\profile\aboutme.html"
console.log(`The file was uploaded from: ${filePath}`);
console.log(`The file was uploaded from: ${rawfilePath}`);
// Expected output: "The file was uploaded from: C:\Development\profile\aboutme.html"


console.log("-------------includes()-----------------")
// The includes() method of String values performs a case-sensitive search to determine whether a given string may be 
// found within this string, returning true or false as appropriate.
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fdox';
console.log(
    `The word "${word}" ${
      sentence.includes(word) ? 'is' : 'is not'
    } in the sentence`,
  );
  // Expected output: "The word "fox" is in the sentence"
  
  console.log("-------------match()-----------------")
//   The match() method of String values retrieves the result of matching this string against a regular expression.
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// Expected output: Array ["T", "I"]

console.log("-------------repeat()-----------------")
// The repeat() method of String values constructs and returns a new string which contains the specified number of copies of 
// this string, concatenated together.
let strrepeate = "Hello"
console.log(strrepeate.repeat(3))

console.log("-------------padStart()-----------------")
// The padStart() method of String values pads this string with another string (multiple times, if needed) 
// until the resulting string reaches the given length. The padding is applied from the start of this string.
const panNo  = "225354855225";
let last4 = panNo.slice(-4)
let maskedPanNo = last4.padStart(12, "*")
console.log(maskedPanNo)
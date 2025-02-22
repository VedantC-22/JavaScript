// Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements
// that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and
// return an output where there is some obvious relationship between the input and the output.
// To use a function, you must define it somewhere in the scope from which you wish to call it.

//Hoisting*****
// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables,
// classes, or imports to the top of their scope, prior to execution of the code.

// Hoisting in JavaScript is a behavior where variable and function declarations apperes are moved to the top of their scope during the
// compilation phase, before the code is executed. This allows you to use variables and functions before they are declared in
// the code. However, it's important to note that only the declarations are hoisted, not the initializations or assignments.

//***Temporal Dead Zone***
// The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs when declaring variables with let and const.
// It refers to the period between entering the scope and the actual declaration of the variable.
// During this period, the variable cannot be accessed and will throw a ReferenceError if you try to use it.
// The TDZ starts at the beginning of the scope and ends when the variable is declared and initialized.

//Immediately invoked function expression
let hello = function (){
    console.log("Hello");
}();

(function greet() {
    console.log("Greet IIFE")
    // console.log(this)
})(); //semicolon is necessary when we writing two IIFE's

((name) => {
    console.log(`Welcome, ${name}`)
})("Vedant")

//***Closure***
// A closure is a function that has access to its own scope, the outer function’s variables, and global variables, even after the outer function has finished executing.
// This enables functions to “remember” their environment.

//* A closure allows a function to access variables from its outer (enclosing) function even after that function has finished executing.
//* Global variables can be made private within a function using closures, ensuring they cannot be accessed or modified directly from outside.
//* Closures provide a way to encapsulate private data and create public methods to interact with it.
//* Closures help retain references to variables that would otherwise be lost after the execution of the outer function.

//***Lexical Scope***
// Lexical scope is a fundamental concept in programming that determines the accessibility of variables and functions based on where they are defined in the source code. 
// In simple terms, lexical scope is the scope of a variable or function determined at compile time by its physical location in the code. 
// Unlike dynamic scope, which depends on how functions are called at runtime, lexical scope is static and remains the same throughout the program’s execution.

// Lexical scope defines the accessibility of variables and functions depending on their location in the source code. 
// Variables and functions have different levels of scope:

// Global Scope: Variables defined outside any function or block, accessible anywhere in the program.
// Local Scope: Variables defined inside a function or block, accessible only within that specific function or block.
// Nested Scope: Inner functions have access to variables in their parent functions.
// Block Scope: Variables defined with let and const are limited to the block they are declared in, like loops or conditionals.
console.log("----------Scope----------")
function outer(){
    let a = 20
    let b = 30
    let addition = a + b
    let x = 56

    function inner(){ //functional scope
        const title = "inner function"
        var y = 220
        z = 65
        console.log(`sum of ${a} and ${b} is ${addition}`) //closure: a:20 b:30 addition: a + b
        
        //block scope
        {
            const greet = 'Hello'
            var Welcome = "Welcome"
            console.log(title)
        }
        //console.log(greet) //referenceError
        console.log(Welcome) //Welcome
    }

    inner();
    // console.log(title)
    // console.log(y)
    console.log(z) // to prevent this -> use -> 'use strict'

}
outer();

let i = 0
let id = setInterval(() => {
    console.log("hello")
    i++
    if (i == 5) {
        close();
    }
}, 1000);

function close() {
    clearInterval(id)
}

// How is process.stdout.write different from console.log?
// Well first of all, console.log IS process.stdout.write!
// stdout is the fundamental way every CLI program logs output to the console.

// we can use process.stdout.write() method to print to console without trailing newline.

let count = 1;
for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= i; j++) {
       process.stdout.write(`${count}  `);
       count++
    }
    console.log()
}
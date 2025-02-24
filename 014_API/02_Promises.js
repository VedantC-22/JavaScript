// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// In JavaScript, a promise is an object that represents the outcome of an asynchronous operation. Promises can be used to 
// handle tasks like loading files, making API calls, and time delays. 


//use -> 

const promiseOne = new Promise(function(resolved, rejected){
    setTimeout(function (){
        console.log("Async task is completed");
        resolved()
    }, 5000)
})

promiseOne
.then(function () {
    console.log("Promise Consumed");
})


new Promise(function (resolved, rejected){
    let id = setTimeout(function (){
        console.log("Async task is completed");
        resolved({username: "Vedant"});
    }, 5000)
}).then(function (data){
    console.log(data.username);
}).finally(function () {
    console.log("Finally executed..");
})


let promiseTwo = new Promise(function (resolved, rejected){
    let error = true;
    setTimeout(function (){
        if (!error) {
            resolved({username: "Vedant", email: "chaudharivedant22@gmail.com"});
        }else{
            rejected("Error: Something went wrong!!");
        }
    }, 5000)
})

//Promise chain
promiseTwo.then(function (user){
    console.log(`Username: ${user["username"]} \nEmail: ${user.email}`)
    return user.email;
}).then(function (username){
    console.log(username)
}).catch(function (error) {
    console.log(error)
});

let promisesThree = new Promise(function (resolved, rejected){
    let error = true; 
    setTimeout(function (){
        if(!error){
            resolved({username: "Shivam", email: "shivam123@gmail.com"})
        }else{
            rejected("Something went wrong!!")
        }
    }, 5000)
})

async function consumedPromiseThree() {
    try{
        const response = await promisesThree
        console.log(response)
    }catch(error){
        console.log(error)
    }
}

consumedPromiseThree()

const url = "https://api.github.com/users";

const a = fetch( url) 
.then(function(response){
    // console.log(response)
})

console.log(a)
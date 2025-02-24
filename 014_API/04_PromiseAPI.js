// Promise.all()
// The Promise.all() static method takes an iterable of promises as input and returns a single Promise. 
// This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), 
// with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection 
// reason.

// Return value
// A Promise that is:
// Already fulfilled, if the iterable passed is empty.
// Asynchronously fulfilled, *when all the promises in the given iterable fulfill*. The fulfillment value is an array of fulfillment
// values, in the order of the promises passed, regardless of completion order. If the iterable passed is non-empty but contains 
// no pending promises, the returned promise is still asynchronously (instead of synchronously) fulfilled.
// Asynchronously rejected, when any of the promises in the given iterable rejects. The rejection reason is the rejection reason
// of the first promise that was rejected.

const p1 = new Promise( function (resolve, reject) {
    setTimeout(() => {
        resolve("P1 success")
    }, 2000);
});

const p2 = new Promise( function (resolve, reject) {
    setTimeout(() => {
        // resolve("P2 success")
        reject("P2 fails")
    }, 1500);
});

const p3 = new Promise( function (resolve, reject) {
    setTimeout(() => {
        resolve("P3 success")
    }, 3000);
});


Promise.all([p1, p2, p3])
.then(respone => {
    // console.log(respone);
})
.catch(function (error) {
    // console.error(error);
})


Promise.allSettled([p1, p2, p3])
.then(respone => {
    // console.log(respone)
})


Promise.race([p1, p2, p3])
.then(respone =>{
    console.log(respone)
})
.catch(function (error) {
    console.error(error)
})


Promise.any([p1, p2, p3])
.then(respone =>{
    console.log(respone);
})
.catch((error) =>{
    console.error(error);
    console.log(error.errors)
})





// Promise.allSettled()

// The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise. 
// *This returned promise fulfills when all of the input's promises settle* (including when an empty iterable is passed), with an 
// array of objects that describe the outcome of each promise.
// Description:
// The Promise.allSettled() method is one of the promise concurrency methods. Promise.allSettled() is typically used when you 
// have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you'd always like to know the result of 
// each promise.
// In comparison, the Promise returned by Promise.all() may be more appropriate if the tasks are dependent on each other, or if you'd like to 
// immediately reject upon any of them rejecting.






// Promise.race()

// The Promise.race() static method takes an iterable of promises as input and returns a single Promise. 
// This returned promise settles with the eventual state of the first promise that settles.

// Return value
// A Promise that asynchronously settles with the eventual state of the first promise in the iterable to settle. 
// In other words, it fulfills if the first promise to settle is fulfilled, and rejects if the first promise to settle is 
// rejected. The returned promise remains pending forever if the iterable passed is empty. If the iterable passed is non-empty 
// but contains no pending promises, the returned promise is still asynchronously (instead of synchronously) settled.

//Description:
// The Promise.race() method is one of the promise concurrency methods. It's useful when you want the first async task to complete, but do not 
// care about its eventual state (i.e. it can either succeed or fail).
// If the iterable contains one or more non-promise values and/or an already settled promise, then Promise.race() will settle to the first of 
// these values found in the iterable.




// Promise.any()
// The Promise.any() static method takes an iterable of promises as input and returns a single Promise. 
// This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of the input's 
// promises reject (including when an empty iterable is passed), with an *AggregateError* containing an array of rejection reasons.

// Return value
// A Promise that is:
// Already rejected, if the iterable passed is empty.
// Asynchronously fulfilled, when any of the promises in the given iterable fulfills. The fulfillment value is the fulfillment value of the first 
// promise that was fulfilled.
// Asynchronously rejected, when all of the promises in the given iterable reject. The rejection reason is an AggregateError containing an array of 
// rejection reasons in its errors property. The errors are in the order of the promises passed, regardless of completion order. If the iterable 
// passed is non-empty but contains no pending promises, the returned promise is still asynchronously (instead of synchronously) rejected.

// Description
// The Promise.any() method is one of the promise concurrency methods. This method is useful for returning the first promise that fulfills. 
// It short-circuits after a promise fulfills, so it does not wait for the other promises to complete once it finds one.

// Unlike Promise.all(), which returns an array of fulfillment values, we only get one fulfillment value (assuming at least one promise fulfills). 
// This can be beneficial if we need only one promise to fulfill but we do not care which one does. Note another difference: this method rejects 
// upon receiving an empty iterable, since, truthfully, the iterable contains no items that fulfill. You may compare Promise.any() and Promise.all() 
// with Array.prototype.some() and Array.prototype.every().

// Also, unlike Promise.race(), which returns the first settled value (either fulfillment or rejection), this method returns the first fulfilled 
// value. This method ignores all rejected promises up until the first promise that fulfills.


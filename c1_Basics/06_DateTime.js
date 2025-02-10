console.log("---------Date & Time---------")
// JavaScript Date objects represent a single moment in time in a platform-independent format. 
// Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
// The Date() constructor creates Date objects. When called as a function, it returns a string representing the current time.
let myDate = new Date();
console.log(myDate) //2025-02-10T17:48:10.698Z
console.log(typeof myDate)
console.log(myDate.toString()) //Mon Feb 10 2025 23:18:52 GMT+0530 (India Standard Time)
console.log("Date:",myDate.getDate())
console.log("Day:",myDate.getDay())
console.log("Month:",myDate.getMonth())
console.log("Year:",myDate.getFullYear())
console.log("Hours:",myDate.getHours())
console.log("Minutes:",myDate.getMinutes())
console.log("Seconds:",myDate.getSeconds())
console.log("Milliseconds:",myDate.getMilliseconds())
console.log(myDate.getTime()) //Timestamp (milliseconds since Jan 1, 1970)

//Date Formatting
console.log(myDate.toDateString()) //Tue Feb 11 2025
console.log(myDate.toISOString()) //2025-02-10T18:31:52.022Z


console.log(myDate.toLocaleDateString("en-US")) // 2/11/2025 MM/DD/YYYY
console.log(myDate.toLocaleDateString("fr-FR")) // 11/2/2025 DD/MM/YYYY
console.log(myDate.toLocaleString()) // 11/2/2025, 12:02:57 am

let formattedDate = myDate.toLocaleString('default', {
    weekday: "long",
    day: "2-digit",
    month: "long"
})

console.log(formattedDate)


console.log(myDate.toLocaleTimeString()) //12:03:19 am
console.log(myDate.toTimeString()) // 00:03:45 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString()) // Mon, 10 Feb 2025 18:34:12 GMT

// 📌 E-commerce sites like Amazon use countdown timers for flash sales.
// 🔹 Example: Countdown for a sale ending
let saleEnd = new Date("2025-02-15T23:59:59"); // Sale end date

function updateCountdown() {
    let now = new Date();
    let timeLeft = saleEnd - now; // Time remaining in milliseconds

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

   console.log(`${days}:${hours}:${minutes}:${seconds}`)
    if (timeLeft <= 0) {
        console.log("Sale Ended!")
    }
}

// setInterval(updateCountdown, 1000);


// 📌 Websites like Google News, Amazon, Stock Market Apps sort and filter content based on date.
// 🔹 Example: Sorting a list of blog posts by date
let posts = [
    { title: "Post 1", date: new Date("2025-02-10") },
    { title: "Post 2", date: new Date("2025-02-08") },
    { title: "Post 3", date: new Date("2025-02-12") }
];

posts.sort((a, b) => b.date - a.date); // Sort newest first

console.log(posts);

//📌Age Calculation

let getAge = (birthDate) =>{
    let birth = new Date(birthDate)
    let today = new Date()

    let age = today.getFullYear() - birth.getFullYear();

    if(today.getMonth < birth.getMonth || (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())){age--}
    return age;
}

console.log(getAge("2003-8-22"))
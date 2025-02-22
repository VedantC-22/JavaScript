//singleton
// Object.create()
//object literals

let mySym = Symbol("Hello");
let user = {
  name: "Vedant",
  "full name": "Vedant Chuadhari",
  age: 21,
  [mySym]: "key1",
  location: "Pune",
  isLoggedIn: false,
  greet: function () {
    //() =>
    console.log(`Hello ${this.name}`);
  },
};

//accessing object values
console.log(user.name);
console.log(user["age"]);
// console.log(user.full name)
console.log(user["full name"]);
console.log(user[mySym]);
//adding property
user.email = "chaudharivedant@gmail.com";
console.log(user);
user.greet();

console.log(user);
user["age"] = 22;

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

//hasOwnProperty(propery)
console.log("----------hasOwnProperty()------------");
console.log(user.hasOwnProperty("isLoggedIn"));

console.log("----------Object.freeze()------------");
// The Object.freeze() static method freezes an object.
// Freezing an object prevents extensions and makes existing properties non-writable and non-configurable.
// A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed,
// their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned.
// freeze() returns the same object that was passed in.
Object.freeze(user);
user["age"] = 21;
//adding element
// silently doesn't add the property
user.mobileno = "0000001111";
console.log(user);

// The Object.seal() static method seals an object.
// Sealing an object prevents extensions and makes existing properties non-configurable.
// A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed,
// their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned.
//** Values of existing properties can still be changed as long as they are writable.
// seal() returns the same object that was passed in.

const realUser = {
  email: "chaudharivedant@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Vedant",
      lastName: "Chaudhari",
    },
  },
  age: 21,
};

console.log(realUser);
console.log(realUser.fullName.userFullName.firstName);

console.log("in operator")
// The in operator returns true if the specified property is in the specified object or its prototype chain.

// The in operator cannot be used to search for values in other collections. 
// To test if a certain value exists in an array, use Array.prototype.includes(). 
// For sets, use Set.prototype.has().
console.log('age' in realUser)

//Merging objects
const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "c", 5: "d", 6: "e" };
const obj3 = { obj1, obj2 };
console.log(obj1, obj2);

const obj4 = { ...obj1, ...obj2 };
console.log(obj4);


//Copying object
console.log("Coping object")
//shallow copy
// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object.
// It returns the modified target object.
const target = { a: 1, b: 52 };
const source = { b: {e: 20, f: 56}, c: 5 };

const returnedTarget = Object.assign(target, source);
returnedTarget.b.f = 250
source.b.f = 500
console.log(returnedTarget)
console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true
const source2 = { x: 25, y: 53, z: 89 };
const newObj = Object.assign({}, source, source2);
console.log(source);
console.log(source2);
console.log(newObj);

// using spread operator - shallow copy
const newObj2 = {...newObj}
newObj2.z = 150
console.log(newObj2)

const users = [
  {
    id: 1,
    name: "Vedant",
  },
  {
    id: 2,
    name: "Chetan",
  },
  {
    id: 3,
    name: "Dhiraj",
  },
];

console.log(users[0].name);

//Object de-structuring
// Destructuring Assignment is a JavaScript expression that allows to unpack of values from arrays, or properties from objects,
// into distinct variables data can be extracted from arrays, objects, and nested objects, and assigned to variables.
console.log("-------Object de-structuring--------");

const course = {
  courseName: "vc javascript learning",
  price: 499,
  courseInstructor: "vc",
};

// course.courseInstructor
// const {courseInstructor, price} = course
const { courseInstructor: instructor, price } = course;
console.log(instructor);


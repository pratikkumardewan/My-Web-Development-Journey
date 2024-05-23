/*
 for Loop

    for (initialization; condition; increment) {
    // code to be executed
    }

for...in Loop

    for (variable in object) {
    // code to be executed
    }

for...of Loop

    for (variable of iterable) {
    // code to be executed
    }

 */

    /**
 * JavaScript Loops Examples and Documentation
 */

// 1. for Loop

for (let i = 0; i < 5; i++) {
  console.log("for Loop iteration:", i); // Prints 0, 1, 2, 3, 4
}


// 2. for...in Loop

const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
  console.log(`for...in Loop - ${key}: ${person[key]}`); // Prints key-value pairs
  // name: John
  // age: 30
  // city: New York
}

// 3. for...of Loop

const array = [10, 20, 30, 40, 50];
for (let value of array) {
  console.log("for...of Loop value:", value); // Prints 10, 20, 30, 40, 50
}

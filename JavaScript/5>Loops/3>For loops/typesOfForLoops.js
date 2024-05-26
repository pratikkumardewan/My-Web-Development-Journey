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

const fruits = ['apple', 'banana', 'cherry'];

for (let index in fruits) {
    console.log(`Index: ${index}, Value: ${fruits[index]}`);
}


// 3. for...of Loop

const array = [10, 20, 30, 40, 50];
for (let value of array) {
  console.log("for...of Loop value:", value); // Prints 10, 20, 30, 40, 50
}

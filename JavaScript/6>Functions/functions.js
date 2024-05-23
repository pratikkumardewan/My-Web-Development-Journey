/* @description Function in JavaScript
    
    Functions: Use the function keyword. They can have parameters, return values, or neither. 

    Basic Function Declaration :
                                function fun1() {
                                console.log("This is fun1!");
                                }

                                fun1(); // Outputs: This is fun1!


*/

//1. Function with Parameters
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // Outputs: Hello, Alice!

//2. Function with Return Value
function add(a, b) {
    return a + b;
}

const sum = add(3, 4);
console.log(sum); // Outputs: 7


//3. Without Parameters and Without Return
function greet() {
    console.log("Hello, world!");
}

greet(); // Outputs: Hello, world!



//4. Function without Parameters but with return
function getGreeting() {
    return "Hello, world!";
}
const message = getGreeting();
console.log(message); // Outputs: Hello, world!

//5. Function with Default Parameters
function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greet(); // Outputs: Hello, Guest!
greet("Bob"); // Outputs: Hello, Bob!

//6. Function with Rest Parameters
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumAll(1, 2, 3)); // Outputs: 6
console.log(sumAll(4, 5, 6, 7)); // Outputs: 22

//7. Function with Destructured Parameters
function displayUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

const user = { name: "Alice", age: 25 };
displayUser(user); // Outputs: Name: Alice, Age: 25


//8. Anonymous Functions and Function Expressions
const fun2 = function() {
    console.log("This is fun2!");
};

fun2(); // Outputs: This is fun2!

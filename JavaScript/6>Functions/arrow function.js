/* @description Arrow Function in JavaScript
        Arrow functions provide a shorter syntax compared to traditional function expressions.
 */

// 1. Basic Arrow Function:
    fun3 = () => {
        console.log("This is fun3!");
    };

    fun3(); // Outputs: This is fun3!

// 2. Arrow Function with Parameters:
    greet = (name) => {
        console.log("Hello, " + name + "!");
    };

    greet("Alice"); // Outputs: Hello, Alice!

// 3. Arrow Function with Multiple Parameters:
    add = (a, b) => {
        return a + b;
    };

    sum = add(3, 4);
    console.log(sum); // Outputs: 7

// 4. Arrow Function with Implicit Return:
    multiply = (a, b) => a * b;

    product = multiply(3, 4);
    console.log(product); // Outputs: 12

// 5. Arrow Function with Default Parameters:
    greetWithDefault = (name = "Guest") => {
        console.log("Hello, " + name + "!");
    };

    greetWithDefault(); // Outputs: Hello, Guest!
    greetWithDefault("Bob"); // Outputs: Hello, Bob!

// 6. Arrow Function with Rest Parameters:
    sumAll = (...numbers) => {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    };

    console.log(sumAll(1, 2, 3)); // Outputs: 6
    console.log(sumAll(4, 5, 6, 7)); // Outputs: 22

// 7. Arrow Function with Destructured Parameters:
    displayUser = ({ name, age }) => {
        console.log(`Name: ${name}, Age: ${age}`);
    };

    user = { name: "Alice", age: 25 };
    displayUser(user); // Outputs: Name: Alice, Age: 25

// 8. Multi-line Arrow Function:
    getUserInfo = (name, age) => {
        const greeting = "Hello, " + name + "!";
        const ageInfo = "You are " + age + " years old.";
        return greeting + " " + ageInfo;
    };

    userInfo = getUserInfo("Alice", 25);
    console.log(userInfo); // Outputs: Hello, Alice! You are 25 years old.

// 9. Arrow Function with Lexical `this`:
    obj = {
        name: "Alice",
        greet: function() {
            innerGreet = () => {
                console.log("Hello, " + this.name);
            };
            innerGreet();
        }
    };

    obj.greet(); // Outputs: Hello, Alice

// 10. IIFE (Immediately Invoked Function Expression) with Arrow Function:
    (() => {
        console.log("IIFE with arrow function");
    })(); // Outputs: IIFE with arrow function

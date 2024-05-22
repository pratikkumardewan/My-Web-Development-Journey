/*
if Statement

    if (condition) {
    // code to be executed if condition is true
    }

2. if...else Statement

    if (condition) {
    // code to be executed if condition is true
    } else {
    // code to be executed if condition is false
    }

3. if...else if...else Statement

    if (condition1) {
    // code to be executed if condition1 is true
    } else if (condition2) {
    // code to be executed if condition2 is true
    } else {
    // code to be executed if all conditions are false
    }

4. switch Statement

    switch(expression) {
    case value1:
        // code to be executed if expression === value1
        break;
    case value2:
        // code to be executed if expression === value2
        break;
    // ...
    default:
        // code to be executed if expression does not match any case
    }

5. Ternary (Conditional) Operator

    condition ? expr1 : expr2;

 */

/**
 * JavaScript Conditional Expressions Examples and Documentation
 */

// 1. if Statement

let age = 20;
if (age >= 18) {
  console.log("You are an adult."); // This will be printed because age is 20
}

// 2. if...else Statement

let isMember = false;
if (isMember) {
  console.log("Welcome, member!");
} else {
  console.log("Please sign up."); // This will be printed because isMember is false
}

// 3. if...else if...else Statement

let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B"); // This will be printed because score is 85
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// 4. switch Statement

let fruit = "apple";
switch(fruit) {
  case "banana":
    console.log("Banana is selected.");
    break;
  case "apple":
    console.log("Apple is selected."); // This will be printed because fruit is "apple"
    break;
  case "orange":
    console.log("Orange is selected.");
    break;
  default:
    console.log("No fruit selected.");
}

// 5. Ternary (Conditional) Operator

let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote: " + canVote); // This will print "Can vote: Yes" because age is 20

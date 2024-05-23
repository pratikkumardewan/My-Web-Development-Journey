/*Primitive Data Types

Number
Represents numeric values. It includes both integer and floating-point numbers.
Examples: 42, 3.14

String
Represents a sequence of characters.
Examples: "hello", 'world'

Boolean
Represents a logical entity and can have two values: true or false.
Examples: true, false

Undefined
Represents a variable that has been declared but has not yet been assigned a value.
Example: let a; // a is undefined

Null
Represents the intentional absence of any object value.
Example: let b = null;

Symbol
Introduced in ECMAScript 2015 (ES6), it is a unique and immutable primitive value and may be used as the key of an object property.
Example: let sym = Symbol('description');

BigInt
Introduced in ECMAScript 2020, it is used for representing whole numbers larger than 2^53 - 1 (the largest number JavaScript can reliably represent with the Number primitive).
Example: let bigInt = 1234567890123456789012345678901234567890n;
*/

//number
let a = 42
let f = 3.14

//String
let str = "hello world"
let name = 'pratik'
let chr = 'a'
//boolean
let check = true
let flag = false

//undefine
let c;
let d = undefined;

// Null
let b = null;

// Symbol
let sym = Symbol('description');

// BigInt
let bigInt = 1234567890123456789012345678901234567890n;

// Print values and types
console.log(`Value of variable a is ${a} and its type is ${typeof a}`);
console.log(`Value of variable f is ${f} and its type is ${typeof f}`);
console.log(`Value of variable str is "${str}" and its type is ${typeof str}`);
console.log(`Value of variable name is "${name}" and its type is ${typeof name}`);
console.log(`Value of variable chr is "${chr}" and its type is ${typeof chr}`);
console.log(`Value of variable check is ${check} and its type is ${typeof check}`);
console.log(`Value of variable flag is ${flag} and its type is ${typeof flag}`);
console.log(`Value of variable c is ${c} and its type is ${typeof c}`);
console.log(`Value of variable d is ${d} and its type is ${typeof d}`);
console.log(`Value of variable b is ${b} and its type is ${typeof b}`);
console.log(`Value of variable sym is ${sym.toString()} and its type is ${typeof sym}`);
console.log(`Value of variable bigInt is ${bigInt} and its type is ${typeof bigInt}`);

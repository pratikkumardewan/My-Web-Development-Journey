/*JavaScript Operators

1. Arithmetic Operators

    Addition (+)
    Subtraction (-)
    Multiplication (*)
    Division (/)
    Modulus (%)
    Exponentiation (**)
    Increment (++)
    Decrement (--)

2. Assignment Operators

    Assignment (=)
    Addition assignment (+=)
    Subtraction assignment (-=)
    Multiplication assignment (*=)
    Division assignment (/=)
    Modulus assignment (%=)
    Exponentiation assignment (**=)

3. Comparison Operators

    Equal (==)
    Not equal (!=)
    Strict equal (===)
    Strict not equal (!==)
    Greater than (>)
    Greater than or equal (>=)
    Less than (<)
    Less than or equal (<=)

4. Logical Operators

    Logical AND (&&)
    Logical OR (||)
    Logical NOT (!)

5. Bitwise Operators

    Bitwise AND (&)
    Bitwise OR (|)
    Bitwise XOR (^)
    Bitwise NOT (~)
    Bitwise Left Shift (<<)
    Bitwise Right Shift (>>)
    Bitwise Zero-Fill Right Shift (>>>)

6. Conditional (Ternary) Operator

    Conditional (? :)

7. Type Operators

    typeof
    instanceof

8. Unary Operators

    Unary Plus (+)
    Unary Negation (-)
    Logical NOT (!)
    Increment (++)
    Decrement (--)

9. Comma Operator

    Comma (,)

10. Spread Operator

    Spread (...)
 */

/**
 * JavaScript Operators Examples and Documentation
 */

// 1. Arithmetic Operators
                                /*Program*/
// Addition (+)
let sum = 5 + 3; // sum is 8

// Subtraction (-)
let difference = 10 - 4; // difference is 6

// Multiplication (*)
let product = 7 * 6; // product is 42

// Division (/)
let quotient = 20 / 5; // quotient is 4

// Modulus (%)
let remainder = 15 % 4; // remainder is 3

// Exponentiation (**)
let power = 2 ** 3; // power is 8

// Increment (++)
let a = 5;
a++; // a is now 6

// Decrement (--)
let b = 10;
b--; // b is now 9

// 2. Assignment Operators

// Assignment (=)
let x = 10;

// Addition assignment (+=)
x += 5; // x is now 15

// Subtraction assignment (-=)
x -= 3; // x is now 12

// Multiplication assignment (*=)
x *= 2; // x is now 24

// Division assignment (/=)
x /= 2; // x is now 12

// Modulus assignment (%=)
x %= 5; // x is now 2

// Exponentiation assignment (**=)
x **= 2; // x is now 4

// 3. Comparison Operators

// Equal (==)
let isEqual = (5 == '5'); // isEqual is true

isEqual = (5 == 5); // isEqual is true

// Not equal (!=)
let isNotEqual = (5 != '5'); // isNotEqual is false

// Strict equal (===)
let isStrictEqual = (5 === 5); // isStrictEqual is true

let isItStrictEqual = (5 === '5'); // isItStrictEqual is false because though both of them is 5 but one is numerical 5 another is string type 5

// Strict not equal (!==)
let isStrictNotEqual = (5 !== '5'); // isStrictNotEqual is true

// Greater than (>)
let isGreater = (10 > 5); // isGreater is true

// Greater than or equal (>=)
let isGreaterOrEqual = (10 >= 10); // isGreaterOrEqual is true

// Less than (<)
let isLess = (3 < 7); // isLess is true

// Less than or equal (<=)
let isLessOrEqual = (3 <= 3); // isLessOrEqual is true

// 4. Logical Operators

// Logical AND (&&)
let isBothTrue = (true && false); // isBothTrue is false

// Logical OR (||)
let isEitherTrue = (true || false); // isEitherTrue is true

// Logical NOT (!)
let isNotTrue = !true; // isNotTrue is false

// 5. Bitwise Operators

// Bitwise AND (&)
let bitwiseAnd = 5 & 1; // bitwiseAnd is 1

// Bitwise OR (|)
let bitwiseOr = 5 | 1; // bitwiseOr is 5

// Bitwise XOR (^)
let bitwiseXor = 5 ^ 1; // bitwiseXor is 4

// Bitwise NOT (~)
let bitwiseNot = ~5; // bitwiseNot is -6

// Bitwise Left Shift (<<)
let leftShift = 5 << 1; // leftShift is 10

// Bitwise Right Shift (>>)
let rightShift = 5 >> 1; // rightShift is 2

// Bitwise Zero-Fill Right Shift (>>>)
let zeroFillRightShift = 5 >>> 1; // zeroFillRightShift is 2

// 6. Conditional (Ternary) Operator

// Conditional (? :)
let age = 20;
let canDrive = (age >= 18) ? 'Yes' : 'No'; // canDrive is 'Yes'

// 7. Type Operators

// typeof
let typeOfNumber = typeof 42; // typeOfNumber is "number"

// instanceof
let isInstance = (new Date() instanceof Date); // isInstance is true

// 8. Unary Operators

// Unary Plus (+)
let unaryPlus = + "3"; // unaryPlus is 3 (number)

// Unary Negation (-)
let unaryNegation = - "3"; // unaryNegation is -3

// Logical NOT (!)
let logicalNot = !false; // logicalNot is true

// Increment (++)
let c = 3;
c++; // c is now 4

// Decrement (--)
let d = 3;
d--; // d is now 2

// 9. Comma Operator

// Comma (,)
let e = (2 + 3, 5 + 1); // e is 6

// 10. Spread Operator

// Spread (...)
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6]; // arr2 is [1, 2, 3, 4, 5, 6]

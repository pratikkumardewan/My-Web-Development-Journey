/* Basics of Strings */

// To define strings, we can use both 'String' (single inverted comma) or "String" (double inverted comma)
// Single inverted comma will also generate a string, not char type data, as in JavaScript we don't have char type data
let str1 = "Pratik";
let str2 = 'Dewan';

console.log("str1 is a", typeof str1, "and str1 =", str1);
console.log("str2 is a", typeof str2, "and str2 =", str2);

const multiLineString = `
  This is a multiline string.
  It can span across multiple lines.
`;
console.log(multiLineString);


 // to get specific character of specific position we can use [index]
 console.log("First chacter of the string str1 is ",str1[0]);

//to know the length of a string we can use length opperator
console.log("length/size of the string str1 is",str1.length);

// Template literals / String Interpulation
//String interpolation is the process of evaluating variables within a string. 
//In JavaScript, this can be achieved using the + operator or template literals.
const message = `Hello, my name is ${str1} Kumar ${str2} .`;
console.log(message);

//Escape character
//to print ' and " innside a string we need to use escape character \ as \' or \"
console.log("This is Pratik\'s \"Pen\".");
//to insert new line \n
//to insert tab \t
// to print \ we need to use \\
/* 
 * Unicode Escape Sequence (\uXXXX)
 *You can also use Unicode escape sequences to represent characters by their Unicode code point.
 *console.log("\u0041"); --> Output: A
 *
 */
 console.log("\u0041");


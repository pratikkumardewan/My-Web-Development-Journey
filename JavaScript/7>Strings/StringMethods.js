// JavaScript String Methods Demonstration

// 1. charAt(index)
// Returns the character at the specified index in a string.
let str = "Hello, World!";
console.log("1. charAt:", str.charAt(0)); // H

// 2. charCodeAt(index)
// Returns the ASCII value/Unicode of the character at the specified index in a string.
console.log("2. charCodeAt:", str.charCodeAt(0)); // 72

// 3. concat(string1, string2, ..., stringN)
// Concatenates the string arguments to the calling string and returns a new string.
let str1 = str.concat("\nHow are you?");
console.log("3. new string : ", str1); // Hello, World! How are you?

// 4. includes(searchString, position)
// Determines whether one string may be found within another string, returning true or false as appropriate.
    //Without position parameter
    console.log("4. includes:", str.includes("World")); // true

    // With position parameter (search starts at index 7)
    console.log("4. includes with position argument:", str.includes("World", 7)); // true

    // With position parameter (search starts at index 8)
    console.log("4. includes with position argument:", str.includes("World", 8)); // false

// 5. endsWith(searchString, length)
// Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
    //if we dont give length paraameter it will automatically take the length of the string or str.length
    console.log("5. endsWith:", str.endsWith("World!")); // true
    
    //with length parameter
    console.log(str.endsWith("World!", 5));  // false, since from starting to 5 elements dont ends with "world"
    console.log(str.endsWith("World!", 7));  // true, since from starting to 7 elements do ends with "world"

// 6. indexOf(searchValue, fromIndex)
// Returns the index within the calling String object of the first occurrence of searchValue, or -1 if not found.
    //Without from Index or Default fromIndex that is 0
    console.log("6. indexOf:", str.indexOf("o")); // 4

    //With from index
    console.log("6. indexOf:", str.indexOf("o",2)); // 2
    console.log("6. indexOf:", str.indexOf("h",7)); // -1
//7: includes(searchString, position)
// Determines whether one string may be found within another string, returning true or false as appropriate.
    
    // Example with default usage
    console.log("7. Default usage:", str.includes("World")); // true

    // Example with position parameter
    console.log("7. With position parameter (5):", str.includes("Hello", 5)); // false

    // Example with position parameter outside the string length
    console.log("7. With position parameter (15):", str.includes("World", 15)); // false

    // Example with empty search string
    console.log("7. With empty search string:", str.includes("")); // true

    // Example with different case
    console.log("7. With different case:", str.includes("world")); // false

//8: indexOf(searchString, position)
// Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex, returns -1 if the value is not found.

    // Example with default usage
    console.log("8. Default usage:", str.indexOf("World")); // 7

    // Example with position parameter
    console.log("8. With position parameter (5):", str.indexOf("Hello", 5)); // -1

    // Example with position parameter outside the string length
    console.log("8. With position parameter (15):", str.indexOf("World", 15)); // -1

    // Example with empty search string
    console.log("8. With empty search string:", str.indexOf("")); // 0

    // Example with different case
    console.log("8. With different case:", str.indexOf("world")); // -1

//9: lastIndexOf(searchString, position)
// Returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex, returns -1 if the value is not found.


    // Example with default usage
    console.log("9. Default usage:", str.lastIndexOf("o")); // 8

    // Example with position parameter
    console.log("9. With position parameter (5):", str.lastIndexOf("o", 5)); // 4

    // Example with position parameter outside the string length
    console.log("9. With position parameter (15):", str.lastIndexOf("o", 15)); // 8

    // Example with empty search string
    console.log("9. With empty search string:", str.lastIndexOf("")); // 13

    // Example with different case
    console.log("9. With different case:", str.lastIndexOf("O")); // -1

//10: padEnd(targetLength, padString)
// Pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.


    // Example with default usage
    console.log("10. Default usage:", str.padEnd(15, ".")); // "Hello, World!."

    // Example with targetLength less than string length
    console.log("10. With targetLength less than string length (10):", str.padEnd(10, ".")); // "Hello, World!"

    // Example with targetLength equal to string length
    console.log("10. With targetLength equal to string length (13):", str.padEnd(13, ".")); // "Hello, World!"

    // Example with empty padString
    console.log("10. With empty padString:", str.padEnd(20, "")); // "Hello, World!         "

    // Example with padString longer than targetLength
    console.log("10. With padString longer than targetLength:", str.padEnd(20, "123")); // "Hello, World!1231231"

// 11. search(regexp)
// Executes a search for a match between a regular expression and this String object.
console.log("11. search:", str.search("World")); // 7

// 12. slice(beginIndex, endIndex)
// Extracts a section of a string and returns it as a new string, without modifying the original string.
console.log("12. slice:", str.slice(0, 5)); // Hello

// 13. split(separator, limit)
// Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
    // without limit parameter
    let strNew = "Hello, World! How are you? Fine, thank you!";

    console.log("13. split:", strNew.split(", ")); // ["Hello", "World!","How","are",....,"you"]
    // with limit parameter
    console.log("13. split:",strNew.split(", ", 2)); // ["Hello", "World! How are you? Fine, thank you!"]

// 14. startsWith(searchString, position)
// Determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
console.log("14. startsWith:", str.startsWith("Hello")); // true

// 15. substr(start, length)
// Returns a portion of the string, starting at the specified index and extending for a given number of characters afterward.
console.log("15. substr:", str.substr(7, 5)); // World

// 16. substring(indexStart, indexEnd)
// Returns the part of the string between the start and end indexes, or to the end of the string.
console.log("16. substring:", str.substring(0, 5)); // Hello

// 17. toLowerCase()
// Returns the calling string value converted to lower case.
console.log("17. toLowerCase:", str.toLowerCase()); // hello, world!

// 18. toUpperCase()
// Returns the calling string value converted to upper case.
console.log("18. toUpperCase:", str.toUpperCase()); // HELLO, WORLD!

// 19. trim()
// Trims whitespace from both ends of the string.
let strWithWhitespace = "   Hello, World!   ";
console.log("19. trim:", strWithWhitespace.trim()); // Hello, World!

// 20. trimStart() / trimLeft()
// Trims whitespace from the beginning of the string.
console.log("20. trimStart:", strWithWhitespace.trimStart()); // "Hello, World!   "

// 21. trimEnd() / trimRight()
// Trims whitespace from the end of the string.
console.log("21. trimEnd:", strWithWhitespace.trimEnd()); // "   Hello, World!"

// 22. valueOf()
// Returns the primitive value of a String object.
//In JavaScript, a string is an object of the String class, 
//and valueOf() returns the primitive string value of that object.

console.log("22. valueOf:", str.valueOf()); // Hello, World!

//Here, str is a string object representing "Hello, World!". 
//When you call valueOf() on this object, 
//it returns the primitive string value, 
//which is the string itself, "Hello, World!".

// 23. toString()
// Returns a string representing the specified object. 
//Similarly to valueOf(), in JavaScript, toString() is a method available on various objects, 
//including string objects. It returns a string representation of the object.

console.log("23. toString:", str.toString()); // Hello, World!

//In this case, when you call toString() on the str string object, 
//it returns a string representation of the object, 
//which is again the string itself, "Hello, World!".
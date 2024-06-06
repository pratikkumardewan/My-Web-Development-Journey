/*
Arrays in JavaScript are versatile and can hold different types of data,
including numbers, strings, objects, and even other arrays.
*/

// Creating Arrays

    // Array Creationn Using Array literal notation( "[" , "]" this square brackets are call array literals)
        let array1 = [1, 2, 3, 4];
        let array2 = [1, "a", 3.6, "pratik"];

    // Array Creation Using Array constructor
        let array3 = new Array(1, 2, 3, 4);
        let array4 = new Array(1, "a", 3.6, "pratik");
    
    //Array creation using size 
    let size =10;
    let arr = new Array(size);

    // Fill the array with values
    for (let i = 0; i < size; i++) {
      arr[i] = i;
    }

//Accessing Elements
    console.log(array1[0]); // 1
    console.log(array2[1]); // "a"

//Accessig Length
    let len = array1.length;
    console.log('The length of Array1 is',len); //4

//Modifying Elements
    array1[2] = 10;
    console.log(array1); // [1, 2, 10, 4]

//Important Array Methods
    // push: Adds one or more elements to the end of an array.
        array1.push(5);
        console.log(array1); // [1, 2, 10, 4, 5]
    
    // pop: Removes the last element from an array.
        array1.pop();
        console.log(array1); // [1, 2, 10, 4]
    
    // shift: Removes the first element from an array.
        array1.shift();
        console.log(array1); // [2, 10, 4]
    
    // unshift: Adds one or more elements to the beginning of an array.
        array1.unshift(0);
        console.log(array1); // [0, 2, 10, 4]
    
    //concat: Merges two or more arrays.
        let array5 = array1.concat(array2);
        console.log(array5); // [0, 2, 10, 4, 1, "a", 3.6, "pratik"]
    
    //slice: Returns a shallow copy of a portion of an array.
        let slicedArray = array5.slice(1, 4);
        console.log(slicedArray); // [2, 10, 4]
    
    // splice: Adds/Removes elements from an array.
        array1.splice(1, 2, 'a', 'b');
        console.log(array1); // [0, 'a', 'b', 4]
    
    //indexOf: Returns the first index at which a given element can be found.
        console.log(array2.indexOf("pratik")); // 3

    //includes: Checks if an array contains a specified element.
        console.log(array2.includes("a")); // true
    
    //Modifing Array to String
        //join(): In JavaScript, you can convert an array to a string using various methods.
        //One common method is to use the join() method, 
        //which concatenates the elements of an array into a string, with an optional separator between elements.
            let arrayAsString1 = array1.join(', '); // Using comma and space as separator
            console.log("Array to string : ",arrayAsString1);

        //.toString()
            let arrayAsString2 = array1.toString();
            console.log("Array to string : ",arrayAsString2); 
            // In this example, arrayAsString will contain the elements of array1 separated by commas and spaces. 
            //You can replace ', ' with any other separator you prefer, such as ',' 
            //for just commas or '' for no separator.

//Iterating Over Arrays
// You can use various methods to iterate over arrays, 
// such as for, for...of, forEach, map, etc.
    // Using for loop
        for (let i = 0; i < array1.length; i++) {
            console.log(array1[i]);
        }
  
    // Using for...of loop
        for (let element of array1) {
            console.log(element);
        }
  
    // Using forEach method
        array1.forEach(element => {
            console.log(element);
        });
        
    // Using map method to create a new array
        let mappedArray = array1.map(element => element * 2);
        console.log(mappedArray); // [0, 'aa', 'bb', 8]

//2D Arrays
//A 2D array is essentially an array of arrays:
    let array2D = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    
    // Accessing elements
    console.log(array2D[1][2]); // 6
    
    // Modifying elements
    array2D[2][0] = 10;
    console.log(array2D); // [[1, 2, 3], [4, 5, 6], [10, 8, 9]]

    //2D array using constructor and size
        let rows = 3;
        let cols = 4;
        
        // Create a 2D array
        newArray2D = new Array(rows);
        
        for (let i = 0; i < rows; i++) {
            newArray2D[i] = new Array(cols);
        for (let j = 0; j < cols; j++) {
            newArray2D[i][j] = `(${i},${j})`; // Example: fill with coordinates or any other value
        }
        }
        
        // Display the 2D array
        console.log(newArray2D);

    // 3D Arrays
    // A 3D array is an array of arrays of arrays:
        let array3D = [
            [
            [1, 2, 3],
            [4, 5, 6]
            ],
            [
            [7, 8, 9],
            [10, 11, 12]
            ]
        ];
        
        // Accessing elements
        console.log(array3D[1][0][2]); // 9
        
        // Modifying elements
        array3D[0][1][1] = 20;
        console.log(array3D); // [[[1, 2, 3], [4, 20, 6]], [[7, 8, 9], [10, 11, 12]]]
        
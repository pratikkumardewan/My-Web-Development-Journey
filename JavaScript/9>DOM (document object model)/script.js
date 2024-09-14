//aller message 
window.alert("Hi Bro ");

// Window Object
                    // The window object represents an open window in a browser. It is browser’s object (not JavaScript’s)
                    // & is automatically created by browser.
                    // It is a global object with lots of properties & methods.
console.log("The window value is ",window);
window.console.log("Hello");

//DOM manipulation
                    //DOM manipulation by ID
                    let divheading = document.getElementById("special-heading"); 
                    console.dir(divheading);
                    console.log(divheading);
                    //DOM manipulation by CLASS
                    let classheading= document.getElementsByClassName("heading-class");
                    console.dir(classheading);
                    console.log(classheading);

                    //DOM manipulation by Tag/TagName
                    let parahs = document.getElementsByTagName("p");
                    console.dir(parahs);
                    console.log(parahs);

//quarry selector
                    //Quarry Selector that return FIRST ELEMENT
                    let FirstQuarryElement = document.querySelector("p");
                    console.dir(FirstQuarryElement);
                    console.log(FirstQuarryElement);

                    //Quarry Selector that return FIRST ELEMENT
                    let AllQuarryElement = document.querySelectorAll("p");
                    console.dir(AllQuarryElement);
                    console.log(AllQuarryElement);


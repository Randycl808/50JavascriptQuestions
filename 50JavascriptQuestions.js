// 50 Javascript Questions

//Question: 1) What are the Javascript data types?

  // 1)number
  let pi = 3.14;
  let birthday = 09101998;
  // 2)bigInt
  const bigInt = 01234567890123456789n;
  // 3)string 
  let string = 'Hello World';
  let randy = 'Hello my name is Randy Clements'
  // 4)boolean
  let nameFieldChecked = true;
  let iCanSing = false;
  // 5)null 
  let age = null;
  // 6)undefined
  let age;
  console.log(age) // shows undefined
  // 7)objects 
  const car = {type:"Ford", model:"Mustang", year:"2018", color:"Black" }
  const randy ={firstName:"Randy", lastName:"Clements", age:"23", eyeColor:"Blue", dob:"09/10/1998"}
  // 8)symbol

//Question: 2) What is the difference between local and global variables?

  // Global-Accessed throughout the entire program
  // Local- Accessed within a block or function 

//Question: 3) What is the difference between "=" "==" and "==="?

  // = (equal to)- sets the variable on left to value on the right
  favNumber = 5;
  pi = 3.14;
  age = 23;

  // == (double equal)- is a comparison operator (requests a boolean)
  "2" == 2 //true
  "2" == 1 //false

  // === (triple equal)- checks if two operators are equal (returns a boolean) (always considers operands to be different)
  1 === 1;               console.log(1 === 1) //true
  "Hello" === "Hello";   console.log("Hello" === "Hello") //true
  "Hola" === "Hello";    console.log("Hola" === "Hello") //false
  "3" === 3;             console.log("3" === 3) //false

//Question: 4) Explain the .pop() and .push() methods

  // The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
  // The push() method adds new items to the end of an array. The push() method changes the length of the array.

//Question: 5) What are higher order functions (HOF)?

  // A higher order function is a function that takes a function as an argument, or returns a function. 
  // Higher order function is in contrast to first order functions, which don't take a function as an argument or return a function as output.

//Question: 6) Write a loop that prints every number divisible by 5 from 1-200



//Question: 7) What is the difference between the "break" and "continue" statements?

  //The break statement "jumps out" of a loop.
  for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
  }
  //In the example above, the break statement ends the loop ("breaks" the loop) when the loop counter (i) is 3.


  //The continue statement "jumps over" one iteration in the loop.
  for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
  }
  //In the example above, the continue statement continues the loop to 10 while ("jumping over") and skipping 3 when the loop counter (i) is 3.


//Question: 8) What is JSON?

  //JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. 
  //It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).

//Question: 9) What are arrow functions?

  //Arrow Functions — also called “fat arrow” functions, are relatively a new way of writing concise functions in JavaScript. 
  //They have been introduced by the ECMAScript 6 specifications and since then become the most popular ES6 feature. 
  //Arrow functions allow us to use the fat arrow => operator to quickly define JavaScript functions, with or without parameters.

  //No Parameters
  //The simplest arrow function syntax is when the function doesn’t have any parameters. 
  //In the example below, the ECMAScript 5 syntax declares a function expression and assigns it to the birthday variable. 
  //It outputs a simple text string to the console, saying “Happy birthday!”:

  // ES5 syntax with no parameters
  const birthday = function () {
    return "Happy birthday!";
    }
    console.log(birthday()) ;
    // Happy birthday!

  // ES6 syntax with no parameters
  const birthday = () => "Happy birthday!";
    console.log(birthday()) ;
    // Happy birthday!

  //One Parameter
  //Let’s extend the previous example with one parameter, specifically name. 
  //The old ES5 syntax takes in one parameter and appends its value to the string to be returned:

  // ES5 syntax with one parameter
  const birthday = function (name) {
    return "Happy birthday, " + name + "!";
  }
    console.log(birthday ("Randy"));
    // Happy birthday, Randy!

  // ES6 syntax with one parameter
  const birthday = (name) => "Happy birthday," + name + "!";
    console.log(birthday("Randy")) ;
    // Happy birthday, Randy!

  //Two Parameters
  //We can use arrow functions with as many parameters as we want. 
  //For instance, here is the same example with two parameters, age and name. 
  //Now, the birthday() function requires two inputs to return the string. First, let’s use ECMAScript 5:

  // ES5 syntax with two parameters
  const birthday = function (age, name) {
    return "Happy " + age + "rd birthday," + name + "!";
  }
    console.log(birthday(23, "Randy"));
    // Happy 23rd birthday, Randy!

  // ES6 syntax with two parameters
  const birthday = (age, name) => "Happy" + age + "rd birthday," + name + "!"
  
    console.log(birthday(23,"Randy"));
    // Happy 23rd birthday, Randy!

//Question: 10) What is TypeScript? How does it differ from Javascript?


//Question: 11) What are Promises? Can you use one in an example?


//Question: 12) What is async/await?


//Question: 13) What is the DOM?


//Question: 14) What is a variable?


//Question: 15) What is an array?


//Question: 16) What is an object?


//Question: 17) What is a function?


//Question: 18) How would you check if an object has a specific property?


//Question: 19) What is the difference between var, const, and let?


//Question: 20) How would you check if an array contains a specific item?


//Question: 21) How would you check the length of an array?


//Question: 22) What is the difference between a for loop and a while loop?


//Question: 23) When would you use "&&" and when would you use "||"?


//Question: 24) What is a ternary operator?


//Question: 25) What is the difference between Java and Javascript?

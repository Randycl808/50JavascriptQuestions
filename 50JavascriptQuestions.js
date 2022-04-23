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

  //TypeScript is a superset of the JavaScript language that has a single open-source compiler and is developed mainly by a single vendor: Microsoft. 
  //The goal of TypeScript is to help catch mistakes early through a type system and to make JavaScript development more efficient.
  //TypeScript is known as an Object-oriented programming language whereas JavaScript is a scripting language. 

//Question: 11) What are Promises? Can you use one in an example?

  //A promise is an object that may produce a single value some time in the future: either a resolved value, 
  //or a reason that it’s not resolved (e.g., a network error occurred). 
  //A promise may be in one of 3 possible states: fulfilled, rejected, or pending. 
  //Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

  let done = true

  const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
      const workDone = 'Here is the thing I built'
      resolve(workDone)
    } else {
      const why = 'Still working on something else'
      reject(why)
    }
  })

    //As you can see, the promise checks the done global constant, and if that's true, 
    //the promise goes to a resolved state (since the resolve callback was called); otherwise, 
    // the reject callback is executed, putting the promise in a rejected state. 
    //(If none of these functions is called in the execution path, the promise will remain in a pending state)

//Question: 12) What is async/await?

  //Async/Await is the extension of promises which we get as a support in the language. 
  //You can refer Promises in Javascript to know more about it.

  //Async:
  //It simply allows us to write promises based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event-loop. 
  //Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then javascript automatically wraps it in a promise which is resolved with its value.

  //Await:
  //Await function is used to wait for the promise. It could be used within the async block only. 
  //It makes the code wait until the promise returns a result. It only makes the async block wait.

  const getData = async() => {
    var y = await "Data from a website";
    console.log(y);
  }
  
    console.log(1);
    getData();
    console.log(2);  

//Question: 13) What is the DOM?

  //The Document Object Model (DOM) is a programming interface for web documents. 
  //It represents the page so that programs can change the document structure, style, and content. 
  //The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

//Question: 14) What is a variable?

  // Variables are containers for storing data (storing data values).
  //4 Ways to Declare a JavaScript Variable:
    //Using var 
      //When to use var?
        //The var keyword is used in all JavaScript code from 1995 to 2015.
        //The let and const keywords were added to JavaScript in 2015.
        //If you want your code to run in older browser, you must use var.
    //Using let
      //When to use let?
        //If you think the value of the variable can change, use let.
    //Using const
      //When to use const?
        //If you want a general rule: always declare variables with const.
    //Using nothing

//Question: 15) What is an array?

  //array is a single variable that is used to store different elements. 
  //It is often used when we want to store list of elements and access them by a single variable. 
  //Unlike most languages where array is a reference to the multiple variable, in JavaScript array is a single variable that stores multiple elements
  //An array is a special variable, which can hold more than one value

  const cars = ["Saab", "Volvo", "BMW"];
    let car = cars[0]; // 0 = "Saab" 1 = "Volvo" 2 = "BMW"

//Question: 16) What is an object?

  //Objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, 
  //in the form of “key: value” pairs. These keys can be variables or functions and are called properties and methods, 
  //respectively, in the context of an object.
  //Objects are same as variables in JavaScript, 
  //the only difference is that an object holds multiple values in terms of properties and methods.
  //Objects are variables too. But objects can contain many values.

  const car = {type:"Ford", model:"Mustang", year:"2018", color:"Black" }
  const randy ={firstName:"Randy", lastName:"Clements", age:"23", eyeColor:"Blue", dob:"09/10/1998"}

//Question: 17) What is a function?

  //A JavaScript function is a block of code designed to perform a particular task.
  //A JavaScript function is executed when "something" invokes it (calls it).

  //Convert Fahrenheit to Celsius function:
  function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }

  //Addition function
  let sum = add(10, 20);
    console.log('Sum:', sum);
    
//Question: 18) How would you check if an object has a specific property?


//Question: 19) What is the difference between var, const, and let?


//Question: 20) How would you check if an array contains a specific item?


//Question: 21) How would you check the length of an array?


//Question: 22) What is the difference between a for loop and a while loop?


//Question: 23) When would you use "&&" and when would you use "||"?


//Question: 24) What is a ternary operator?


//Question: 25) What is the difference between Java and Javascript?

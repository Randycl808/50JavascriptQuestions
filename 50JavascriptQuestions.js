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

  //var is function scoped when it is declared within a function. 
  //This means that it is available and can be accessed only within that function.
  //To understand further, look at the example below.
  var greeter = "hey hi";
    
  function newFunction() {
    var hello = "hello";
  }

  //Here, greeter is globally scoped because it exists outside a function while hello is function scoped. 
  //So we cannot access the variable hello outside of a function. So if we do this:
  var tester = "hey hi";
    
  function newFunction() {
    var hello = "hello";
  }
    console.log(hello); // error: hello is not defined

  //We'll get an error which is as a result of hello not being available outside the function.


  //let is block scoped
  //A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.
  //So a variable declared in a block with let  is only available for use within that block. Let me explain this with an example:
  let greeting = "say Hi";
  let times = 4;

  if (times > 3) {
    let hello = "say Hello instead";
    console.log(hello);// "say Hello instead"
   }
    console.log(hello) // hello is not defined

  //We see that using hello outside its block (the curly braces where it was defined) returns an error. 
  //This is because let variables are block scoped.


  //const variables declared with the const maintain constant values. const declarations share some similarities with let declarations.
  //const declarations are block scoped
  //Like let declarations, const declarations can only be accessed within the block they were declared.
  //Let me explain this with an example:

  const greeting = "say Hi";
  greeting = "say Hello instead";// error: Assignment to constant variable.

  //or

  const greeting = "say Hi";
  const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared

  //So just in case you missed the differences, here they are:
  //var declarations are globally scoped or function scoped while let and const are block scoped.
  //var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
  //They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
  //While var and let can be declared without being initialized, const must be initialized during declaration.


//Question: 20) How would you check if an array contains a specific item?

  //The includes method is part of ES6 that can also be used to determine whether an array contains a specified item. 
  //This method returns true if the element exists in the array, and false if not. 
  //The includes() method is perfect for finding whether the element exists or not as a simple boolean value.

  const symbol = Symbol('🌟');

  const types = ['Apple', 150, null, undefined, true, 29n, symbol];

  // strings
  types.includes('Apple');    // true

  // numbers
  types.includes(150);        // true

  // null
  types.includes(null);       // true

  // undefined
  types.includes(undefined);  // true

  // boolean
  types.includes(true);       // true

  // BigInt
  types.includes(29n);        // true

  // Symbol
  types.includes(symbol);     // true

//Question: 21) How would you check the length of an array?

  //.length is a property of arrays in JavaScript that returns or sets the number of elements in a given array.

  const listA = [1,2,3];
  const listB = new Array(6);

  console.log(listA.length);
  // 3

  console.log(listB.length);
  // 6

//Question: 22) What is the difference between a for loop and a while loop?

  //For Loops
  //Probably the most common type of loop, for loops, are great for when you already know how many times you want to loop through something.
  // When using a for loop, we typically use a counter that will either increment or decrement until a condition is met. 
  //Once the condition is met, the loop will stop. 
  //To get a better understanding of what I'm talking about here’s a basic example of a for loop in action:

  for (let i=0; i < 7; i++) {
    console.log('Hello World');
  }

  //If you predicted that Hello World would be printed to the console 7 times then you are correct! 
  //But how does this loop work? Well, in this example, we start with our initial statement (let i=0), 
  //the loop then looks at the condition (i < 7) and the increment expression (i++) and the loop runs accordingly. 
  //As long as i is less than 7, i will increment by 1 until it is no longer less than 7.
  //Each time the loop runs, the console.log(‘Hello World’); will be executed. 
  //Since the loop has to increment 7 times until the stopping condition is met, “Hello World” is printed to the console 7 times.
  // We can also make our starting condition a larger number than 0 and have the loop decrement until the condition is met.


  //While Loops
  //A while loop is slightly different than a for loop for the fact that it’s good to use when we don’t know how many times we want to loop through a problem beforehand. 
  //This is the key difference between using a for loop or a while loop. 
  //A while loop is a little easier to explain than a for loop because 
  //a while loop will simply run the same code over and over until the condition becomes false. 
  //Let’s take a look at a simple example of a while loop!

  let x = 0;
  let y = 0;

  while (x < 4) {
    x++;
    y += x;
}

  //As you can see, setting up a while loop is pretty simple. We start by declaring the while loop, setting a condition, and then the code that we want to execute which goes inside. 
  //In the example above, as long as x is less than 4, the while loop will continue to execute. 
  //The code that is being executed increases the value of x with each iteration as well as adds the value of x to y. 
  //If you haven’t figured it out yet, this while loop will set y’s value to 10. y starts out as 0 then 1, 3, 6, 10 because x’s value gets added onto y with each iteration.

  //Another While loop:
  let i = 0;
  do {
    i += 1;
    console.log(i);
  } while (i < 5);

  //As you can see, i starts at 0 and is incremented by 1 with each passing iteration. 
  //The new value of i is then also logged to the console. In this example, the console will print 1 2 3 4 5.

  //Infinite Loops
  //Something that you need to be careful of when dealing with loops is creating one where a stopping condition is never met. 
  //This loop will run forever (infinitely) and can have negative consequences on your computer such as having it freeze and become unresponsive. 
  //Let’s take a look at a simple infinite while loop so you know how to avoid running into them.

  let i = 0;
    while (i < 5) {
    console.log(i);
  }

  //This loop will run forever because the condition i < 5 will always be true 
  //and the console.log statement will execute an infinite amount of times.


//Question: 23) When would you use "&&" and when would you use "||"?

  

//Question: 24) What is a ternary operator?


//Question: 25) What is the difference between Java and Javascript?

  //What is the difference between Car and Carpet?
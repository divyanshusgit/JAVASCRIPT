// ------------------------------------------------------------------------------------------------------

// HOW JAVASCRIPT GETS EXECUTED

// var n = 2;
// function square (num)
// {
//     var ans = num*num;
//     return ans;
// }
// var square2 = square(n);
// var square4 = square(4);

// ------------------------------------------------------------------------------------------------------

// HOISTING IN JAVASCRIPT

// console.log(getName);
// getName();
// console.log(x);
// var x = 2;
// function getName(){
//     console.log('divyanshu');
// };

// PART 2
// console.log(getName);
// getName();
// console.log(x);
// var x = 2;
// var getName = () => {
//     console.log('divyanshu');
// }

// PART 3
// console.log(getName);
// getName();
// console.log(x);
// var x = 2;
// var getName = function(){
//     console.log('divyanshu');
// }

// PART 4
// var x = 2;
// function getName (){
//     console.log('divyanshu');
// }
// getName();
// console.log(x);
// console.log(getName);

// ------------------------------------------------------------------------------------------------------

// HOW FUNCTIONS WORK IN JS

// var x = 1;
// a();
// b();
// console.log(x);
// function a(){
//     var x = 10;
//     console.log(x);
// };
// function b(){
//     var x = 100;
//     console.log(x);
// };

// ------------------------------------------------------------------------------------------------------

// SHORTEST JS PROGRAM WINDOW AND THIS KEYWORD

// ------------------------------------------------------------------------------------------------------

// UNDEFINED V/S DEFINED

// console.log(a);
// var a = 2;
// console.log(a);

// ------------------------------------------------------------------------------------------------------

// SCOPE, SCOPE CHAIN AND LEXICAL ENVIRONMENT

// function a(){
//     console.log(b);
// };
// var b = 19;
// a();

// function a(){
//     var b = 19;
//     c();
//     function c(){
//         console.log(b);
//     };
// };
// a();

// the lexical environment of parent is called closure

// ------------------------------------------------------------------------------------------------------

// LET AND CONST

// console.log(a);
// let a = 2;
// console.log(a);
// var b = 3;

// console.log(a);
// let a;
// console.log(a);
// a = 2;
// console.log(a);

// ------------------------------------------------------------------------------------------------------

// BLOCK SCOPE

// let a = 2;
// if (a == 2) console.log('it is 2');

// {
//     var a = 1;
//     let b = 2;
//     const c = 3;
// }
// console.log(a);

// SHADOWING

// example1
// var a = 4;
// console.log(a);
// {
//     var a = 1;
//     let b = 2;
//     const c = 3;
//     console.log(a);
// }
// console.log(a);

// example2
// let b = 4;
// console.log(b);
// {
//     var a = 1;
//     let b = 2;
//     const c = 3;
//     console.log(b);
// }
// console.log(b);

// example3
// const c = 4;
// console.log(c);
// {
//     var a = 1;
//     let b = 2;
//     const c = 3;
//     console.log(c);
// }
// console.log(c);

// example4
// basic shadowing
// let x = 10;
// function example()
// {
//     let x = 20;
//     console.log(x);
// };
// example();
// console.log(x);

// example5
// function parameters and shadowing
// let y = 10;
// function example(y)
// {
//     console.log(y);
// };
// example(20);
// console.log(y);

// example6
// nested shadowing
// let a = 50;
// function outer() {
//   let a = 60;
//   function inner() {
//     let a = 70;
//     console.log(a); // 70
//   }
//   inner();
//   console.log(a); // 60
// }
// outer();
// console.log(a); // 50

// example 7
// var a = 2;
// function example()
// {
//     var a = 8;
//     console.log(a);
// };
// example();
// console.log(a);

// ------------------------------------------------------------------------------------------------------

// FUNCTION SCOPE
// var a = 4;
// function func()
// {
//     var a = 1;
//     let b = 2;
//     const c = 3;
//     console.log(a);
// };
// func();
// console.log(a);

// ILLEGAL SHADOWING
// let a = 20;
// {
//     var a = 20;
// };

// LEGAL SHADOWING

// example1
// let a = 20;
// {
//     let a = 30;
//     console.log(a);
// };
// console.log(a);

// example2
// var a = 20;
// {
//     let a = 30;
//     console.log(a);
// };
// console.log(a);

// example3
// let a = 30;
// function func()
// {
//     var a = 40;
//     console.log(a);
// };
// console.log(a);
// func();
// console.log(a);

// lexical scoping in block
// const a = 10;
// {
//     const a = 20;
//     {
//         const a = 30;
//         console.log(a);
//     }
// }

// ------------------------------------------------------------------------------------------------------

// CLOSURES IN JAVASCRIPT

// example 1
// function x()
// {
//    var a = 7;
//    function y()
//    {
//     console.log(a);
//    };
//    y();
// };
// x();

// example 2
// function x()
// {
//    var a = 7;
//    return function y()
//    {
//     console.log(a);
//    };
// };
// x();
// let val = x();
// console.log(val);
// val();

// example 3
// function x()
// {
//     var a = 7;
//     function y()
//     {
//     console.log(a);
//     };
//     a = 10;
//     return y;
// };
// x();
// let val = x();
// val();

// function w() {
//     var b = 8;
//     function x() {
//         var a = 7;
//         function y() {
//             console.log(a,b);
//         };
//         a = 10;
//         y();
//     };
//     b = 11;
//     x();
// };
// w();

// ------------------------------------------------------------------------------------------------------

// SETTIMEOUT WITH CLOSURES

// example 1
// function x() {
//     var a = 1;
//     let b = 2;
//     const c = 3;
//     setTimeout(function () {
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }, 1000);
//     console.log('namaste');
// };
// x();

// example 2
// you are given a task to print 1 2 3 4 5 one by one after every 1 second
// function x()
// {
//     for(var i = 1; i<=5; i++)
//     {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     };
// };
// x();

// example 3
// function x()
// {
//     for(let i = 1; i<=5; i++)
//     {
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000);
//     };
// };
// x();

// example 4
// function x()
// {
//     for(var i = 1; i<=5; i++)
//     {
//         function y(){
//             var j = i;
//             setTimeout(() => {
//                 console.log(j);
//             }, i * 1000);
//         }
//         y();
//     };
// };
// x();
// another way
// function x()
// {
//     for(var i = 1; i<=5; i++)
//     {
//         function y(j){
//             setTimeout(() => {
//                 console.log(j);
//             }, j * 1000);
//         }
//         y(i);
//     };
// };
// x();

// WHEN THE SETTIMEOUT's CALLBACK FUNCTION TAKES SOME ARGUMENTS
// function sum(a,b)
// {
//     console.log(a+b);
// };
// setTimeout(sum, 2000, 3, 4);

// ------------------------------------------------------------------------------------------------------

// FIRST CLASS FUNCTIONS

// function statement
// function a()
// {
//     console.log('Hi');
// };
// a();

// function expression
// let b = function()
// {
//     console.log('Hi');
// };
// b();

// difference between a function expression and a function statement
// function statements are hoisted, function expressions are not hoisted

// function declaration 
// function statement is also called function declaration

// anonymous function
// function (){
//     console.log('Hi');
// }
// this will throw error because, according ECMAScript functions statements should have a name
// os we will assign this anonymous function to a variable
// const func = function (){
//     console.log('Hi');
// };
// func();

// named function expression
// the function expression we used above was an anonymous function expression
// but now we will be using a named function expression
// let b = function a()
// {
//     console.log('Hi');
//     console.log(a);
// };
// b();
// but we cannot use the name of the function 'a' to call the function
// because the name 'a' is not present in the global space
// it's present in the local space

// difference between arguments and parameters
// parameters are the variables that are used as placeholders for the actual data that will be supplied to the function in the function declarations
// arguments are the actual variables that are supplied to a function

// first class functions
// a function that takes another function as an argument or a function that returns another function is called a first class function
// function are first class citizens refers to the ability of a function to be returned by a function and by passed as an argument to another function

// ------------------------------------------------------------------------------------------------------

// CALLBACK FUNCTIONS

// javascript is a synchronous single threaded language

// callback function example 1
// function x(z)
// {
//     console.log('calling the callback');
//     z();
//     console.log('callback called');
// };
// function cbk()
// {
//     console.log('this is the callback');
// };
// x(cbk);
// the function z will be called back some time later in the function, that's why it is called callback function 

// callback function example 2
// setTimeout(() => {
//     console.log('inside the setTimeOut');
// }, 2000);

// callback function example 3
// function stout(){
//     console.log('inside setTimeOut');
// }
// setTimeout(stout, 5000);
// function x(z)
// {
//     console.log("calling the callback");
//     z();
//     console.log("callback called");
// };
// function cbk()
// {
//     console.log('the callback')
// };
// x(cbk);
// console.log("x and cbk done")
// javascript will encounter the setTimeOut function and then it will assign a timer of 2000 ms to the stout function , and then it will move ahead (javascript waits for none)
// after the "callback called" has been logged into the console, the function x's execution context will be removed from the callStack, the global execution context will also be removed after it's code execution completion, and then after 5000 ms the setTimeOut's callback will enter the callStack 

// if something blocks the callStack then it is called blocking the main thread
// we should never block our main thread
// this blocking may occur if a highly complex computation demanding function enter the call stack
// the solution to carry out these highly complex, computation demanding functions without blocking the main thread is to use the async feature of javascript to make the heavy function async 
// we are able to perform async operations because of function in javascript are first class citizens
// we achieved the async thing using the web api's setTimeOut feature and callback feature

// eventListener
// const btn = document.getElementById('btn');
// btn.addEventListener('click',clickFunc);
// function clickFunc()
// {
//     console.log('button clicked');
// };
// the clickFunc is a callback function
// the clickFunc will come into the callStack when the button with id btn is clicked

// using a closure with eventlistener to maintain the click count
// const btn = document.getElementById('btn');
// btn.addEventListener('click',clickFunc);
// function clickFunc()
// {
//     let count = 0;
//     function worker()
//     {
//         console.log('button click', count);
//         count++;
//     };
//     worker();
// };
// this won't work
// const btn = document.getElementById('btn');
// btn.addEventListener('click', clickFunc());
// function clickFunc() {
//     let count = 0;
//     function worker() {
//         console.log('button click', count);
//         count++;
//     };
//     return worker;
// };
// this will work
// function clicker() {
//     let count = 0;
//     document.getElementById('btn').addEventListener('click', clickFunc);
//     function clickFunc() {
//         console.log('button click', count);
//         count++;
//     };
// };
// clicker();
// this is another way

// why do we need to remove eventListeners
// eventListeners are heavy
// it takes a memory
// it makes a closure
// and we cannot free up the extra memory that these eventListeners are taking

// ------------------------------------------------------------------------------------------------------

// EVENT LOOP
// javascript is a synchronous single threaded language
// it has one call stack
// it can do one thing at a time
// this call stack is present inside the javascript engine 

// example 1
// function a()
// {
//     console.log("a");
// };
// a();
// console.log("end");

// example 2
// function a()
// { 
//     let x = 99;
//     function b()
//     {
//         let y = 100;
//         console.log("b");
//     }
//     console.log("a");
//     b();
// };
// a();
// console.log("end");

// example 3
// function a()
// { 
//     let x = 99;
//     function b()
//     {
//         console.log(x);
//     }
//     console.log("a");
//     b();
// };
// a();
// console.log("end");

// example 4
// function a()
// { 
//     let x = 99;
//     function b()
//     {
//         let y = 100;
//         console.log(x);
//     };
//     console.log("a");
//     b();
// };
// a();
// console.log("end");

// the main job of call stack is to execute whatever comes inside it

// what if we want to execute some piece of code after some time

// the browser has a javascript engine, the engine has a call stack, 
// the browser also has something called local storage
// the browser also has timer, url

// web APIs has
// - setTimeOut()
// - DOM APIs
// - fetch()
// - localStorage
// - console
// - location

// web APIs gives us the superpowers

// dom is not a part of javascript
// setTimeOut() is not a part of javascript
// console.log() is not a part of javascript
// these are the browser's superpowers

// global object is like a small little window attached to Web APIs that join the web APIs section to the javascript engine's callstack

// the browser wraps up all the superpowers into a global object called window object

// example
// console.log('start');
// setTimeout(function cb(){
//     console.log("Callback");
// }, 5000);
// console.log('end');
// first a global execution context is created
// the console.log() statement is executed (the console API will be used to log into the console)
// the comes the setTimeOut function
// the callback function will be passed to the setTimeOut api of the browser
// the setTimeOut api will register the callback with the timer being given to the timer api section
// after registering the timer, javascript moves to the next line
// the console.log('end') is executed
// when the timer gets over the callback function waiting is pushed to the callback queue section
// event loop checks for the emptiness of the callStack
// if callStack is found empty, the callback function is pushed from the callback queue to the callStack

// console.log('start');
// document.getElementById('btn').addEventListener('click',function(){
//     console.log('clicked');
// })
// console.log('end');
// start will be printed
// the document is another superpower given to the javascript engine by the browser, through the window object, in form of a web apis called DOM APIs
// the addEventListener registers a callback on the click event
// a callback will be registered in the web apis section and it will be attached to the click event
// after attaching the event handler javascript moves on, it doesn't wait
// end will be printed
// when the click event occurs the callback function is loaded into the callback queue
// not event loop checks for the emptiness of callStack
// if it's empty then the function will be pushed to the callStack

// the callback that the addEventListener method registered will remain in the web apis section until the click event occurs

// why do we have the callback queue
// so that if multiple callbacks are waiting to get executed (are waiting to get into callStack), they will be handled smoothly by the event loop

// FETCH WORKS LITTLE DIFFERENTLY
// console.log('start');
// setTimeout(function cbT(){
//     console.log('CB SetTimeOut');
// });
// fetch("https://google.com")
// .then(function cbF(){
//     console.log('CB Netflix');
// });
// console.log('end');
// start is printed
// cbT is registered
// fetch registers the cbF
// when the fetching is over, cbF is sent to the micro task queue and not the callback queue (which is also called macro task queue)
// micro task queue has higher priority than the macro task queue
// end is printed

// what can come inside the microtask queue
// the callback functions of promises
// the mutation observer

// callback queue is also called task queue

// starvation 
// when a callback function waits on the callStack queue, for a considerable amount of time, due to the callbacks in the micros task queue, it's called starvation 

// at 19:08 
// https://www.youtube.com/watch?v=8zKuNo4ay8E


// ------------------------------------------------------------------------------------------------------

// JS ENGINE ARCHITECTURE

// JAVASCRIPT RUNTIME ENVIRONMENT
// it is a container which has all the things required to run javascript
// it contains javascript engine, a set of APIs (to connect to the outer world), an event loop, callback queue, microtask queue
// JRE is not possible without the javascript engine
// javascript engine is the heart of the JRE
// browsers can executed javascript just because it has a JRE
// Node.js has it's own JRE
// Node.js helps us to run javascript outside the browser
// if we want to run javascript on a device then all we need is a JRE
// APIs could be different in different devices surroundings
// setTimeOut is present in the APIs of the browser as well as in the APIs of the Node.js
// the setTimeOut of the Browser API may have some different implementation than the setTimeOut of the Node.js API
// there is some ECMAScript standards that needs to be followed by these javascript engines
// first javascript engine: is now spiderMonkey
// JS Engine is not a machine
// JS Engine is a program
// google v8 is written in c++
// js engine takes code as the input
// the code goes through three phases: PARSING, COMPILATION, EXECUTION
// first the source code is broken down into tokes
// then the syntax parser converts theses tokens into a Abstract Syntax Tree
// when javascript was created, it was an interpreted language because the javascript engine that javascript used back in those days used an interpreter
// most of the modern browsers use an interpreter + a compiler both together
// so whether javascript is interpreted or not depends on the javascript engine
// JIT compilation: it uses both (interpreter and compiler to execute the code) 
// AST goes to interpreter, it gives bytecode for execution
// and in doing so, the interpreter takes the help of the compiler for optimization process
// the byte code is sent to the execution phase
// and the execution of javascript isn't possible without the memory heap and the call stack
// memory heap is the space where all the variables and functions are assigned memory
// we also have a garbage collector
// it collects all the garbage and sweeps them
// using the mark and sweep algorithm
// this mark and sweep algorithms is widely used in garbage collectors, not only in garbage collectors of javascript
// there are many other types of optimizations that our compiler does for our code
// some examples of such optimizations are as follows: inlining, copy elision, inline caching

// About V8 (chrome's javascript engine)
// interpreter's name is ignition
// compiler's fan is turbofan (it's an optimizing compiler)

// Working of JavaScript's V8 Engine 
// first source code is sent to the parser
// the parse generates a AST
// and now the turbofan and the ignition work together to generate optimized bytecode (bytecode generation is handled by the ignition, turbofan is handled by the turbofan)

// the garbage collector of javascript is orinoco 
// they have another garbage collector called oil pan

// ------------------------------------------------------------------------------------------------------

// TRUST ISSUES WITH SETTIMEOUT

// console.log('start');
// setTimeout(() => {
//     console.log('5 seconds code');
// }, 5000);
// console.log('end');
// let startDate = (new Date()).getTime();
// let endDate = startDate;
// while(endDate!=startDate+5000)
// {
//     endDate = (new Date()).getTime();
// };
// the setTimeOut's callback function won't get executed after 5000, it will take 10000
// even if the setTimeOut is given a timer of 0 milliseconds, it will work in the same way

// ------------------------------------------------------------------------------------------------------

// HIGHER ORDER FUNCTIONS
// a function that takes another functions as argument or a function that returns another function is called a higher order function

// example of higher order function
// function x()
// {
//     console.log("the callback function");
// }
// function y(z)
// {
//     console.log('the higher order function');
//     z();
// }
// y(x);

// example of functions to find the area of a circle, circumference of a circle, diameter of a circle
// const radius = [1,2,3,4];
// const calcArea = function()
// {
//     const output = [];
//     for(let i = 0; i < radius.length; i++)
//     {
//         output.push(3.14*radius[i]*radius[i]);
//     };
//     return output;
// };
// const calcPerimeter = function()
// {
//     const output = [];
//     for(let i = 0; i < radius.length; i++)
//     {
//         output.push(2*3.14*radius[i]);
//     };
//     return output;
// };
// const calcDiameter = function()
// {
//     const output = [];
//     for(let i = 0; i < radius.length; i++)
//     {
//         output.push(2*radius[i]);
//     };
//     return output;
// };
// console.log(calcDiameter());
// console.log(calcPerimeter());
// console.log(calcArea());
// the problem with this code is that we are doing things again and again
// this code is not modular
// we are violating DRY principle

// example demonstrating the modular version of the code
// const radius = [1,2,3,4];
// const calculate = function(arr,logic){
//     const output = radius.map(logic);
//     return output;
// };
// const areaLogic = function(r){
//     return 3.14*r*r;
// };
// const perimeterLogic = function(r){
//     return 3.14*2*r;
// };
// const diameterLogic = function(r){
//     return 2*r;
// };
// console.log(calculate(radius, diameterLogic));
// console.log(calculate(radius, perimeterLogic));
// console.log(calculate(radius, areaLogic));
// this is an example of functional programming
// in functional programming we break out code into smaller and smaller functions

// attaching our calculate function to the array constructor
// const radius = [1,2,3,4];
// Array.prototype.calculate = function(logic){
//     const output = radius.map(logic);
//     return output;
// };
// const areaLogic = function(r){
//     return 3.14*r*r;
// };
// const perimeterLogic = function(r){
//     return 3.14*2*r;
// };
// const diameterLogic = function(r){
//     return 2*r;
// };
// console.log(radius.calculate(diameterLogic));
// console.log(radius.calculate(perimeterLogic));
// console.log(radius. calculate(areaLogic));

// ------------------------------------------------------------------------------------------------------


// MAP FILTER AND REDUCE

// MAP FUNCTION
// const arr = [1,2,3,4];
// function double(x)
// {
//     return 2*x;
// };
// function triple(x)
// {
//     return 3*x;
// };
// function binary(x)
// {
//     return x.toString(2);
// };
// console.log(arr.map(double));
// console.log(arr.map(triple));
// console.log(arr.map(binary));

// FILTER FUNCTION
// const arr = [1,2,3,4,5];
// function even(x)
// {
//     return x%2==0;
// };
// console.log(arr.filter(even));
// const newArr = arr.filter((element)=>{
//     return element%2==0;
// });

// REDUCE FUNCTION
// const arr = [1,2,3,4];
// const sum = arr.reduce(function(startVal,currentVal){
//     return startVal+=currentVal;
// },10);
// console.log(sum);

// FINDING MAX VALUE
// using normal function
// const arr = [1,2,3,4];
// function findMax(arr){
//     let max = -Infinity;
//     for(let i = 0; i<arr.length; i++)
//     {
//         if(max<arr[i])
//         {
//             max = arr[i];
//         };
//     };
//     return max;
// };
// console.log(findMax(arr));
// using reduce
// const arr = [1,2,3,4];
// const max = arr.reduce((startVal,currentVal)=>{
//     if(startVal<currentVal)
//     {
//         startVal = currentVal;
//     };
//     return startVal;
// },-Infinity);
// console.log(max);

// IF WE HAVE A COMPLEX DATA, ON WHICH WE NEED TO FIND THE MAX AGE
// using reduce
// const obj = [
//     {firstName: 'chinu3', age:'23'},
//     {firstName: 'chinu1', age:'20'},
//     {firstName: 'chinu4', age:'24'},
//     {firstName: 'chinu2', age:'22'},
// ];
// const maxAgedPerson = obj.reduce(function(startVal, curObj){
//     let obj;
//     if(startVal<curObj.age)
//     {
//         obj = curObj;
//         startVal = curObj.age;
//     };
//     return startVal;
// },-Infinity);
// console.log(maxAgedPerson);

// IF WE HAVE COMPLEX DATA OF WHICH WE HAVE TO MAKE AN ARRAY THAT CONTAINS THE FULL NAMES OF EMPLOYEES
// const obj = [
//     {firstName: 'chinu3', lastName: 'surName3', age:'23'},
//     {firstName: 'chinu1', lastName: 'surName1', age:'20'},
//     {firstName: 'chinu4', lastName: 'surName4', age:'24'},
//     {firstName: 'chinu2', lastName: 'surName2', age:'22'},
// ];
// const output = obj.map(x=>x.firstName+" "+x.lastName);
// console.log(output);

// start at: 37.41
// https://www.youtube.com/watch?v=zdp0zrpKzIE&t=233s

// ------------------------------------------------------------------------------------------------------

// CALLBACK HELL
// TIME TIDE AND JAVASCRIPT WAITS FOR NONE

// example 1
// using callback is a powerful way to async operations in javascript
// console.log('namaste');
// console.log('london');
// setTimeout(version, 5000);
// function version(){
//     console.log('3.0');
// };

// example 2
// const cart = ['london','paris','newyork'];
// api.createOrder();
// api.proceedToPayment();
// first we will need to create an order
// and then only we can proceedToPayment
// this dependency is managed using callback
// we need to call the proceedToPayment function after the createOrder function

// so we will wrap the proceedToPayment function inside another function
// and then we will pass this function as a callback function to the createOrder function
// api.createOrder(cart,function(){
//     api.proceedToPayment();
// });
// now it is the responsibility of the createOrder function to create an order and then call the proceedToPayment function  

// now we are going more real and we need to show the order summary page after the proceedToPayment button has been clicked
// so we have the following functions
// api.createOrder();
// api.proceedToPayment();
// api.showOrderSummary();
// so now our code will look like this
// api.createOrder(cart, function(){
//     api.proceedToPayment(function(){
//         api.showOrderSummary();
//     });
// });

// now we want to update the wallet
// api.createOrder(cart, function(){
//     api.proceedToPayment(function(){
//         api.showOrderSummary(function(){
//             api.updateWallet();
//         });
//     });
// });

// notice
// the code is growing horizontally
// code is becoming unreadable and ugly
// code is becoming unmaintainable
// this structure is called pyramid of doom
// this is called callback hell
// this is the first problem with callbacks

// ------------------------------------------------------------------------------------------------------

// INVERSION OF CONTROL
// we took the proceedToPayment function and gave it to the createOrder function
// we are blindly trusting the createOrder function
// this is risky 
// what if the callback function is not called at all, what if the callback function is called twice
// we are giving the control of the callback function to another code, and this is called inversion of control

// const cart = ['kurta','pehjama','maala'];
// createOrder(cart); // this will return an orderID
// proceedToPayment(orderID); 
// both these functions are async (we don't know how much time they will take)
// but they are dependent on each other

// trying to handle this situation using callbacks
// createOrder(cart,function(orderID){
//     proceedToPayment(orderID);
// });
// this is how our code will look if we had to use callbacks to do the work
// but what's the issue with this code
// this issue is inversion of control

// handling this using promise
// we will design our createOrder api such a way that it won't take a callback function, it will return a promise, and this promise will be an object which contains the a property named "returnVariable" and it is assigned undefined initially, and when the createOrder has done it's work this promise object will be updated (the property "returnValue" will be assigned the value that the createOrder function has created)
// we will also attach a callback function to the promise object so that the callback function's logic get's executed after the promise object has been updated
// const promise1 = createOrder(cart);
// promise1.then(function(orderID){
//     proceedToPayment(orderID);
// });

// how this code is better than the callback approach
// because in callback function we have passed the callback function to the outer function
// we were blindly trusting the outer function
// but the promises approach we are attaching the callback function to the promise object

// const GITHUB_API = "https://api.github.com/users/divyanshusgit";
// const user = fetch(GITHUB_API);
// console.log(user);
// user.then(function(content)
// {
//     console.log(content);
//     console.log(user);
// });
// initially the promise object contains undefined, and after the promise gets resolved, the value of the promise object will be updated 
// the promise object contains a return value
// and a promise state value: which is either pending or resolved or rejected
// another plus point of using promises is that it is immutable

// DEFINiTION
// promise object is a placeholder which will be filled with a value later
// a promise is an object representing the eventual completion or failure of an async operations.

// PROMISE CHAINING
// resolves callback hell

// const GITHUB_API = "https://api.github.com/users/divyanshusgit";
// fetch(GITHUB_API)
// .then(function(orderID)
// {
//     return proceedToPayment(orderID);
// })
// .then(function(total){
//     return showOrderSummary(total);
// })
// .then(function(transactValue){
//     return updateWallet(transactValue);
// });
// const GITHUB_API = "https://api.github.com/users/divyanshusgit";
// fetch(GITHUB_API)
// .then(orderID=>proceedToPayment(orderID))
// .then(total=>showOrderSummary(total))
// .then(transactValue=>updateWallet(transactValue));

// ------------------------------------------------------------------------------------------------------

// PROMISES
// building e-com
// const cart = ['kurta','phejama','ghadhi'];
// this createOrder API will take cart as input and will return an orderID
// createOrder(cart); 
// this proceedToPayment API will take orderID and will take us to payment page
// proceedToPayment(orderID);
// both the apis are async
// the second one is dependent on the first one

// trying to handle this using callbacks
// const cart = ['kurta','phejama','ghadhi'];
// createOrder(cart, function(){
//     proceedToPayment(orderID);
// });
// now it's createOrder api's to call back the proceedToPayment api later 

// the problems 
// inversion of control (we have given power to the createOrder api)

// trying to handle this using promises
// const promise = createOrder(cart);
// the createOrder api shouldn't take any callback function
// the promise object is an object which contains a data = undefined in it initially
// the promise object will contain whatever the createOrder api will return
// it will store undefined till the moment it gets a return value
// now we will attach a callback function to this promise object
// promise.then(function(orderID){
//     proceedToPayment(orderID);
// });
// when the promise object get's filled with data the callback function (then's parameter) will be called automatically

// how this code is better
// we are not passing the proceedToPayment to createOrder, we are attaching this to that
// no inversion of control
// no doubts if the callback function will be called twice or more or never at all
// using promises the .then's parameter (the callback function) will be called only once

// fetch
// is an api provided by the browser to make an external call
// it returns us a promise
// const GITHUB_API = "https://api.github.com/users/divyanshusgit";
// const user = fetch(GITHUB_API);
// user.then(function(response){
//     console.log(response);
// })

// contents of a promise object
// promiseResult (initially undefined)
// promiseState (either pending or fulfilled or rejected)

// the promise object is immutable

// definition of promise
// a promise is a placeholder for a certain period of time
/// a container for future value
// a promise is a an object that represents the actual completion or failure of an async event

// the callback hell which would be created if we used callbacks
// const cart = ["shoes","pants","kurta"];
// createOrder(cart, function(orderID){
//     proceedToPayment(orderID, function(paymentInfo){
//         showOrderSummary(paymentInfo, function(){
//             updateWallet();
//         });
//     });
// });

// the promise doesn't crate callbac hell
// const cart = ["shoes","pants","kurta"];
// createOrder(cart, orderID => proceedToPayment(orderID))
// .then(paymentInfo => showOrderSummary(paymentInfo))
// .then(updateWallet);


// ------------------------------------------------------------------------------------------------------

// PROMISES
// const cart = ['kurta','pehjama','watch'];
// const promise = createOrder(cart);
// console.log(promise);
// promise.then(
//     (resVal)=>{
//         console.log(resVal)
//         console.log(promise)
//     },
//     (rejVal)=>console.log(rejVal)
// );
// function createOrder(cart)
// {
//     const pr = new Promise(function(resolve,reject){
//         // createOrder
//         // validateCart
//         // orderID
//         if(!validateCart(cart)){
//             const err = new Error("Cart is not valid");
//             reject(err);
//         };
//         // logic for createOrder
//         const orderID = "12345";
//         if(orderID){
//             setTimeout(() => {
//                 resolve(orderID);
//             }, 3000);
//         };
//     });
//     return pr;
// };
// function validateCart(){
//     return true;
// }
// the createOrder api will create a new promise and will return the promise
// we will resolve the promise if the cart is validated
// 

// ------------------------------------------------------------------------------------------------------

// ASYNC 
// async is a keyword which is used before a function to make the function an async function
// async function returns a promise

// example 1 (making the async function return a promise)
// async function getData(){
//     return new Promise(function(resolve,reject){
//         resolve(123);
//     });
// };
// const prom = getData();

// example 2 (making the async function return something else)
// if we don't return a promise object, then the return value will be wrapped around a promise and then this promise will be returned
// async function getData(){
//     return 1;
// };
// const prom = getData();
// console.log(prom);

// example 3 (getting the data out of the promise)
// async function getData(){
//     return new Promise(function(resolve,reject){
//         resolve(123);
//     });
// };
// const prom = getData();
// prom.then(function(val){
//     console.log(val);
// })

// the async and await combo are used to handle promises

// example 4 (handling promises without async await)
// const prom = new Promise(function(resolve,reject){
//     resolve("Promise resolved");
// });
// function getData(){
//     prom.then(function(val){
//         console.log(val);
//     });
// };
// getData();

// example 5 (using await with async)
// const prom = new Promise(function(resolve,reject){
//     resolve("promise resolved");
// });
// async function getData(){
//     const val = await prom;
//     console.log(val);
// };
// getData();

// await 
// can only be used inside an async function

// example 6 (if the promise get's resolved after some time) (case without async/await syntax) 
// const prom = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("promise resolved");
//     }, 2000);
// });
// function getData(){
//     prom.then(function(val){
//         console.log(val);
//     });
//     console.log("inside getData, after then function");
// };
// getData();

// example 7 (if the promise get's resolved after some time) (case without async/await syntax)
// const prom = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("promise resolved");
//     }, 5000);
// });
// async function getData(){
//     const val = await prom;
//     console.log("inside getData, after then function");
// };
// getData();

// the difference
// in case of handling promise without async await, javascript won't wait for the promise to get resolved, and will print the "inside getData, after then function" before the promise get's resolved

// example 8.1 (handling multiple promise using async await) 
// const prom = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve(1234);
//     }, 5000);
// });
// async function getData(){
//     const val1 = await prom;
//     console.log("val1");
//     const val2 = await prom;
//     console.log("val2");
// };
// getData();

// example 8.2 (handling multiple promise using async await) 
// const prom1 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve(1234);
//     }, 5000);
// });
// const prom2 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve(1234);
//     }, 10000);
// });
// async function getData(){
//     const val1 = await prom1;
//     console.log("val1");
//     const val2 = await prom2;
//     console.log("val2");
// };
// getData();

// example 8.3 (handling multiple promise using async await) 
const prom1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve(1234);
    }, 10000);
});
const prom2 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve(1234);
    }, 5000);
});
async function getData(){
    const val1 = await prom1;
    console.log("val1");
    const val2 = await prom2;
    console.log("val2");
};
getData();

// DOUBTS
// why printing the prom object in example 1 prints a promise in pending state
// why printing the prom object in example 2 prints a promise in fulfilled state 

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
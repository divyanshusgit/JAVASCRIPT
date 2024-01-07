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
// 

// at 19:08 
// https://www.youtube.com/watch?v=8zKuNo4ay8E


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
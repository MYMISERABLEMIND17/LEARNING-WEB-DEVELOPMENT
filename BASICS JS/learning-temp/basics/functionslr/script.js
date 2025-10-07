// 🧠 What are Functions?
// Function Declarations
// Parameters vs Arguments
// Return Values
// 🧰 Function Expressions
// 🏹 Arrow Functions
// Default + Rest + Spread
// First-Class Functions
// 🧠 Higher-Order Functions (HOF)
// 🔐 Closures & Lexical Scope
// ⚡ IIFE – Immediately Invoked Function Expression
// 🚀 Hoisting: Declarations vs Expressions


// function 
// i want ki code likh dun but execute baaad mai karun 


// 1st way (// function declaration )
// function ("kuch bh naam likh lo "){
//     statement , command 
// }



// // 2nd way (// function expression )
// let name = function(){
//     kaam likh lo 
// }
// is case mai name ki jagha kuch bhi rakh do or woh function ka name ban jiyga 

// let myName = function(){
//     console.log(" parakram tomar ");
// }
// // now call the function 
// myName() ; 


// 3rd way (// fat  arrow function )
// let myName = () =>{
//      console.log("my name is  parakram tomar ");
// }
// myName() ; // call the functions 
// topic 1 finish  


// now parameters and arguments 
// function printName (name){
//     console.log ("my name is "+ name  )
// }
// giver your name and then call fuunctions 
// printName("parakram tomar ")
// printName (" sarthak mishra ")
// printName (" anshul mishra ")

// taking input 
// x = prompt("enter your name ") ;
//console.log(x);
// adding 2 numbers 
// create function 
// let addition = function(num1,num2){
//     let sum  = num1+num2 ; 
//     console.log("sum is = ", sum);
// }

// // first take the input from user}
// let num1 = parseInt(prompt("enter first number ")) ;
// let num2 = parseInt(prompt("enter second number ")) ;
// // call the function 
// addition(num1 , num2) ; 

//LETS  UNDERSTAND THE WHAT IS DEFAULT 
// SO IF I ADD 2 NUMBER BUT DID NOT INPUT THE VALUE IN THE VARIABLE , JS WILL NOT GIVE ME THE ERROR IINSTEAD IT WILL CONSIDER IT AS UNDEFINED .
// AND UNDEFINED + UNDEFINED = NaN(NOT A NUMBER )
// // EXAMPLE -:
// let add = function(v1 , v2){
//     let sum = v1+ v2 ;
//     console.log("sum is = ", sum);
// }
// call function 
//add() //==> sum is =  NaN
// v1 , v2 = undefined bocz humne value nhi di 

// ab agar hume NaN se baachna hai tohhum default value de sakte hain 
// now the function becomes 
// let sum = (v1 = 0 , v2 = 0) =>{
//     let sum = v1 + v2 ;
//     console.log("sum is = ", sum);
// }
// now if we call the function without any value it will give us 0
// sum() //==> sum is =  0


// let talk about rest and spread operator
// let fcn =( ...inp )=>{
//     console.log(...inp) ; 

// }
// fcn(1,2,3,4,5) ; // it will print 1 2 3 4 5
// parameter se bachne ke liye use karte hain 
// agar (...)function ke beech mai laga hai toh woh rest operator hoga 
// or agar (...)  arrays and objects  ke beech mai laga hai toh wo spread operator bann jiyga 
// spred array mai dekhinge 



// understanding return 
// iska matlab hota hai ki jahan se value aai hai udhar waps daal dena 
// let x = () =>{
//     return 12 ;
// }
// val = x() ; 
// console.log(val);
// value print nhi karwate but value humare paas aa chuki hai , or jab usk  a kaam hoga tab hum usko use kar linge 
// first class functions ==> hu m functions ko as a variable treat  kar sakte hain 
// function me(you ,add){
//     you()
//     add()
// }
// me(function(){
//     console.log("world is nice ");
// }
// , function(){
//     let a = 3
//     let b = 6
//     add = a+b ;
//     console.log(add);
// })


// higher order function 
//hof wo function hai jo yaa toh return kare ek function ya fir
//  accept kare ek function apne parameter main

// how to create a hof 
// 1st way 
// function me(you){
//     // call the function
//     you()
// }
// me(function(){
//     console.log("hey cutiee");    
// })

// 2nd way
// function me(){
//     return function you(){
//         console.log(" its 4:03 in the morning and i am working ");       
//     }
// }
// // calling the function
// me()()


// pure vs impure functions 
// pure function =>aaisa function jo bahar ki value naa badle 
// impure function =>aaisa function jo bahar ki value badal de  


// closures 
// ==> ek  function jo return kare ek aur function aur return hone wala function , humesha parent function ke kisi variable ko use kar raha hoga. 

// function me(){
//     let x = 10 ; 
//     return function(){
//         let y = 20
//         console.log( x+y);
        
//     }
// }
// call the function
// me()()
//  this concept is called closures 

// lexical scoping ==> basic concept hai padh lena .

//iife
// ==> abhi bas yaad rakh lo kaise likhte hain , uses baad mai likhinge 
// (function(){
//     console.log("hey ")
// })()


// hoisting 
// ==> kisi be function ko banne se pahale call kar lena 

// me()
// function me(){
//     console.log("hey , whats up  ")
// }
// this will work only in "function statement"

// me()
// me = function(){
//     console.log("hey , whats up  ")
// }
// // this will not work with function expression 
















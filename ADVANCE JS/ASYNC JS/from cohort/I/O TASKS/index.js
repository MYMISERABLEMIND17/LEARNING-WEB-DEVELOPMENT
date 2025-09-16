
// function sum(a ,b){
//     return a+b 

// }
// let ans = sum(3 , 5)
// console.log(ans);
// const { log } = require("console");
// prints 5 

// these are syncronous code 


//I/O TASKS 
/*
1} reading the file 
2} starting the clock 
3} http requests => basically request the qata from the api  
*/

// reading the file 

const fs = require("fs") ; /// library to read some content from the other files 
const contents = fs.readFileSync("a.txt" , "utf-8"); // calling the fumction from the library 
console.log(contents);


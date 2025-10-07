// var let const 

// a = 12 
// var a  ;   ==> declared karna  but not initialized
// let a ; 
// let b = 13;
// const c = 14;


// var a =  12 ==> 
// window mai declare karta hai { baad mai pata chalega }
//  function scoped hota hai 
// aap fir se declare kar sakte ho or error nhi aata 

// var a = 12;    
// var a = 12;  ==> this will not give error in the console;e 
// let a = 12;
// let a= 12 ; ==> this will give theb error in the console  , or ye aaachi baat hai 

//conclusion ==>  let >> var  let is better 

// {
//     //var a = 12; // ==> ye is block ke bahar bhi use ho sakta hai
//      // console.log(a)
// }
// {
//     // let a = 12;  // ye is block ke bahar use nahi ho sakta hai
//     // console.log(a); // 12
// }
// global scope
// function scope
// block scope


// reassignment
// var a = 12;
// a = 13; // reassign kar sakte ho


// Temporal Dead Zone (TDZ)
// utna area jitne mai js ko pata nahi hota ki variable declare hua hai
// but fir bhi hume value nehi

// console.log(a);
// let a = 12; 
// TDZ => variabble banne se pahale ka poora space , tdz hai uss variable ka 
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// maatlab pata hai but value nhi dega 

// var mai ye sab nhi hota hai
// let or const mai tye sab hota hai




// hoisting impact 
// so basically jab hum js mai variable ko declare  kARTE HAIN TOH WOH 2 PARTS MAI DEFINED HO JATA HAI  
// 1. declaration
// 2. initialization

// declaration , var a = notdefined    , ye wala part sabse upar chala jata hai , thats why agar var ko pahale access karte hain toh undefined milta hai 
// a = 12; // initialization




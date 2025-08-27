// scope is bassically aap apne created variabl and functions ko kahan tak use kar sakte ho. 

// function a(){
//     var b = 10;
//     console.log(b);
    
// }
// a()
; // yaha pe b is not defined aayega kyuki b sirf function a ke andar hi defined hai.

// so we have 3 scopes 
// 1. Global scope => poore code mai kahi par bhi use kar sakte ho 
// 2. Function scope => sirf function ke andar hi use kar sakte ho
// 3. Block scope => sirf {} ke andar use kar sakte ho 


// EXECUTION CONTEXT 
/// in js function dekthe he ek seperae box ban jata hai jise hum execution context bolte hai.
// har ek function ka apna ek execution context hota hai.
// jab bhi hum function ko call karte hai to wo apne execution context ke andar chala jata hai.


// lexical scope  v/s dynamic  scope 
//in js we follow lexical scope

// its like ki ek function ke  property uske andar  wala function  access  karr rha hai , jo ki actually kar bhi raha hai 

// function xyz(){
//     var p = 7 ; 
//     function ypq(){
//         console.log(p);
        
//     }
// }

// closures ==> ek function apne parent function ke variable ko access kar sakta hai apne andar wale function ke through 

// function outer(){
//     let a = 10 ;
//     return function (){
//         console.log(a);
        
//     };
// }
// let fnc = outer()
// fnc()
// yaha pe outer function ke andar ek variable a hai jise inner function access kar rha hai
// aur jab hum outer function ko call karte hai to wo apna execution context ke andar chala jata hai
// aur jab wo return hota hai to wo apna execution context khatam kar deta hai
// lekin inner function ke paas abhi bhi a variable ki access hai kyuki wo closure ke through usse access kar rha hai
// to jab hum inner function ko call karte hai to wo a variable ko access kar leta hai aur uska value print kar deta hai
// isse hum closure bolte hai

// reason
// or ye iss liye hota hai bcoz jaise he outer function apna execution context khatam karta hai to wo apne variables ko memory mai rakh deta hai
// taki inner function usse access kar sake
// to ye closure ka concept hai


 
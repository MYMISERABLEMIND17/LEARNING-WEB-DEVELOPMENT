// console.log("hel;lo world");
// objects 

// let obj = {
//     namee : "parakram" ,
//     kaksha : 10 
// };
//access
// obj.kaksha
// or
// obj['namee']


// let user = {
// name: "Amit",
// address: {
// city: "Delhi",
// pincode: 110001
//     }
// };
// to access this directly 
// let {pincode} = user.address ; 
// now picode itself is a variable 
// this is called destructuring


// loops on objects 

// let obj = {
//     namee : "parakram" ,
//     kaksha : 10,
//     city:{
//         pincode : 471001

//     }
// };

//obj[key] ==> this is how you access value of keys 
// for (let key in obj){
//     console.log(key,obj[key]);
// }

// console.log(Object.entries(obj))
// this gives arrays of arrays 

// spread operator ==> gives thje same value 
// let obj2 = {...obj};
// now we have same valve both obj = obj 2 , basicall hum copy kar lete haain full objwct ko 



// deep clone 
// actually jab hum object copy karte hain toh upar ke keys or main keys he copy hoti hain , if nested object udhar hai toh fir aapko deep clone krna padega 


// deep clone mai nested obj ka bhi reakl copy ho jata hai 
// let obj2 = JSON.parse(JSON.stringify(obj));



// optional chaining 
// ==> basically error nhi dena 
// obj.city.pincode
// this will run but hum koi aasi key accwss kar rahe hon jo exist he na karti ho 
//  to woh hume error degi , usi error ko handle karne ke liye hum use karte hain optional chaining 
// obj.cities.pincode ==>this will give us error 

// obj?.cities?.pincode ==> this will not give us error 

//==>ho to de dena , but error mat dena 
// let role = "manager" //==> thats how you add key vakue 
// let obj = {
//     namee : "parakram" ,
//     kaksha : 10,
//     city:{
//         pincode : 471001
//     },
//     // [role]:"parakram", ==> thats how you add key vakue 
// };




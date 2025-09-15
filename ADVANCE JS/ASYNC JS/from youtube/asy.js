// SYNC => 
// matlab cheezin line wise hogi 
// let sync = function(){
//     console.log("1");
//     console.log("2")
// }
// sync()


// ASYNC => 
//     console.log("before");
    
// let asy = function (){
//     setTimeout(function(){
//         console.log("hello world ")
//     }, 3000);
// }
// asy()
// console.log("after");

//  now this is how async works first the sync code work and if there is any delay then only async wait , sync , will run as it is . 


// fetch 
// axious 
// Promises
// setTimeout
// setinterval
// ye sab request ko bhejne kaaa kaam karte hain 


// then catch 
// callbacks 
// async await
// ye sab request ke answer ko catch karte hain 


// call backs 
// call back humesha ek function hota hai , ye sirf tab chalta hai jab async code ka completion ho jata hain 


// promises 
let x = new Promise(function(res , rej ){
    return res("idhar aao ")
})

x.then(res)
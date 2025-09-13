// SYNC => 
// matlab cheezin line wise hogi 
// let sync = function(){
//     console.log("1");
//     console.log("2")
// }
// sync()


// ASYNC => 
    console.log("before");
    
let asy = function (){
    setTimeout(function(){
        console.log("hello world ")
    }, 3000);
}
asy()
console.log("after");

//  now this is how async works 

// EVENT LOOP 


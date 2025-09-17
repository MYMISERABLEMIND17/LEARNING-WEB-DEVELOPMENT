console.log(" first ");

function random(){
    console.log(" middle ");
    
}
setTimeout( random, 1000)

console.log(" last "); 

let c = 0 ; 
for (let  i = 0 ;  i<10000000 ; i++){
    c= c + 1 ;
    console.log( c );
    // this is cpu intensive task 
}
console.log("hello world ");

/*
http://latentflip.com/loupe/
callstack = > the code which is currently executing , will come in call stack
web api => basically extra async the browser calls , basicallya side stack ; 
Callback Queue => it is basically the a place , jidhar next command jiska execution ho chuka hai , aaaa jati hai  fir jaise he cpu(call stack) , khali hota hai wo apne aap he callback queue se chheezin call stack me le aata hai
*/







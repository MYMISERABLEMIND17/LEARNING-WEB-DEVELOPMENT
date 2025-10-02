// console.log(" one ") ;
// console.log(" two ") ;
// console.log(" three ") ;

// setTimeout(() => {
//     console.log(" four ") ;
// }, 2000);
// console.log(" five ") ;


// callbacks 

// function multi(a , b ){
//     console.log (a * b) ;
// }
// function calculate (a, b , multicallback ){
//     multicallback(a , b )
// }
// calculate(3, 5 , multi)


// call back hell 

// function getData(dataId, nextData){
//     setTimeout(()=>{
//         console.log("heloo => " + dataId);
//         if(nextData){
//             nextData();
//         }
        
//     }, 3000); 
// }

// getData(1 , ()=>{
//     getData(2, ()=>{
//         getData(3 ,()=>{
//             getData(4)
//         })
//     })
// })// this is how callback works ,, this is called callback hell 




// promises 
// syntax =>  let promise = new Promise((resolve , reject )=>{.......
// })

// let promise = new Promise((resolve ,reject) =>{
//     console.log(" hi i am a promise");
//     reject("error")
// })

// working of promises 
// function getData(dataId, nextData){
    
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//         console.log("heloo =>" + dataId);
//         resolve("success")
//         if(nextData){
//             nextData();
//         }
//         }, 7000);    

//     });
// }


// .then and .catch




const fs = require('fs');

// fs.writeFile("trial.txt" , "helooo this is a trial",function(err){
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log("complete");
        
//     }
// })


// fs.appendFile("trial.txt" ," this is the append part " ,function(err){
// })


// reaname the file 
fs.rename("trial.txt" ,"modifiedtrial.txt" , function(err){
})

//unlink 
fs.unlink("modifiedtrial.txt" , function(err){
    if(err) console.log(err);
    else console.log("removed ");
    
})
// this thing removed the file 
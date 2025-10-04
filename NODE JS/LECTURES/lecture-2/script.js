const fs = require('fs');

fs.writeFile("trial.txt" , "helooo this is a trial",function(err){
    if (err){
        console.log(err);
    }
    else{
        console.log("complete");
        
    }
})
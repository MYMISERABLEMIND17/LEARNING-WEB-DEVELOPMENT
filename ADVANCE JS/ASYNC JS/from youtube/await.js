function  getData(dataId){
    return new Promise((resolve , reject )=>{
        setTimeout(()=>{
        console.log("data", dataId);
        resolve("task complete") ;
    }, 2000)
    })
}

async function allData(){
    await getData(1) ;
    await getData(2) ; 
    await getData(3) ;
    await getData(4) ;
}
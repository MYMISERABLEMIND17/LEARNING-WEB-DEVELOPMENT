const http = require("node:http")

const server = http.createServer((req , res)=>{
  if(req.url === "/home"){
    res.end("this is home page")
  }
  else{
    res.end("this is the normal page")
  }
})

server.listen(3000)
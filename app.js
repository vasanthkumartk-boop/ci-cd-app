const http = require('http');
http.createServer((req,res)=>{
  res.end("New Version Deployed 🚀");
}).listen(3000);

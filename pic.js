var fs = require('fs');

var http= require('http');

http.createServer(function(req,res){
	
	res.writeHead(200,{'Content-type':'image/jpg'});
	fs.createReadStream('./image.jpg').pipe(res);
	
}).listen(3000);

console.log("listen :3000");
var http = require('http');
var fs = require('fs');

function onRequest(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	fs.readFile('./index.html'), null, function(error, data){
		if (error){
			response.writeHead(404);
			response.write('Web no encontrada');
		}else {
			response.write(data);
		}
		response.end();
	}
}
htt.createServer(onRequest).listen(8000);

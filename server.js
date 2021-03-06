var http = require('http');
http.createServer(function (req, res) {

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000, // 30 days
    /** add other headers as per requirement */
  };


  //res.writeHead(200, {'Content-Type': 'text/plain'});
  //res.write('Hello World!');
  res.writeHead(405, headers);
  res.end();

  console.log(req.url);
}).listen(80);

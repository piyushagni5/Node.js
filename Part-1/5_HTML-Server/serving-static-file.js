var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req,res){
  if(req.url === "/"){
    fs.readFile("./public/index.html", "UTF-8", function(err, html){
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(html);
    });

  } else if(req.url.match("\.css$")){
      var cssPath = path.join(__dirname, 'public', req.url);
      //console.log(cssPath);
      var fileStream = fs.createReadStream(cssPath, "UTF-8");
      res.writeHead(200, {"Content-Type": "text/css"});
      fileStream.pipe(res);
  } else if (req.url.match("\.jpg$")){
      var imagePath = path.join(__dirname, 'public', req.url);
      //console.log(cssPath);
      var fileStream = fs.createReadStream(imagePath);
      res.writeHead(200, {"Content-Type": "image/jpg"});
      fileStream.pipe(res);
  } else{
      res.writeHead(404, {"Content-Type": "text/html"});
      res.end("No Page Found");
  }


 //console.log(req.url);      // what are all files call by when you are calling your page

// output-->   /,  /style.css, /iitg.jpg, /favicon.ico, /style.css, /favicon.ico

}).listen(8080);

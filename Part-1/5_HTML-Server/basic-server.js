// A BASIC Node server

const http = require("http");

//req--> request, res--> response

const server = http.createServer(function(req, res) {
  res.setHeader("Content-type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  // "*" --> requester can come to request from any browser, we will allow to go to all places....

  res.writeHead(200); //status code HTTP 200 / OK

  let dataObj = { id: 123, name: "Bob", email: "bob@work.org" };

  let data = JSON.stringify(dataObj);       // data must be a string

  res.end(data);                  // sending this data to the client ('browser')
});

// 1234 is a port no. given
server.listen(1234, function() {
  console.log("Listening on port 1234");
});

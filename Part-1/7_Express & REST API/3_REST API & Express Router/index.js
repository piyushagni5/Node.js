const express=require('express');
const http=require('http');
const morgan=require('morgan');
const bodyParser = require('body-parser');

// used for express Router otherwise comment it below line
const dishRouter = require('./routes/dishRouter');

const hostname='localhost';
const port=3000;

const app=express();
app.use(morgan('dev'));
app.use(bodyParser.json());

// used for dishRouter, otherwise comment This
app.use('/dishes', dishRouter);  // it means that any request coming for dishes endpoint will be sent bank to dishRouter.js

/* comment below line when using for  express route

app.get('/dishes',(req,res,next)=>{
	res.end('Will send details of the dishes to you');
});

app.post('/dishes',(req,res,next)=>{
	res.end('Will add the dish: '+ req.body.name + 'with details: ' + req.body.description);
});

app.put('/dishes',(req,res,next)=>{
  req.statusCode = 403;
	res.end('Will update the dish:' +req.body.name
	          +'with details: '+ req.body.description);
});

app.delete('/dishes',(req,res,next)=>{
	res.end('Deleting all the dishes!');
});

app.get('/dishes/:dishId',(req,res,next)=>{
	res.end('Will send details of the dish: '+ req.params.dishId
				+ 'to you');
});

app.post('/dishes/:dishId',(req,res,next)=>{
	res.statusCode=403;
	res.end('POST operation not supported on /dishes/'+req.params.dishId);
});

app.put('/dishes/:dishId',(req,res,next)=>{
	res.write('Updating the dish: '+ req.params.dishId);
	res.end('Will update the dish:' +req.body.name
	          +'with details: '+ req.body.description);
});

app.delete('/dishes/:dishId',(req,res,next)=>{
	res.end('Deleting dish: '+ req.params.dishId);
});*/

app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=>{

	res.statusCode=200;
	res.setHeader('Content-Type','text/html');
	res.end('<html><body><h1>This is an express server.</h1></body></html>');


});

const server=http.createServer(app);

server.listen(port, hostname, ()=>{

console.log(`Server running at http://${hostname}:${port}/`);

});

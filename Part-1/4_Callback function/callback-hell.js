var fs = require("fs");
var file = "input.txt";

function ReadFile(err, data){
    if(err) throw err;
    console.log(data);
}

function status(err, statt){
    if(err) throw err;
    if(statt.isFile()){
      fs.readFile(file, "utf8", ReadFile);
    }
}

function fileExists(exists){
    if(exists)
      fs.stat(file, status);   // fs. stat(): It holds the path of the file or directory that has to be checked. It can be a String, Buffer or URL. 
}

fs.exists(file, fileExists);

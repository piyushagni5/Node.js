var fs=require('fs');
console.log("Program started");

var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("Program Endeed");

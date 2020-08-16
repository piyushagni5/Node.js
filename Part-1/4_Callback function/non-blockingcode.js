var fs=require('fs');
console.log("Program started");

fs.readFile('input.txt', function (err, data) {
  if (err)
    return console.error(err);

  console.log(data.toString());

});

console.log("Program Endeed");

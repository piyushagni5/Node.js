var rect = require('./rectangle');

//var rect = {
    //area: (x,y) => (x*y),
    //perimeter: (x,y) => (2*(x+y))
//};

function solvereact(l,b) {
  if (l <= 0 || b <=0) {
    console.log("rectangle dimension must be positive");
  }
  else{
    console.log("the area of rectangle is " + rect.area(l,b));
    console.log("the perimeter of rectangle is " + rect.perimeter(l,b));
  }
}

solvereact(2,4);
solvereact(5,6);

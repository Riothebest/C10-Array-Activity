  var weight;
  var sum, mean;
function setup() 
{
  createCanvas(400,400);
weight = [60,40,80,65,90,100];
console.log("Weight: "+weight);

sum = weight[0]+weight[1]+weight[2]+weight[3]+weight[4]+weight[5];
console.log("Sum: "+sum);

mean = sum/weight[length];
console.log("Average:"+mean);
}

function draw() 
{
background(51);
fill("red");
textSize(30);
text("Press CTRL+ shift+ J",20,190);
}


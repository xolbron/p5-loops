var y = 0;
var pg;


function setup() {
    createCanvas(710,400);
    stroke(255);
    frameRate(30);
    background(0);
    pg = createGraphics(400, 250);
    for(var x = 0; x < width; x = x + 35){
      ellipse(x, 200, 25, 30);
  }
}
function draw(){
  strokeWeight(4);
  stroke(255);
  frameRate(10);
  var x = 0;
  for(var x = 0; x < width; x = x + 35){
      ellipse(x, 200, 25, random(400));
  }
  fill(0, 59, 155);
  y = y - 5; 
  if (y < 0) { 
    y = height; 
  } 
  line(0, y, width, y);
  if(y == 0){
    background(random(255));
    
  }
}
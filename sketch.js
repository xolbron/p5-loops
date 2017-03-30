var y = 0;
var pg;


function setup() {
    createCanvas(1352,610);
    stroke(255);
    frameRate(30);
    background(0);
    pg = createGraphics(400, 250);
    for(var x = 0; x < width; x = x + 35){
      ellipse(x, 500, 25, 3, random(255));
  }
}
function draw(){
  strokeWeight(4);
  stroke(255);
  frameRate(198);
  var x = 0;
  for(var x = 0; x < width; x = x + 35){
      fill(random(255), random(255), random(255));
      ellipse(x, 300, 25, random(550));
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
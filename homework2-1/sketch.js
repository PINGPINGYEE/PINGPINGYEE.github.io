let x1 = 0, y = 200, d = 100;

function setup(){
  createCanvas(700, 400);
  frameRate(60);
}

function draw(){
  background(0);
  stroke(255);
  strokeWeight(1);
  fill(255);
  textSize(30);
  text('Distance : ' + mouseX, 0, 25);
  text('Color : ' + (mouseX, 20, mouseY), 0, 60);

  stroke(255, 255, 0);
  strokeWeight(5);
  line(0, y + d/2, 700, y + d/2);

  fill(mouseX, 20, mouseY);
  ellipse(mouseX - 50, y, d, d);
  ellipse(mouseX + 50, y, d, d);

  noFill();
  triangle(mouseX - 50, y, mouseX + 50, y, mouseX, y - d);
}
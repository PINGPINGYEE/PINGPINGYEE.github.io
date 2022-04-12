let x1 = 0, x2 = 100, y = 200, c = 0, d = 100;
let theta = 0.0;

function setup(){
  createCanvas(700, 400);
  frameRate(60);
}

function draw(){
  background(0);

  let x1 = map(sin(theta), -1, 1, 50, 550);
  let x2 = map(sin(theta), -1, 1, 150, 650);
  let c = map(cos(theta), -1, 1, 0, 255);
  stroke(255);
  strokeWeight(1);
  fill(255);
  textSize(30);
  text('Distance : ' + x1 + d/2, 0, 25);
  text('Color' + c, 0, 60);

  stroke(255, 255, 0);
  strokeWeight(5);
  line(0, y + d/2, 700, y + d/2);

  fill(c, 0, 0);
  ellipse(x1, y, d, d);
  ellipse(x2, y, d, d);

  noFill();
  triangle(x1, y, x1 + d/2, y - d, x2, y);

  theta += 0.1;
}
let x = 0, Xvelocity = 1, y = 0, Yvelocity = 1;
let z = 0;
function setup() {
  createCanvas(300, 400);
  background(0);
}

function draw() {
  print(Yvelocity);
  ellipse(x,y, 30, 30);
  stroke(255);
  x += Xvelocity;
  y += Yvelocity;
  if (x < 0 || x > width)
  {
    fill(255, 0, 0);
    Xvelocity *= -1;
  }
  if (y < 0 || y > height)
  {
    fill(0, 255, 0);
    Yvelocity *= -1
  }
}
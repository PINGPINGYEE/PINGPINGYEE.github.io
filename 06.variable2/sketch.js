// //Global variable
// let x = 0;

// function setup() {
//   createCanvas(300, 300);
//   background(200);

//   // print(y); : draw의 local variable이어서 error
// }

// function draw() {
//   // local variable

//   let y = 150;
//   let d = 30;
//   ellipse(x, y, d, d)
//   x++;
//   print(x);
// }


// let x = 30, y = 30;
// let velocity_x = 1, velocity_y = 1;
// let accel_x = 0.2, accel_y = 0.2;
// let friction = 0.99;

// function setup() {
//   createCanvas(400, 400);
//   frameRate(15); // try to change (frame 속도 조절)
// }

// function draw() {
//   background(200);
//   ellipse(x, y, 30, 30);
  
//   //velocity_x += accel_x;
//   //velocity_y += accel_y;

//   velocity_x *= friction
//   velocity_y *= friction

//   x += velocity_x;
//   y += velocity_y;

//   textSize(15);
//   text(frameCount + ' : ' + frameRate(), 10, 30);
//   //frameCount => 몇번째 frame인지
// }

// let x = 150, y = 150;
// let friction = 0.99;
// let theta = 0.0;

// function setup() {
//   createCanvas(400, 400);
//   frameRate(60);
// }

// function draw() {
//   background(200);
//   let y = map(sin(theta), -1, 1, 0, height); //map(value, real min, real max, mapped min, mapped max)
//   ellipse(x, y, 30, 30);
//   theta += 0.1;
// }

// let x = 200, y = 200;
// let d = 30;
// let theta = 0.0;
// function setup() {
//   createCanvas(400, 400);
//   frameRate(60);
// }

// function draw() {
//   background(200);
//   let d = map(sin(theta), -1, 1, 0, height);
//   ellipse(x, y, d, d);
//   theta += 0.1;
// }

// let x = 150, y = 150;
// let d = 30;
// let degree = 0.0;
// function setup() {
//   createCanvas(400, 400);
//   frameRate(60);
// }

// function draw() {
//   background(200);
//   let theta = radians(degree); // radian은 6도씩
//   // let y = height/2 + height/2 * sin(theta)
//   let y = map(sin(theta), -1, 1, 0, height);
//   line(x, y - d, x, y + d);
//   ellipse(x, y, d, d);
//   degree += 6;
// }

// function setup() {
//     createCanvas(500, 500);
// }

// function draw() {
//     background(0);
//     strokeWeight(random(20));
//     stroke(random(255), random(255), random(255));
//     //print(random(255));
//     point(mouseX, mouseY); // The system variable
//     ellipse(mouseX, mouseY, 150, 150)
//     //print(mouseX, mouseY);
// }

// function setup() {
//   createCanvas(500, 500);
//   background(0);
// }

// function draw() {
//     stroke(255, 255, 0);
//     line(pmouseX, pmouseY, mouseX, mouseY);
// }

let theta = 0.0, r = 150.0;
function setup() {
    createCanvas(300, 300);
    background(0);
}
  
function draw() {
    let x = width/2 + r * cos (theta);
    let y = height/2 + r * sin (theta);
    ellipse(x, y, 30, 30);
    // ellipse(x, y, 5, 30);
    theta += 0.05;
    r -= 0.1;
    // r -= 0.08
}
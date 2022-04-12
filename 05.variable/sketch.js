// let x = 75;
// let y = 50;
// let d1 = 80;
// let d2 = 80;
// function setup() {
//   createCanvas(300, 300);
//   background(220);
//   ellipse(x, y, d1, d2); // Left
//   x = x + 100;
//   ellipse(x, y, d1, d2); // Middle
//   x = x + 100;
//   ellipse(x, y, d1, d2); // Right
// }

// function draw() {
  
// }

// let x1 = 50; // line x1
// let x2 = 250; // line x2
// let y = 30; // height of line

// function setup() {
//     createCanvas(300, 300);
//   }

//   function draw() {
//       background(200); // background로 잔상이 안 남음
//       line(x1, y, x2, y);
//       line(x1, y*2, x2, y*2);
//       line(x1, y*3, x2, y*3);
//       line(x1, y*4, x2, y*4);
//       print(y);
//       y = y + 5;
//       print(y);
//       y %= 300; // y = y %(나머지) 300;
//       console.log();
//       print("/n"+y)
//     }

// let x1 = 150;
// let x2 = 150;
// let d = 10;

// function setup() {
//   createCanvas(300, 300);
// }

// function draw() {
//     background(200);
//     noFill();
//     ellipse(x1,x2,d);
//     x1 = x1 + 1
//     x2 = x2 + 1
//     d = d + 5
//     x1 %= 300
//     print(x1)
//     d %= 300
//     x2 %= 300
//   }

// let x = 10;
// let y = 10;
// let d = 10;
// let c = 0;
// let r = 0, g = 0, b = 0;
// let change = 2

// // let my_hp;(옛날 트렌드)
// // let numBAD;(요즘 트렌드)

// function setup() {
//   createCanvas(300, 300);
// }

// function draw() {
//     background(200);  
//     fill(c, g, b);
//     ellipse(x, y, d, d);
//     x++; // x+1
//     y++;
//     d++;
//     r++;
//     g++;
//     b++;
//     c = c + change;
//     x %= 300; // x = x%300
//     // print(x1);
//     y %= 300; // y = y%300
//     d %= 300;
//     c %= 255;
//     g %= 255;
//     b %= 255;
//   }

let x = 300, y = 200, c = 0, d = 100;

function setup() {
  createCanvas(700, 400);
}

function draw() {
    background(200);

    stroke(255);
    fill(255);
    textSize(30);
    text("distance : " + x, 100, 50)
    text("color : " + c, 400, 50)

    push();
    stroke(255, 255, 0);
    strokeWeight(5);
    line(0, y+d/2, 700, y+d/2);

    fill(c, 0, 0);
    ellipse(x, y, d, d);
    ellipse(x + d, y, d, d);

    noFill();
    triangle(x, y, x + d/2, y - d, x + d, y);

    pop();

    x++;
    x %= 700;
    c++;
    c %= 255;

    // print("distance \"영희야 안녕\" \n \"메롱\" \\ ");
    // print("C:\\Users\\user\\Desktop\\수업")

    

  }
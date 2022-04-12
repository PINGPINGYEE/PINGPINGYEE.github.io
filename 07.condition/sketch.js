// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {

//   print(mouseIsPressed);
//   if (mouseIsPressed == true)
//   {
//     fill(0);
//   }
//   else{
//     fill(255);
//   }
//   ellipse(mouseX, mouseY , 80, 80);
// }

// let x = 0, Xvelocity = 1, y = 0, Yvelocity = 1
// function setup() {
//   createCanvas(300, 400);
//   background(0);
// }

// function draw() {
//   print(Yvelocity)
//   ellipse(x,y, 30, 30);
//   x += Xvelocity;
//   y += Yvelocity;
//   if (x < 0 || x > width)
//   {
//     fill(255, 0, 0);
//     Xvelocity *= -1;
//   }
//   if (y < 0 || y > height)
//   {
//     fill(0, 255, 0);
//     Yvelocity *= -1
//   }
// }

// let x = 0, velocity = 1;
// function setup() {
//   createCanvas(300, 300);
// }

// function draw() {
//   background(0);
//   stroke(255);
//   line(x, 0, x, height);
//   x += velocity;
//   if (x < 0 || x > width)
//   {
//     velocity *= -1
//   }
//   if (x < 100 || x > 200)
//   {
//     ellipse(width/2, height/2, 100, 100);
//   }
// }

// let x, y, d, r = 50.0, tx = 0.0, ty = 0.5;
// function setup() {
//   createCanvas(300, 300);
// }

// function draw() {
//   background(0);
//   x = mouseX
//   y = mouseY
//   // x = noise(tx) * width;
//   // y = noise(ty) * height;
//   // print(noise(tx) * width, noise(ty) * height)
//   d = dist(width/2, height/2, x, y);
//   if(d < r)
//   {
//     fill(random(255), random(255), random(255), 200);
//   }
//   ellipse(x, y, r, r);
//   ellipse(width/2, height/2, r, r);
//   // tx += 0.01;
//   // ty += 0.01;
// }

// let interval = 0, current_time = 0, previous_time = 0;
// function setup() {
//   createCanvas(300, 300);
// }

// function draw() {
//   background(0);
//   // print(millis());
//   current_time = millis();
//   interval = current_time - previous_time;
//   if (interval > 1000)
//   {
//     previous_time = millis();
//     fill(random(255), random(255), random(255));
//   }
//   ellipse(width/2, height/2, 200, 200);
// }

// let x = 150;
// function setup() {
//   createCanvas(300, 300);
// }

// function draw() {
//   background(0);
//   stroke(255);
//   line(mouseX, 0, mouseX, height);
//   ellipse(x, height/2, 50, 50);
//   if(mouseX > x)
//   {
//     x++;
//   }
//   else
//   {
//     x--;
//   }
// }

// function setup() {
//   createCanvas(300, 300);
// }

// function draw() {
//   background(0);
//   fill(255, 255, 0);
//   if (mouseY < height/3)
//   {
//     rect(0, 0, width, height/3);
//   }
//   else if (mouseY < height * 2/3)
//   {
//     rect(0, height/3, width, height/3);
//   }
//   else
//   {
//     rect(0, height * 2/3, width, height/3);
//   }
// }

// function setup() {
//   createCanvas(300, 300);
// }

// function draw() {
//   background(0);
//   if (mouseX < width/2 && mouseY < height/2)
//   {
//     fill(255, 0, 0);
//     rect(0, 0, width/2, height/2);
//   }
//   else if (mouseX > width/2 && mouseY < height/2)
//   {
//     fill(255, 255, 0);
//     rect(width/2, 0, width, height/2);
//   }
//   else if (mouseX < width/2 && mouseY > height/2)
//   {
//     fill(0, 255, 0);
//     rect(0, height/2, width/2, height);
//   }
//   else
//   {
//     fill(0, 0, 255);
//     rect(width/2, height/2, width, height);
//   }
// }

// let checkPrev = 0;
// let check = 0;

// function setup() {
//   createCanvas(300, 300);
//   fill(255, 255, 0);
// }

// function draw() {
//   background(0);
//   display(mouseX, mouseY);
//   print(mul(6,9));
// }

// function mul(x, y)
// {
//   return x * y; // 출력을 하고싶을때
// }

// function display(x, y)
// {
//   if (x < width/2 && y < height/2)
//   {
//     rect(0, 0, width/2, height/2);
//     check = 1;
//   }
//   else if (x > width/2 && y < height/2)
//   {
//     rect(width/2, 0, width, height/2);
//     check = 2;
//   }
//   else if (x < width/2 && y > height/2)
//   {
//     rect(0, height/2, width/2, height);
//     check = 3;
//   }
//   else
//   {
//     rect(width/2, height/2, width, height);
//     check = 4;
//   }

//   if (checkPrev != check)
//   {
//     print("yes");
//     fill(random(255), random(255), random(255));
//     checkPrev = check;
//   }
// }

// function setup() {
//   createCanvas(300, 300);
// }

// function draw() {
//   background(0);
//   if (mouseIsPressed)
//   {
//     if(mouseButton === LEFT)
//     {
//       fill(255, 0, 0);
//     }
//     else if(mouseButton === RIGHT)
//     {
//       fill(0, 255, 0)
//     }
//   }
//   else
//   {
//     fill(0, 0, 255);
//   }
//   ellipse(width/2, height/2, 200, 200);
// }

// function setup() {
//     createCanvas(300, 300);
//     // background(0);
//     // ellipse(width/2, height/2, 200, 200);
// }

// function draw() {
//     background(0);
//     if (keyIsPressed && ((key === 'a') || (key === 'A')))
//     //key를 비교할 시에는 문자열로 사용
//     {
//         fill(255, 0, 0);
//     }
//     else if (keyIsPressed && ((key === 'd') || (key === 'D')))
//     {
//         fill(0, 255, 0);
//     }
//     else
//     {
//         fill(0, 0, 255);
//     }
//     ellipse(width/2, height/2, 200, 200);
// }

// function mouseReleased()
// {
//     background(0);
// }

// let degree = 90;
// function setup() {
//     createCanvas(300, 300);
// }

// function draw() {
//     background(0);
//     if (keyIsPressed)
//     {
//         if ((key >= '0') && (key <= '9'))
//         {
//             degree = map(key, '0', '9', 0, 360);
//         }
//     }
//     arc(width/2, height/2, 200, 200, 0, radians(degree));
// }

// let x = 150, y = 150;
// function setup() {
//     createCanvas(300, 300)
// }

// function draw() {
//     background(0);
//     if (keyIsPressed)
//     {
//         if (key === 'a' || keyCode == LEFT_ARROW)
//         {
//             x = x - 5;
//         }
//         else if (key === 'd' || keyCode == RIGHT_ARROW)
//         {
//             x = x + 5;
//         }
//         else if (key === 'w' || keyCode == UP_ARROW)
//         {
//             y = y - 5;
//         }
//         else if (key === 's' || keyCode == DOWN_ARROW)
//         {
//             y = y + 5;
//         }
//     }
//     ellipse(x, y, 100, 100);
// }

// function setup() {
//     createCanvas(300, 300);
//     textSize(100);
//     textAlign(CENTER);
// }

// function draw() {
//     background(0);
//     fill(255);
//     // if (key === 'a')
//     // {
//     //     text('a', width/2, height/2);
//     // }
//     // else if (key === 'b')
//     // {
//     //     text('b', width/2, height/2);
//     // }
//     // else if (key === 'c')
//     // {
//     //     text('c', width/2, height/2);
//     // }
//     // else {
//     //     text('None', width/2, height/2);
//     // }

//     switch(key)
//     {
//         case 'a' :
//             // text('a', width/2, height/2);
//             // break;
//         case 'b' :
//             text('b', width/2, height/2);
//             break;
//         case 'c' :
//             text('c', width/2, height/2);
//             break;
//         default :
//             text('None', width/2, height/2);
//             break;
//     }
// }

let x = 20, y = 80, w = 460, h = 50;
let size = 100
let slider = 20;
function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0);
    if(mouseIsPressed)
    {
        if ((x <= mouseX && mouseX <= x + w) && (y <= mouseY && mouseY <= y + h))
        {
            slider = mouseX;
            size = map(slider, x, x+w, 100, w);
        }
    }
    fill(0, 0, 255);
    ellipse(width/2, height/2, size, size);
    fill(255);
    textSize(30);
    textAlign(CENTER);
    text('Size : ' + int(size), width/2, 50);
    rect(x, y, w, h);
    fill(255, 0, 0);
    rect(slider, y, 10, h);
}


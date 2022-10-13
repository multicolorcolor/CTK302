var x = 0;
let f1;
function setup() {
  createCanvas(500, 500);
  f1 = loadFont("typewriter.ttf");
}

function draw() {
  background("gray");
  fill("black")
  textSize(128);
  textFont(f1, 24);
text("suoq buollun serii/no war", x, 100);
x += 2;
if (x > width) {
  x = -300;
}
}

var x = 0;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("gray");
  fill("black")
  textSize(128);
text("Are you here?", x, 100);
x += 2;
if (x > width) {
  x = -650;
}
}

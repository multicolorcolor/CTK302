let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
background(220);

switch (state) {
  case 0:
  background("red");
  text("case 0", 100, 100);
  
  break;

  case 1:
  background("green");
  text("case 1", 100, 100);
  break;

  case 2:
  background("blue");
  text("case 2", 100, 100);
  break;
}

}

function mouseReleased(){
  state++;
  if (state > 2) {
    state = 0;
  }
}

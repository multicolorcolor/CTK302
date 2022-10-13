let x = 0;
function setup() {
  createCanvas(700, 500);
}

function draw() {
  background("gray");

  push();
  translate(x, 0);
  avatar();
  x += 5;
  if (x > width){
    x = -500;
  }
  pop();

}

function avatar(){
  fill(255);
  quad(528, 52, 540, 56, 545, 84, 528, 91);
  noFill();
  stroke(255);
  strokeWeight(6);
  bezier(518, 48, 533, 56, 533, 78, 523, 95);
  bezier(518, 48, 553, 48, 553, 90, 523, 95);
  noStroke();
}
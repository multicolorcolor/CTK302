let x = 0;
let suorij;

function preload(){
  suorij = new Sprite(0, 250, 50, 250);

  suorij.addAnimation("walk", "suorijright.png", {size: [250, 250], frames: 12});
}
function setup() {
  createCanvas(700, 500);
}

function draw() {
  background("gray");

  //push();
  //translate(x, 0);
 // avatar();
 // x += 5;
 // if (x > width){
 //   x = -500;
 // }
 // pop();
  suorij.vel.x = 1;
  if (suorij.x > width){
    suorij.x = 0;
  }
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
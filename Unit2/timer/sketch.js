let timer = 0 ;
let state = 0;
let suorij;
let m1, m2, m3, m4, m5;

function preload(){
  suorij = new Sprite(250, 250, 50, 250);

  suorij.addAnimation("walk", "suorijfront.png", {size: [250, 250], frames: 12});
  m1 = loadImage("07.png");
  m2 = loadImage("01.png");
  m3 = loadImage("03.png");
}
function setup() {
  createCanvas(500, 500);

  

}

function draw() {
  background(220);
  switch (state){

    case 0:
    image(m1, 0, 0);
    timer++ ;
  if (timer > 3*60) {
    timer = 0;
    state = 1;
    
  }
    break;
  

  case 1:
    background("green");
    image(m2, 0, 0);
    timer++ ;
  if (timer > 3*60) {
    timer = 0;
    state = 2;
    
  }
    break;

    case 2:
      image(m3, 0, 0);
      timer++ ;
    if (timer > 3*60) {
      timer = 0;
      state = 0;
      
    }
      break;
  }
  
  }

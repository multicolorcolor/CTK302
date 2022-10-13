let timer = 0 ;
let state = 0;

function setup() {
  createCanvas(500, 500);

  

}

function draw() {
  background(220);
  switch (state){

    case 0:
    background("red");
    timer++ ;
  if (timer > 3*60) {
    timer = 0;
    state = 1;
    
  }
    break;
  

  case 1:
    background("green");
    timer++ ;
  if (timer > 3*60) {
    timer = 0;
    state = 0;
    
  }
    break;
  }
  
  }

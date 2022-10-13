let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
background(220);

switch (state) {
  case 0:
  background("red");
  for (let j = 0; j <= height; j += 20){
    for (let i = 0; i <= width; i += 25){
      textSize(21);
      text(":(", i, j, 20, 20);

    }
    
  }
  
  break;

  case 1:
  background("green");
  for (let j = 0; j <= height; j += 5){
    for (let i = 0; i <= width; i += 25){
      textSize(21);
      text(":(", i, j, 20, 20);

    }
    
  }
  break;

  case 2:

  background("blue");
  for (let j = 0; j <= height; j += 15){
    for (let i = 0; i <= width; i += 10){
      textSize(21);
      text(":(", i, j, 20, 20);

    }
    
  }
  break;
  case 3:
    background("orange");
    for (let j = 0; j <= height; j += 25){
      for (let i = 0; i <= width; i += 15){
        textSize(21);
        text(":(", i, j, 20, 20);
  
      }
      
    }
    break;
  
    case 4:
      background("yellow");
      for (let j = 0; j <= height; j += 25){
        for (let i = 0; i <= width; i += 5){
          textSize(21);
          text(":(", i, j, 20, 20);
    
        }
        
      }
      break;
    
}

}

function mouseReleased(){
  state++;
  if (state > 4) {
    state = 0;
  }
}

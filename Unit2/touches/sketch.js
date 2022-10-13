let numberOfTouches ;
let i1, i2, i3, i4;

function setup() {
  createCanvas(400, 400);
  //rectMode(CENTER);
}

function preload(){
  i1 = loadImage("01.jpg");
  i2 = loadImage("02.jpg");
  i3 = loadImage("03.jpg");
  i4 = loadImage("04.jpg");
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
    background("white");
    textAlign(CENTER);
    textStyle(BOLD);
      text("5PM", 200, 50) ; 
      image(i1, 125, 100, 150, 250);
      break ;
      
      case 1: 
      background("white");
      textAlign(CENTER);
      textStyle(BOLD);
       text("12AM", 200, 50) ; 
       image(i2, 125, 100, 150, 250);
      break ;
      
      case 2:
        background("white");
        textAlign(CENTER);
        textStyle(BOLD);
      text("4AM", 200, 50) ; 
      image(i3, 125, 100, 150, 250);
      break ;
      
      case 3:
        background("white");
        textAlign(CENTER);
        textStyle(BOLD);
     text("TAKE A BREAK", 200, 50) ; 
     image(i4, 125, 100, 150, 250);
      break ;
    
      
  }
  
}
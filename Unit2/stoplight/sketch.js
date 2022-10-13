let state = 0;
let x = 0;
let v = 3;
let timer = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {

  background(100);
  noStroke();
  //rect(x, 100, 100, 100);
  fill("black");
  rect(300, 0, 200, 600);
  rect(x, 650, 150, 75);
  x = x+v;
  if (x>width){
    x = 0;
  }
  //timer++;
  
  switch (state) {
    

    case 0:
      text("0", 100, 100);
      fill("red");
      circle(400, 100, 100);
      //x=0;
      v = 0;
      if(x>400){
        v=10;
      }
      break;
      

    case 1:
      text("1", 100, 100);
      fill("orange")
      circle(400, 300, 100);
      v=0.5;
      if(x>400){
        v=10;
      }

      break;
      

    case 2:
      text("2", 100, 100);
      fill("green");
      circle(400, 500, 100);
      v=10;
      break;
     

  }
  timer++;
if (timer > 2*60){
  timer = 0;
  state++;
  if (state > 2) state = 0;
}
}



function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
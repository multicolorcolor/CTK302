let state = 0;

function setup() {
  createCanvas(500, 500);
  //background("black");
  
}

function draw() {

//rect(100, 100, 100, 100);
switch(state){
  case 0:
    background ("grey");
    rect(200, 100, 100, 100);
    fill("black");
    textAlign(CENTER);
    textStyle(BOLD);
    text("During my activist work I've made connections \nwith a lot of good people", width / 2, height / 2);
    break;
    
case 1:
   
   background ("white");
   rect(200, 100, 100, 100);
   textAlign(CENTER);
   textStyle(BOLD);
   text("I just wish the circumstances weren't so grave", width / 2, height / 2);
   break;
}
}

function mouseReleased(){

  if (mouseX > 200 && mouseX < 300 && mouseY > 100 && mouseY < 200){
    state++;
  if (state > 1) state = 0;
  }
  
}

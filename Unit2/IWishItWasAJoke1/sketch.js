let state = 0;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
}

function draw() {
switch(state){
  case 0:
    background ("grey");
    fill("black");
    textAlign(CENTER);
    textStyle(BOLD);
    text("russia commits ethnic cleansing \nof indigenous peoples of Siberia", width / 2, height / 2);
    break;
    
case 1:
   
   background ("white");
   textAlign(CENTER);
   textStyle(BOLD);
   text("They took 39.07% of all young Evenk men \nin Olenek Evenki national region. \nEvens population is 22 thousand people. \nThey've been taken from their reindeer \nherds by helicopters", width / 2, height / 2);
   break;
}
}

function mouseReleased(){
  state++;
  if (state > 1) state = 0;
}

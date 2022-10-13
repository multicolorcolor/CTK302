let state = 0;
let timer = 0;

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
    text("at the same time mobilization in central \neuropean cities of russia is about 0.3%", width / 2, height / 2);
    break;
    
case 1:
   
   background ("white");
   textAlign(CENTER);
   textStyle(BOLD);
   text("since february for 1 dead ethnically russian soldier there are \n350 dead Tuvans, 275 dead Buryat, 87 dead Dagestani people. \nWe're less than 1% of total population of russia", width / 2, height / 2);
   break;
}
timer++;
if (timer > 4*60){
  timer = 0;
  state++;
  if (state > 1){
    state = 0;
  }
}
}



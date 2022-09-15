let museum;

function preload(){
  museum = loadSound("assets/museum.mp3");
}
function setup() {
  createCanvas(500, 500);
  //TextAlign(CENTER);
  museum.play();
}

function draw() {
  background(0);
  fill(255);
  text("first attempt at making sound for unity project", 100, 100, 400, 400);

}

function mouseReleased(){
  if (museum.isPlaying()){
    museum.pause();
  }
  else{
    museum.play();
  }
}

function touchStarted(){
  getAudioContext().resume();
}

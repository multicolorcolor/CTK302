let state = 0;
let s1, s2, s3;

function preload(){
  s1 = loadSound("assets/allthat.mp3");
  s2 = loadSound("assets/dreams.mp3");
  s3 = loadSound("assets/league.mp3");}

function setup() {
  createCanvas(500, 500);
}

function draw() {
background(220);

switch (state) {

  case -1:
  text("please click to begin", 100, 100);
  break;

  case 0:
    if (!s1.isPlaying()){
      s1.play();
    }
  background("red");
  text("case 0", 100, 100);

  
  break;

  case 1:
    if (!s2.isPlaying()){
      s2.play();
    }
  background("green");
  text("case 1", 100, 100);
  break;

  case 2:
    if (!s3.isPlaying()){
      s3.play();
    }
  background("blue");
  text("case 2", 100, 100);
  break;
}

}

function mouseReleased(){
  s1.pause();
  s2.pause();
  s3.pause();
  state++;
  if (state > 2) {
    state = 0;
  }
}

function touchStarted(){
  getAudioContext().resume();
}


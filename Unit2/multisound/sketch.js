let state = 0;
let s1, s2, s3;
let i1, i2, i3;

function preload(){
  s1 = loadSound("assets/khomus.wav");
  s2 = loadSound("assets/ohuokhai.ogg");
  s3 = loadSound("assets/void.wav");
  i1 = loadImage("assets/khomus.jpg");
  i2 = loadImage("assets/ysyakh.jpg");
  i3 = loadImage("assets/existential.jpg");
}
  

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
  background("grey");
  textAlign(CENTER);
  textStyle(BOLD);
  text("Ihis is how khomus sound like. It's our national musical instrument \nIt's very important in our Sakha culture \nIt's a recording of my practice on khomus", 250, 100);
  image(i1, 150, 180, 200, 230);

  
  break;

  case 1:
    if (!s2.isPlaying()){
      s2.play();
    }
  background("grey");
  textAlign(CENTER);
  textStyle(BOLD);
  text("These are words for Osuokhai, Sakha circle dance. \nIt's also important to us. During mobilization in russia, \nwe chose Osuokhai as our form of protest.\nOn the photo is my attempt to celebrate Ysyakh, \nNew Year that we celebrate during summer", 250, 100);
  image(i2, 75, 180, 350, 230);
  break;

  case 2:
    if (!s3.isPlaying()){
      s3.play();
    }
  background("grey");
  textAlign(CENTER);
  textStyle(BOLD);
  text("This is a composition I wrote about existential crisis of being \nIndigenous Sakha person who's erased from history \nthanks to russian colonialism", 250, 100);
  image(i3, 75, 180, 350, 200);
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


let window1, landscape, nightsky, sun, serge;
let hare, girl, horse, horsedead;
let floor;
let night, fire;
let landscapeY = 0;
let timer = 0 ;
//let fr = 25;
let run = 0;
let sky = 0;

function preload(){
  //noStroke();
  //landscape = new Sprite(400, 300);
  //landscape.addImage("assets/images/act1/landscape.png");
  //landscape.collider = "none";
  landscape = loadImage("assets/images/act1/landscape.png");
  serge = loadAnimation("assets/images/act1/serge.png", {size: [322, 322], frames: 14});

  horse = new Sprite(406, 385);
  horse.addAnimation("horsedown", "assets/images/act1/horsedown.png", { size: [178, 178], frames: 18});
  horse.addAnimation("dead", "assets/images/act1/horsedead.png", {size: [268, 268], frames: 6});
  horse.addAnimation("horseidle", "assets/images/act1/horseidle.png", { size: [178, 178], frames: 18});
  horse.collider = "none";
  horsedead = loadAnimation("assets/images/act1/horsedead.png", {size: [268, 268], frames: 6});
  hare = new Sprite(0, 450);
  hare.addAnimation("running", "assets/images/act1/hare2.png", { size: [81, 81], frames: 9});
  hare.collider = "none";
  girl = new Sprite(-150, 400);
  girl.addAnimation("running", "assets/images/act1/girl2.png", {size: [144, 201], frames: 18});
  girl.collider = "none";
  nightsky = new Sprite(400, -300);
  nightsky.addImage("assets/images/act1/nightsky.png");
  fire = new Sprite(400, 900);
  fire.addImage("assets/images/act1/firestill.png");
  fire.collider = "none";
  floor = new Sprite(400, 600, 800, 10, "static");
  window1 = new Sprite(400, 300);
  window1.addImage("assets/images/act1/window.png");
  window1.collider = "none";
  sun = new Sprite(212, 184, 35);
  sun.shapeColor = "white";

  
  
}
function setup() {
  createCanvas(800, 600);
  background("black");
 // fire = loadAnimation("assets/images/act1/fire.png", {size: [800, 200], frames: 15});
  
//  frameRate(fr);
  
}

function draw() {
//hare.ani = "running";
//hare.vel.x = 2;
clear();
//act1
image(landscape, 0, landscapeY);
noStroke();
//circle(212, 184, 35);
animation(serge, 500, 275);
serge.stop();

timer++ ;
if (timer > 2*60) {
  timer = 0 ;
  hare.ani = "running";
  hare.vel.x = 6;
  girl.ani = "running";
  girl.vel.x = 4;
  horse.ani = "horseidle";
  horse.vel.x = 0;
}
//else{
  //horse.ani = "horsedown";
  //horse.vel.x = 0;
  //horse.ani.noLoop();
//}

//if (timer > 3*60) {
//  timer = 0 ;
//  hare.remove();
//  girl.remove();
//}


if (frameCount >6*60){
  hare.remove();
  girl.remove();
  nightsky.vel.y = 3;
  //fire.ani = "burn";
  //fire.vel.x = 0;
   // image(nightsky, 0, 0);
//blend(nightsky, 0, 0, 800, 1200, 0, sky, 800, 1200, HARD_LIGHT);
world.gravity.y = 10;
}

if (frameCount > 9*60){
    //fire.ani = "burn";
    animation(horsedead, 425, 393);
    horsedead.looping = false;
    //horse.ani = "dead";
    //horse.ani = "end";
    //this.looping = false;
    //animation(fire, 400, 300);
    //fire.looping = false;
    horse.remove();
    serge.play();
    serge.looping = false;
}
if (frameCount > 9.5*60){
  //horse.remove();
  fire.y = 300;
}

if (frameCount > 11*60){
  //landscape.vel.y = 3;
  //landscapeY = landscapeY + 3;
  //nightsky.vel.y = 3;
  //serge.remove();
  //switch state here I guess

}

fill(255);
textSize(12);
text(mouseX + ", " + mouseY, 120, 120);



//image(window1, 0, 0);

}


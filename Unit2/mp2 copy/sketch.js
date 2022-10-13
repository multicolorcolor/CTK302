let state = 0;
//act1 assets
let window1, landscape, nightsky, sun, serge, grassAct1;
let hare, sardana, horse, horsedead, night, fire, skullrise, bleedingskull, fan, fanmirror, fans, fansmirror, fangroup1, fangroup2;
let floor, eyelid1, eyelid2;
//act2 assets
let cameratrigger, cameratrigger1, cameratrigger2, cameratrigger3, cameratrigger4, cameratrigger5, maskentrance;
let cameratriggerupwoods, cameratriggerupdarkness, cameratriggerdowndarkness, cameratriggerupskull01, cameratriggerrightskull01;
let triggerrightskull02, triggerdownskull02, triggerdownskull03, triggerleftskull03, triggerleftskull04, triggerupskull04;
//let camtr;
let animationtrigger;
let worldmap;
let balagan;
let suorij;
let timer = 0 ;
let vel = 0;
let map1, map2, map3, map4, map5, map6, map7, map9;
let goldenskull01, goldenskull02, goldenskull03, goldenskull04;
let caught, skullawake, skullfed, blood;
//audio trigger component
let mic;
let vol = 0;
let approachingVol = 0;
let x = 0;
let theLoudestItGets = 0.2;
var ease = 0.08;

function preload(){

  landscape = loadImage("assets/images/act1/landscape.png");
  //worldmap = loadImage("assets/images/act2/world.png");
  map1 = loadImage("assets/images/world/01.png");
  map2 = loadImage("assets/images/world/02.png");
  map3 = loadImage("assets/images/world/07.png");
  map4 = loadImage("assets/images/world/08.png");
  map5 = loadImage("assets/images/world/09.png");
  //map6 = loadImage("assets/images/world/06.png");
  //map7 = loadImage("assets/images/world/07.png");
  //map8 = loadImage("assets/images/world/08.png");

  skullrise = new Sprite(435, 465);
  skullrise.addImage("assets/images/act1/skullrise.png");
  skullrise.visible = false;
  grassAct1 = new Sprite(400, 300);
  grassAct1.addImage("assets/images/act1/grass.png");
  grassAct1.visible = false;
  skullrise.collider = "none";
  grassAct1.collider = "none";
  //skullrise = loadImage("assets/images/act1/skullrise.png");
  //grassAct1 = loadImage("assets/images/act1/grass.png");
  caught = loadAnimation("assets/images/act2/caught.png", {size: [800, 800], frames: 25});
  //caught.stop();
  skullawake = loadAnimation("assets/images/act2/skullawake.png", {size: [800, 800], frames: 14})
  serge = loadAnimation("assets/images/act1/serge.png", {size: [322, 322], frames: 14});
  bleedingskull = new Sprite(500, 310);
  bleedingskull.addAnimation("bleed", "assets/images/act1/bleedingskull.png", {size: [294, 294], frames: 54});
  bleedingskull.collider = "none";
  bleedingskull.ani.looping = false;
  bleedingskull.ani.playing = false;
  bleedingskull.visible = false;
  //fan = loadAnimation("assets/images/act1/fan.png", {size: [65, 65], frames: 29});
  //fanmirror = loadAnimation("assets/images/act1/fanmirror.png", {size: [65, 65], frames: 29});
  fangroup1 = new Sprite(580, 390);
  fangroup1.addAnimation("idle", "assets/images/act1/group1.png", {size: [260, 260], frames: 29});
  fangroup1.collider = "none";
  fangroup1.visible = false;
  fangroup2 = new Sprite(220, 400);
  fangroup2.addAnimation("idle", "assets/images/act1/group2.png", {size: [260, 260], frames: 29});
  fangroup2.collider = "none";
  fangroup2.visible = false;
  horse = new Sprite(406, 385);
  horse.addAnimation("dead", "assets/images/act1/horsedead.png", {size: [268, 268], frames: 6});
  horse.addAnimation("horseidle", "assets/images/act1/horseidle.png", { size: [178, 178], frames: 18});
  horse.collider = "none";
  horsedead = loadAnimation("assets/images/act1/horsedead.png", {size: [268, 268], frames: 6});
  hare = new Sprite(0, 450);
  hare.addAnimation("running", "assets/images/act1/hare2.png", { size: [81, 81], frames: 9});
  hare.collider = "none";
  sardana = new Sprite(-150, 400);
  sardana.addAnimation("running", "assets/images/act1/sardana.png", {size: [200, 200], frames: 18});
  sardana.collider = "none";
  worldmap = new Sprite(400, -150);
  worldmap.addImage("assets/images/act2/world.png");
  worldmap.collider = "none";
  worldmap.visible = false;
  balagan = new Sprite(224, 335);
  balagan.addAnimation("door", "assets/images/act2/balagandoor.png", {size: [446, 446], frames: 8});
  balagan.collider = "none";
  balagan.visible = false;
  balagan.ani.looping = false;
  balagan.ani.stop();
  goldenskull01 = new Sprite(685, 228, 232, 456, "none");
  goldenskull01.addImage("assets/images/act2/skull01.png");
  goldenskull01.visible = false;
  goldenskull02 = new Sprite(690, 443, 220, 315, "none");
  goldenskull02.addImage("assets/images/act2/skull02.png");
  goldenskull02.visible = false;
  goldenskull03 = new Sprite(267, 433, 534, 334, "none");
  goldenskull03.addImage("assets/images/act2/skull03.png");
  goldenskull03.visible = false;
  goldenskull04 = new Sprite(268, 238, 536, 476, "none");
  goldenskull04.addImage("assets/images/act2/skull04.png");
  goldenskull04.visible = false;
  



  suorij = new Sprite(-50, 445, 50, 250);

  suorij.addAnimation("left", "assets/images/act2/suorijleft.png", {size: [250, 250], frames: 12});
  suorij.addAnimation("back", "assets/images/act2/suorijback.png", {size: [250, 250], frames: 12});
  suorij.addAnimation("front", "assets/images/act2/suorijfront.png", {size: [250, 250], frames: 12});
  suorij.addAnimation("idle", "assets/images/act2/suorijidle.png", {size: [250, 250], frames: 19});
  suorij.addAnimation("right", "assets/images/act2/suorijright.png", {size: [250, 250], frames: 12});

  suorij.collider = "none";
  suorij.visible = false;
  maskentrance = new Sprite(400, 275 );
  maskentrance.addImage("assets/images/act2/maskentrance.png");
  maskentrance.collider = "none";
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


////just sprites

  eyelid1 = new Sprite(400, -600, 800, 1000, "none");
  eyelid1.shapeColor = "black";
  //eyelid1.collider = "none";
  eyelid2 = new Sprite(400, 900, 800, 400, "none");
  eyelid2.shapeColor = "black";


  cameratrigger = new Sprite(400, 25, 749, 1);
  cameratrigger.collider = "none";
  cameratrigger.visible = false;
  cameratrigger1 = new Sprite(25, 300, 1, 549);
  cameratrigger1.collider = "none";
  cameratrigger1.visible = false;
  cameratrigger2 = new Sprite(775, 300, 1, 549);
  cameratrigger2.collider = "none";
  cameratrigger2.visible = false;

  //what's wrong with this trigger??
  triggerrightskull02 = new Sprite(775, 300, 1, 548);
  triggerrightskull02.collider = "none";
  triggerrightskull02.visible = false;

  triggerdownskull02 = new Sprite(400, 575, 749, 1);
  triggerdownskull02.collider = "none";
  triggerdownskull02.visible = false;
  //
  triggerleftskull04= new Sprite(25, 300, 1, 549);
  triggerleftskull04.collider = "none";
  triggerleftskull04.visible = false;
  

  cameratrigger3 = new Sprite(400, 575, 749, 1);
  cameratrigger3.collider = "none";
  cameratrigger3.visible = false;
  triggerleftskull03 = new Sprite(25, 300, 1, 549);
  triggerleftskull03.collider = "none";
  triggerleftskull03.visible = false;
  triggerupskull04 = new Sprite(400, 25, 749, 1);
  triggerupskull04.collider = "none";
  triggerupskull04.visible = false;

  cameratriggerrightskull01 = new Sprite(775, 300, 1, 548);
  cameratriggerrightskull01.collider = "none";
  cameratriggerrightskull01.visible = false;

  cameratriggerupwoods = new Sprite(400, 25, 749, 1);
  cameratriggerupwoods.collider = "none";
  cameratriggerupwoods.visible = false;
  cameratriggerupdarkness = new Sprite(400, 25, 749, 1);
  cameratriggerupdarkness.collider = "none";
  cameratriggerupdarkness.visible = false;
  cameratriggerdowndarkness = new Sprite (400, 575, 749, 1);
  cameratriggerdowndarkness.collider = "none";
  cameratriggerdowndarkness.visible = false;
  cameratriggerupskull01 = new Sprite(400, 25, 749, 1);
  cameratriggerupskull01.collider = "none";
  cameratriggerupskull01.visible = false;
  animationtrigger = new Sprite(400, 365, 5, 600 );
  animationtrigger.collider = "none";
  animationtrigger.visible = false;
  triggerdownskull03 = new Sprite(400, 575, 749, 1);
  triggerdownskull03.collider = "none";
  triggerdownskull03.visible = false;
}

function setup() {
  createCanvas(800, 600);
  background("black");
  
  //eyelid2.collider = "none";
  
  //fans = new Group();
  //fans.addAni(fan);
  //fans.x = (i) => random(400, 650);
  //fans.y = (i) => 500 - i * 15;
  //fans.amount = 5;
  //fans.collider = "none";
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
background(220);

switch (state) {
  case 0:
  clear();
  image(landscape, 0, 0);
  noStroke();
  animation(serge, 500, 275);
  serge.stop();
  if (kb.pressing(' ')) {
    state = 5;
}


  timer++ ;
  if (timer > 2*60) {
  hare.ani = "running";
  hare.vel.x = 9;
  sardana.ani = "running";
  sardana.vel.x = 7;
  horse.ani = "horseidle";
  horse.vel.x = 0;
  }
  if (timer >4.5*60){
    hare.remove();
    sardana.remove();
    nightsky.vel.y = 3;
    world.gravity.y = 10;
  }
  
  if (timer > 7*60){
    animation(horsedead, 425, 393);
    horsedead.looping = false;
    horse.remove();
    serge.play();
    serge.looping = false;
  }

  if (timer > 7.5*60){
    fire.y = 300;
  }
  if (timer > 9*60){
    timer = 0 ;
    state = 1;
  }

  break;

  case 1:
  clear();
  world.gravity.y = 0;
  background("#8aacb2");
  sun.remove();
  nightsky.remove();
  fire.remove();
  horse.remove();
  skullrise.visible = true;
  grassAct1.visible = true;
  skullrise.move(435, 265, 1);


  //image(landscape, 0, 0);
  //image(skullrise, 250, 370 + vel);
  //image(grassAct1, 0, 0);
  
  timer++;
  if (timer > 5*60) {
    //timer = 0 ;
    skullrise.remove();
    bleedingskull.ani.playing = true;
    bleedingskull.visible = true;
    fangroup1.visible = true;
    fangroup2.visible = true;
    //vel = -1;
    //timer++;
   
    }
    if (timer > 10*60){
      
      //noStroke();
      //eyelid1 = new Sprite(400, -600, 800, 1000);
      eyelid1.move(400, -100, 5);
      //eyelid1.shapeColor = "black";
      //eyelid2 = new Sprite(400, 900, 800, 400);
      eyelid2.move(400, 600, 3);
      //eyelid2.shapeColor = "black";
      //eyelid1.overlap(eyelid2, () => eyelid2.remove());
      //if (timer > 16*60){
      //  timer = 0;
     //   bleedingskull.remove();
      //}  
    } 
    if (timer > 12*60){
      bleedingskull.remove();  
      timer = 0;
      fangroup1.remove();
      fangroup2.remove();
      grassAct1.remove();
      window1.remove();
      state = 5;

    } 
   



  
  break;

  //state with balagan
  case 2:
    //act2
    balagan.visible = true;  
    maskentrance.remove();
  movement();
  //if (suorij.x >= 750){
  //  suorij.x = 0;
  //}
  //if (suorij.y >= 450){
  //  suorij.y = 0;
  //}
  suorij.collider = "dynamic";
  suorij.visible = true;
  
  image(map2, 0, 0);
  cameratrigger.collider = "dynamic";
  cameratrigger1.collider = "dynamic";
  suorij.overlap(cameratrigger, map03);
  suorij.overlap(cameratrigger1, map01);
  
  eyelid1.move(400, -600, 5);
  eyelid2.move(400, 900, 3);
  hare.remove();
  sardana.remove();
  horse.remove();
  sun.remove();
  nightsky.remove();
  skullrise.remove();
  grassAct1.remove();
  window1.remove();
  floor.remove();


  break;

//state with water
  case 3:
    balagan.visible = false;
  movement();
  //if (suorij.x <= 50){
  //  suorij.x = 800;
  //}
  image(map1, 0, 0);  
  //
  cameratrigger2.collider = "dynamic";
  suorij.overlap(cameratrigger2, map02);
  
  break;

  //state in the woods with gradient
  case 4:
    cameratrigger3.collider = "dynamic";
    cameratrigger.collider = "none";
    cameratriggerupwoods.collider = "dynamic";
    //suorij.collider = "dynamic";
    suorij.overlap(cameratrigger3, map02back);
    suorij.overlap(cameratriggerupwoods, map04);
    image(map3, 0, 0); 
    balagan.visible = false;
    movement();
   // if (suorij.y <= 149){
   //   suorij.y = 600;
    //}

    //if (suorij.y >= 450){
    //suorij.y = 0;
  //}

  break;

//garbage state just for character entrance, because either timer or move animation didn't work properly
  case 5:
    eyelid1.move(400, -600, 5);
    eyelid2.move(400, 900, 3);
    hare.remove();
    sardana.remove();
    horse.remove();
    sun.remove();
    nightsky.remove();
    skullrise.remove();
    grassAct1.remove();
    window1.remove();
    floor.remove();
    horse.remove();
    sun.remove();
    window1.remove();
    suorij.visible = true;
    animationtrigger.collider = "dynamic";
    suorij.collider = "dynamic";
    suorij.overlap(animationtrigger, suoridle);
  image(map2, 0, 0);
  balagan.visible = true;
  if (mouse.released()) {
    if (mouseX < 125 && mouseY > 316 && mouseY <569){
      balagan.ani.play();
      suorij.vel.x = 3;
    }		
	}



  break;

//garbage state just for character entrance, because either timer or move animation didn't work properly
  case 6:
    timer++;
    
    suorij.ani = "idle";
        suorij.ani.looping = false;
        image(map2, 0, 0);
        if (timer > 2*60){
          state = 2;
        }
        
  break;

  //state with darkness
  case 7:
  image(map4, 0, 0);
  movement();
  //if (suorij.y <= 149){
  //  suorij.y = 600;
  //}
  //if (suorij.y >= 450){
    //suorij.y = 0;
  //}
  cameratrigger3.collider = "none";
  cameratriggerupwoods.collider = "none";
  cameratriggerupdarkness.collider = "dynamic";
  cameratriggerdowndarkness.collider = "dynamic";
  suorij.overlap(cameratriggerupdarkness, map05);
  suorij.overlap(cameratriggerdowndarkness, map03back);
  break;

  //state with first piece of skull
  case 8:

    //dying trigger
    vol = mic.getLevel();
    approachingVol += (vol - approachingVol) * ease;
    if (vol > 0.2){

      state = 12;
     }
//dying trigger


  image(map5, 0, 0);

  movement();
  //if (suorij.y <= 149){
  //  suorij.y = 600;
 // }
 triggerdownskull03.collider = "none";
 triggerrightskull02.collider = "none";
  cameratrigger3.collider = "none";
  cameratriggerupdarkness.collider = "none";
  cameratriggerdowndarkness.collider = "none";
  cameratrigger2.collider = "none";
  cameratrigger.collider = "none";
  cameratrigger1.collider = "none";
  triggerleftskull04.collider = "none";
  triggerupskull04.collider = "none";
  triggerleftskull03.collider = "none";
  triggerrightskull02.collider = "none";
  triggerrightskull02.collider = "none";
  cameratriggerupskull01.collider = "dynamic";
  cameratriggerrightskull01.collider = "dynamic";
  suorij.overlap(cameratriggerupskull01, map06);
  suorij.overlap(cameratriggerrightskull01, map08back);
  break;

  //state with second piece of skull
  case 9:
  image(map5, 0, 0);
      //dying trigger
      vol = mic.getLevel();
      approachingVol += (vol - approachingVol) * ease;
      if (vol > 0.2){
  
        state = 12;
       }
  //dying trigger
  
  movement();
 // if (suorij.y <= 149){
 //   suorij.y = 600;
 // }
 triggerdownskull03.collider = "none";
  cameratriggerupskull01.collider = "none";
  cameratrigger2.collider = "none";
  triggerdownskull03.collider = "none";
  triggerleftskull03.collider = "none";
  triggerleftskull04.collider = "none";
  triggerupskull04.collider = "none";
  cameratriggerrightskull01.collider = "none";
  cameratriggerupskull01.collider = "none";
  //cameratrigger2.remove();
  //triggerrightskull02.visible = false;
  //suorij.collider = "dynamic";
  //triggerrightskull02.remove();
  triggerdownskull02.collider = "dynamic";
  triggerrightskull02.collider = "dynamic";
  suorij.overlap(triggerrightskull02, map07);
  suorij.overlap(triggerdownskull02, map05back);
  break;

  //state with third piece of skull
    case 10:
  image(map5, 0, 0);
      //dying trigger
      vol = mic.getLevel();
      approachingVol += (vol - approachingVol) * ease;
      if (vol > 0.2){
  
        state = 12;
       }
  //dying trigger
  
  movement();
  //if (suorij.x >= 750){
  //  suorij.x = 0;
  //}
  triggerdownskull03.collider = "dynamic";
  triggerleftskull04.collider = "none";
  cameratrigger3.collider = "none";
  triggerleftskull03.collider = "dynamic";
  cameratrigger1.collider = "none";
  triggerdownskull02.collider = "none";
  triggerrightskull02.collider = "none";
  cameratriggerrightskull01.collider = "none";
  cameratriggerupskull01.collider = "none";
  suorij.overlap(triggerdownskull03, map08);
  suorij.overlap(triggerleftskull03, map06back);
  break;

  //state with fourth piece of skull
  case 11:
    image(map5, 0, 0);
        //dying trigger
        vol = mic.getLevel();
        approachingVol += (vol - approachingVol) * ease;
        if (vol > 0.2){
    
          state = 12;
         }
    //dying trigger

    movement();
    cameratrigger1.collider = "none";
    cameratrigger.collider = "none";
    triggerdownskull02.collider = "none";
    triggerdownskull03.collider = "none";
    triggerleftskull03.collider = "none";
    triggerrightskull02.collider = "none";
    cameratriggerrightskull01.collider = "none";
    cameratriggerupskull01.collider = "none";

    triggerleftskull04.collider = "dynamic";
    triggerupskull04.collider = "dynamic";
    
    suorij.overlap(triggerupskull04, map07back);
    suorij.overlap(triggerleftskull04, map05back1);

    //if (suorij.y >= 450){
   //   suorij.y = 0;
    //}
    break;


    //state where you're caught
    case 12:
      //timer = 0;
      image(map5, 0, 0);
      suorij.x = 300;
      suorij.y = 400;
      suorij.vel.x = 0;
      suorij.vel.y = 0;
      suorij.remove();
      goldenskull01.remove();
      goldenskull02.remove();
      goldenskull03.remove();
      goldenskull04.remove();
      animation(caught, 400, 300);
      caught.looping = false;
      //if (caught.playing = false){
      //  state = 13;
      //}
      timer++;
      if (timer > 4*60){
        
        //state = 13;
        
        animation(skullawake, 400, 300);
        skullawake.looping = false;
        //caught.play();
        caught.visible = false;
        
        
        
      } 
      if (timer > 6*60){
        timer = 0;
      }
      
      break;
    
    //death
    case 13:
    image(map5, 0, 0);
    caught.remove();
    break;
}



fill(255);
textSize(12);
text(mouseX + ", " + mouseY, 120, 120);



}

function mouseReleased(){
  //state++;
  //if (state > 3) {
  //  state = 0;
  //}
  
}


function suoridle(){
  suorij.vel.x = 0;
  suorij.ani = "idle";
  suorij.ani.looping = false;
  //timer = 0;
  state = 6;
  animationtrigger.remove();
}
function movement(){
  if (kb.pressing('w')) {
		suorij.ani = "back";
		suorij.vel.y = -5;
    //suorij.ani.playing = true;
	}
  else if (kb.pressing('s')) {
		suorij.ani = 'front';
		suorij.vel.y = 2;
    //suorij.ani.playing = true;
	}
  else {
		suorij.vel.y = 0;
    //suorij.ani.playing = false;
	}
  if (kb.pressing('a')) {
		suorij.ani = 'right';
		suorij.vel.x = -2;
    suorij.mirror.x = true;
    //suorij.ani.playing = true;
	}
  else if (kb.pressing('d')) {
		suorij.ani = 'right';
		suorij.vel.x = 2;
    suorij.mirror.x = false;
    //suorij.ani.playing = true;
	}
  
  else {
    suorij.vel.x = 0;
    //suorij.ani.playing = false;
  }

  if (kb.pressing('w') || kb.pressing('s') || kb.pressing('a') || kb.pressing('d')){
    suorij.ani.playing = true;  
  }
  else {
    suorij.ani.playing = false;
  }
  suorij.debug = mouse.holding();
}
function map01(){
  if (kb.pressing('a')){
    state = 3;
    suorij.x = 645;
}
  }

function map02(){
  if (kb.pressing('d')){
    state = 2;
    suorij.x = 155;
}
}

function map02back(){
  if (kb.pressing('s')){
    state = 2;
    suorij.y = 155;
}
}


function map03(){
  if (kb.pressing('w')){
    state = 4;
    suorij.y = 445;
}
}

function map03back(){
  if (kb.pressing('s')){
    state = 4;
    suorij.y = 155;
}
}

function map04(){
  if (kb.pressing('w')){
    state = 7;
    suorij.y = 445;
}
}
function map05(){
  if (kb.pressing("w")){
    state = 8;
    suorij.y = 445;
    goldenskull01.visible = true;
    goldenskull02.visible = false;
    goldenskull03.visible = false;
    goldenskull04.visible = false;
  }
}
function map05back(){
  if (kb.pressing("s")){
    state = 8;
    suorij.y = 155;
    goldenskull01.visible = true;
    goldenskull02.visible = false;
    goldenskull03.visible = false;
    goldenskull04.visible = false;
  }

}

function map05back1(){
  if (kb.pressing("a")){
    state = 8;
    suorij.x = 645;
    goldenskull01.visible = true;
    goldenskull02.visible = false;
    goldenskull03.visible = false;
    goldenskull04.visible = false;
  }

}

function map06(){
  if (kb.pressing("w")){
    state = 9;
    suorij.y = 445;
    goldenskull01.visible = false;
    goldenskull02.visible = true;
    goldenskull03.visible = false;
    goldenskull04.visible = false;
  }
}

function map06back(){
  if (kb.pressing("a")){
    state = 9;
    suorij.x = 645;
    goldenskull01.visible = false;
    goldenskull02.visible = true;
    goldenskull03.visible = false;
    goldenskull04.visible = false;
  }
}

function map07(){
  if (kb.pressing('d')){
    state = 10;
    suorij.x = 155;
    goldenskull01.visible = false;
    goldenskull02.visible = false;
    goldenskull03.visible = true;
    goldenskull04.visible = false;
}
}

function map07back(){
  if (kb.pressing('w')){
    state = 10;
    suorij.y = 445;
    goldenskull01.visible = false;
    goldenskull02.visible = false;
    goldenskull03.visible = true;
    goldenskull04.visible = false;
}
}
function map08(){
  if (kb.pressing('s')){
    state = 11;
    suorij.y = 155;
    goldenskull04.visible = true;
    goldenskull01.visible = false;
    goldenskull02.visible = false;
    goldenskull03.visible = false;
}  
}

//from 8 to 11
function map08back(){
  if (kb.pressing('d')){
    state = 11;
    suorij.x = 155;
    goldenskull04.visible = true;
    goldenskull01.visible = false;
    goldenskull02.visible = false;
    goldenskull03.visible = false;
}  
}
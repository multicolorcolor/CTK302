let player, suorij, collectibles, objective;
let map01, map02, map03, map04, map05, map06, map07, map08, map09;
let wall01;
let map, clothes;
let memory1, memory2, memory3, memory4, memory5;
let wasd, interaction, hint1, hint2, hint3, hint4, hint5;
let shine;
let menu, startbutton, intro, introinstruction, deybiirscene, deybiirtext, murkascene, murkatext, papersscene, paperstext, khomusscene, khomustext, oladjiscene, oladjitext, finalanimation;
let state = 0;
let timer = 0;
let memory1go, memory2go, memory3go, memory4go, memory5go = false;
let memory1done, memory2done, memory3done, memory4done, memory5done = false;
//let memory2go = false;
//let memory2done = false;
var memoryswitcher = false;
//let memorieslayer1, memorieslayer2;


function preload(){
//map07 = new Sprite(-400, 300, "none");
//map07.addImage("assets/map08.png");

wall01 = new Sprite(191, 150, 26, 130, "static");
wall01 = new Sprite(191, 455, 26, 30, "static");
wall01 = new Sprite(-135, 300, 26, 350, "static");
wall01 = new Sprite(607, -310, 45, 900, "static");
wall01 = new Sprite(1318, -100, 45, 1200, "static");
wall01 = new Sprite(614, 445, 45, 120, "static");
wall01 = new Sprite(570, -276, 38, 800, "static");
wall01 = new Sprite(-141, -276, 26, 800, "static");
wall01 = new Sprite(500, 485, 1600, 35, "static");
wall01 = new Sprite(500, -700, 1600, 35, "static");
wall01 = new Sprite(100, 96, 500, 20, "static");
wall01 = new Sprite(530, 96, 45, 20, "static");
wall01 = new Sprite(245, 150, 60, 140, "static");
wall01 = new Sprite(-50, 300, 130, 300, "static");
wall01 = new Sprite(50, 125, 300, 40, "static");
wall02 = new Sprite(515, 25, 25, 140, "static");
wall02.rotation = 12;
wall01 = new Sprite(95, 15, 390, 140, "static");
wall01 = new Sprite(95, 15, 390, 140, "static");
wall01 = new Sprite(-10, -410, 205, 140, "static");
wall01 = new Sprite(450, -610, 200, 140, "static");
wall01 = new Sprite(100, -610, 400, 100, "static");
wall03 = new Sprite(695, 425, 30, 180, "static");
wall03.rotation = 107;
wall01 = new Sprite(1170, 303, 220, 400, "static");
wall01 = new Sprite(1260, -500, 220, 200, "static");
wall01 = new Sprite(1000, -650, 420, 200, "static");
wall01 = new Sprite(700, -400, 190, 500, "static");
map = new Sprite(400, 300, 2400, 3000, "none");
map.addImage("assets/map.png");
player = new Sprite(400, 300, 65, 200);
player.addAnimation("walk", "assets/playerwalk.png", {size: [211, 211], frames: 12});
player.addAnimation("up", "assets/playerup.png", {size: [211, 211], frames: 12});
player.addAnimation("down", "assets/playerdown.png", {size: [211, 211], frames: 12});
player.rotationLock = true;
clothes = new Sprite(400, 300, 2400, 3000, "none");
clothes.addImage("assets/clothes.png");
memory1 = new Sprite(150, 0, 450, 200, "static");
memory1.addImage("assets/shine.png");
memory2 = new Sprite(0, -315, "static");
memory2.diameter = 350;
memory2.addImage("assets/shine.png");
memory3 = new Sprite(262, -600, 350, 385, "static");
memory3.addImage("assets/shine.png");
memory4 = new Sprite(1140, 220, 350, 385, "static");
memory4.addImage("assets/shine.png");
memory5 = new Sprite(938, -573, 350, 385, "static");
memory5.addImage("assets/shine.png");
wasd = new Sprite(player.x, player.y, "none");
wasd.addImage("assets/wasd.png");
hint1 = new Sprite(player.x, player.y, "none");
hint1.addImage("assets/hint1.png");
hint1.visible = false;
hint2 = new Sprite(player.x, player.y, "none");
hint2.addImage("assets/hint2.png");
hint2.visible = false;
hint3 = new Sprite(player.x, player.y, "none");
hint3.addImage("assets/hint3.png");
hint3.visible = false;
hint4 = new Sprite(player.x, player.y, "none");
hint4.addImage("assets/hint4.png");
hint4.visible = false;
hint5 = new Sprite(player.x, player.y, "none");
hint5.addImage("assets/hint5.png");
hint5.visible = false;
deybiirscene = new Sprite(400, 300, "none");
deybiirscene.addImage("assets/deybiir.png");
deybiirscene.visible = false;
deybiirtext = new Sprite(400, 300, "none");
deybiirtext.addImage("assets/deybiirtext.png");
deybiirtext.visible = false;
murkascene = new Sprite(400, 300, "none");
murkascene.addImage("assets/murka.png");
murkascene.visible = false;
murkatext = new Sprite(400, 300, "none");
murkatext.addImage("assets/murkatext.png");
murkatext.visible = false;
papersscene = new Sprite(400, 300, "none");
papersscene.addImage("assets/passport.png");
papersscene.visible = false;
paperstext = new Sprite(400, 300, "none");
paperstext.addImage("assets/passporttext.png");
paperstext.visible = false;
khomusscene = new Sprite(400, 300, "none");
khomusscene.addImage("assets/khomus.png");
khomusscene.visible = false;
khomustext = new Sprite(400, 300, "none");
khomustext.addImage("assets/khomustext.png");
khomustext.visible = false;
oladjiscene = new Sprite(400, 300, "none");
oladjiscene.addImage("assets/oladji.png");
oladjiscene.visible = false;
oladjitext = new Sprite(400, 300, "none");
oladjitext.addImage("assets/oladjitext.png");
oladjitext.visible = false;
finalanimation = new Sprite(400, 300, "none");
finalanimation.addAnimation("assets/animation.png", {size: [800, 600], frames: 50});
finalanimation.ani.looping = false;
finalanimation.visible = false;
finalanimation.ani.playing = false;
menu = new Sprite(400, 300, "none");
menu.addImage("assets/menu01.png");
menu.visible = false;
startbutton = new Sprite(400, 300, "none");
startbutton.addImage("assets/startbutton.png");
startbutton.visible = false;
intro =  new Sprite(400, 300, "none");
intro.addImage("assets/intro.png");
intro.visible = false;
introinstruction =  new Sprite(400, 300, "none");
introinstruction.addImage("assets/introinstruction.png");
introinstruction.visible = false;
//memorieslayer1 = loadSound("assets/memorieslayer1.wav");
//memorieslayer2 = loadSound("assets/memorieslayer2.wav");
}

function setup() {
  createCanvas(800, 600);
  
  //collectibles = new Group();
//collectibles.diameter = 10;
//collectibles.x = () => random(121, 500);
//collectibles.y = () => random(5, 10);
//collectibles.amount = 2;
//collectibles.collider = "static";

//player.overlaps(collectibles, packingmemories);
}

function draw() {
switch (state){
  case 0:
    menu.visible = true;
    if (mouseX > 307 && mouseX < 505 && mouseY > 365 && mouseY < 402){
    startbutton.visible = true;
    }
    else{
      startbutton.visible = false;  
    }
  break;

  case 1:
    menu.visible = false;
    startbutton.visible = false; 
    intro.visible = true;
    timer++ ;
    if (timer > 1*60){
      timer = 0;
      introinstruction.visible = true;
    }
    if (kb.presses(' ')) {
      state = 2;
    }
  break;
  
  case 2:
    
  //if (!memorieslayer1.isPlaying()){
   //   memorieslayer1.play();
    //}
   
    background("grey");
    introinstruction.visible = false;
    intro.visible = false;
    movement();
    camera.on();
    player.debug = mouse.holding();
    player.overlaps(memory1, deybiir);
    player.overlapped(memory1, nodeybiir);
    player.overlaps(memory2, murka);
    player.overlapped(memory2, nomurka);
    player.overlaps(memory3, papers);
    player.overlapped(memory3, nopapers);
    player.overlaps(memory4, khomus);
    player.overlapped(memory4, nokhomus);
    player.overlaps(memory5, oladji);
    player.overlapped(memory5, nooladji);
    deybiirscene.visible = false;
    murkascene.visible = false;
    murkatext.visible = false; 
    deybiirtext.visible = false;
    papersscene.visible = false;
    paperstext.visible = false; 
    khomusscene.visible = false;
    khomustext.visible = false; 
    oladjiscene.visible = false;
    oladjitext.visible = false; 
    hint2.x = camera.x;
    hint2.y = camera.y;
    hint3.x = camera.x;
    hint3.y = camera.y;
    hint4.x = camera.x;
    hint4.y = camera.y;
    hint5.x = camera.x;
    hint5.y = camera.y;
    //if (player)
    if (kb.presses('e') && memory1go == true) {
      state = 3;
      
    }
    if (kb.presses('e') && memory2go == true) {
      state = 4;
    }
    if (kb.presses('e') && memory3go == true) {
      state = 5;
    }
    if (kb.presses('e') && memory4go == true) {
      state = 6;
    }
    if (kb.presses('e') && memory5go == true) {
      state = 7;
    }

    if (memory1done == true && memory2done == true && memory3done == true && memory4done == true && memory5done == true){
      state = 8;
    }
  break;

  case 3:
   // if (!memorieslayer2.isPlaying()){
    // memorieslayer2.play();
   // }

    deybiirscene.visible = true;
    deybiirtext.visible = false; 
    deybiirscene.x = camera.x;
    deybiirscene.y = camera.y;
    hint1.visible = false;
    if (kb.presses(' ')) {
      deybiirscene.visible = false;
      deybiirtext.visible = false;
      memory1done = true;
      memory1.visible = false;
      state = 2;
    }
    if (kb.presses('e')) {
      deybiirscene.visible = false;
      deybiirtext.visible = false;
      memory1done = true;
      memory1.visible = false;
      state = 2;
    }
    if (memoryswitcher == true){
      deybiirtext.x = camera.x;
      deybiirtext.y = camera.y;
      deybiirtext.visible = true;  
      deybiirscene.visible = false;
    }
    //else {
    //  deybiirtext = false;
    //}
  break;

  case 4:
    murkascene.visible = true;
    murkatext.visible = false; 
    murkascene.x = camera.x;
    murkascene.y = camera.y;
    hint2.visible = false;
    
    if (kb.presses(' ')) {
      murkascene.visible = false;
      murkatext.visible = false;  
      memory2done = true;
      memory2.visible = false;
      state = 2;
    }
    if (kb.presses('e')) {
      murkascene.visible = false;
      murkatext.visible = false; 
      memory2done = true;
      memory2.visible = false;
      state = 2;
    }
    if (memoryswitcher == true){
      murkatext.x = camera.x;
      murkatext.y = camera.y;
      murkatext.visible = true;  
      murkascene.visible = false;
    }
  break;
  
  case 5:
    papersscene.visible = true;
    paperstext.visible = false; 
    papersscene.x = camera.x;
    papersscene.y = camera.y;
    hint3.visible = false;
    
    if (kb.presses(' ')) {
      papersscene.visible = false;
      paperstext.visible = false;  
      memory3done = true;
      memory3.visible = false;
      state = 2;
    }
    if (kb.presses('e')) {
      papersscene.visible = false;
      paperstext.visible = false;  
      memory3done = true;
      memory3.visible = false;
      state = 2;
    }
    if (memoryswitcher == true){
      paperstext.x = camera.x;
      paperstext.y = camera.y;
      paperstext.visible = true;  
      papersscene.visible = false;
    }
  break;

  case 6:
    khomusscene.visible = true;
    khomustext.visible = false; 
    khomusscene.x = camera.x;
    khomusscene.y = camera.y;
    hint4.visible = false;
    
    if (kb.presses(' ')) {
      khomusscene.visible = false;
      khomustext.visible = false;  
      memory4done = true;
      memory4.visible = false;
      state = 2;
    }
    if (kb.presses('e')) {
      khomusscene.visible = false;
      khomustext.visible = false;  
      memory4done = true;
      memory4.visible = false;
      state = 2;
    }
    if (memoryswitcher == true){
      khomustext.x = camera.x;
      khomustext.y = camera.y;
      khomustext.visible = true;  
      khomusscene.visible = false;
    }
  break;

  case 7:
    oladjiscene.visible = true;
    oladjitext.visible = false; 
    oladjiscene.x = camera.x;
    oladjiscene.y = camera.y;
    hint5.visible = false;
    
    if (kb.presses(' ')) {
      oladjiscene.visible = false;
      oladjitext.visible = false;  
      memory5done = true;
      memory5.visible = false;
      state = 2;
    }
    if (kb.presses('e')) {
      oladjiscene.visible = false;
      oladjitext.visible = false;  
      memory5done = true;
      memory5.visible = false;
      state = 2;
    }
    if (memoryswitcher == true){
      oladjitext.x = camera.x;
      oladjitext.y = camera.y;
      oladjitext.visible = true;  
      oladjiscene.visible = false;
    }
  break;

  case 8:
    finalanimation.visible = true;
    finalanimation.x = camera.x;
    finalanimation.y = camera.y;
    finalanimation.ani.playing = true;
  break;

} 

}

function movement(){
  if (kb.pressing("w")){
    player.ani = "up";
    player.vel.y = -3;
    hint1.y = player.y;
  }
  else if (kb.pressing("s")){
    player.ani = "down";
    player.vel.y = 3;
    hint1.y = player.y;
  }
  else {
    player.vel.y = 0;
    hint1.y = player.y;
  }
  if (kb.pressing("d")){
    player.ani = "walk";
    player.mirror.x = false;
    player.vel.x = 3;
    hint1.x = player.x;
  }
  else if (kb.pressing("a")){
    player.ani = "walk";
    player.mirror.x = true;
    player.vel.x = -3;
    hint1.x = player.x;
  }
  else {
    player.vel.x = 0;
    hint1.x = player.x;
  }
  if (kb.pressing('w') || kb.pressing('s') || kb.pressing('a') || kb.pressing('d')){
    player.ani.playing = true; 
    wasd.remove(); 
  }
  else {
    player.ani.playing = false;
  }

  camera.x = player.x;
	camera.y = player.y;
}

function packingmemories(player, collectible){
  collectible.remove();


}

function deybiir(player, memory1){
hint1.visible = true;
memory1go = true;
if (memory1done == true){
  hint1.visible = false;
}

}
function nodeybiir(player, memory1){
hint1.visible = false;  
}

function murka(player, memory2){
  hint2.visible = true;
  memory2go = true;
  if (memory2done == true){
    hint2.visible = false;
    //memory1go = false;
  }
  
  }
  function nomurka(player, memory2){
  hint2.visible = false;  
  memory2go = false;
  }
  
  function papers(player, memory3){
    hint3.visible = true;
    memory3go = true;
    if (memory3done == true){
      hint3.visible = false;
      //memory1go = false;
    }
    
    }
    function nopapers(player, memory3){
    hint3.visible = false;  
    memory3go = false;
    }
    
    function khomus(player, memory4){
      hint4.visible = true;
      memory4go = true;
      if (memory4done == true){
        hint4.visible = false;
        //memory1go = false;
      }
      
      }
      function nokhomus(player, memory4){
      hint4.visible = false;  
      memory4go = false;
      }

      function oladji(player, memory5){
        hint5.visible = true;
        memory5go = true;
        if (memory5done == true){
          hint5.visible = false;
          //memory1go = false;
        }
        
        }
        function nooladji(player, memory5){
        hint5.visible = false;  
        memory5go = false;
        }
      

function mouseClicked(){

  //if (memorieslayer1.isPlaying()){
  //  memorieslayer1.play();
  //}

  if (mouseX > 307 && mouseX < 505 && mouseY > 365 && mouseY < 402){
    state = 2;
  }

  if (mouseX > 14 && mouseX < 47 && mouseY > 253 && mouseY < 303 || mouseX > 752 && mouseX < 782 && mouseY > 253 && mouseY < 303){
    memoryswitcher = !memoryswitcher;     
  }
 //if (mouseX > 14 && mouseX < 47 && mouseY > 253 && mouseY < 303){
    //memoryswitcher = !memoryswitcher;     
  //}
}
 function memories(){

 }

 
//function touchStarted(){
 // getAudioContext().resume();
//}

//function mouseReleased(){
 // if (memorieslayer1.isPlaying()){
   // memorieslayer1.pause();
   // memorieslayer2.pause();
 // }
  //else{
  //  memorieslayer1.play();
 // }
//}

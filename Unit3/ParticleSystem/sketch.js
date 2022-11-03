
let cars = [] ;
let cloud, player;
let walls;
let puddlesorrocks;
let wasd;

function preload(){
  cloud = new Sprite(mouseX, mouseY);
  cloud.addAnimation("cloud.png", );
  player = new Sprite(windowWidth/2, windowHeight/2, 150, 204);

  player.addAnimation("up", "ardakhup.png", {size: [204, 204], frames: 13});
  player.addAnimation("walk", "ardakhwalk.png", {size: [204, 204], frames: 13});
  player.addAnimation("down", "ardakh.png", {size: [204, 204], frames: 13});
  walls = new Sprite(400, 2, 800, 5, "static");
  walls = new Sprite(400, 600, 800, 5, "static");
  walls = new Sprite(2, 300, 5, 600, "static");
  walls = new Sprite(800, 300, 5, 600, "static");
  wasd = new Sprite(400, 300, "none");
wasd.addImage("wasd.png");
 // puddlesorrocks = new Group();
//	puddlesorrocks.addAni('puddle0', 'puddle1.png');
	//puddlesorrocks.addAni('puddle1', 'puddle2.png');
	//puddlesorrocks.addAni('puddle2', 'puddle3.png');
 // puddlesorrocks.collider = "none";

}


function setup() {
  createCanvas(800, 600);
	//for (let i = 0; i < 25; i++) {
		//let puddle = new puddlesorrocks.Sprite(random(windowWidth), random(windowHeight));
	//	puddle.ani = 'puddle' + (i % 3);}
  
    
  
}

function draw() {
  //puddlesorrocks.draw();
  //player.draw();
  movement();
  cloud.x = player.x;
  cloud.y = player.y - 250;
  //player.x = mouseX;
  //player.y = mouseY+250;
  background("#538a4e");
  fill("black");
  text(cars.length, 40, 40);

  cars.push(new Car()) ;

  for (let i = 0; i < cars.length; i++){
  cars[i].display();
  cars[i].move();
  if (cars[i].opacity < 0){
    cars.splice(i, 1);
  }

  }

}




class Car {

  // constructor
  constructor() {
    this.pos = createVector(random(player.x-40, player.x+40), player.y - 250);
    this.vel = createVector(0, random(1,6));
    this.r = (0);
    this.g = (100, 200);
    this.b = random(150, 255);
    this.opacity = random(155);
    
  }

  // methods

  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.opacity);
    rect(this.pos.x, this.pos.y, 3, 20);
  }

  move() {
    this.pos.add(this.vel);
    this.opacity -= 3;
  }
  
}
function movement(){
  if (kb.pressing("w")){
    player.ani = "up";
    player.vel.y = -3;
    //hint1.y = player.y;
  }
  else if (kb.pressing("s")){
    player.ani = "down";
    player.vel.y = 3;
    //hint1.y = player.y;
  }
  else {
    player.vel.y = 0;
    //hint1.y = player.y;
  }
  if (kb.pressing("d")){
   player.ani = "walk";
    player.mirror.x = false;
    player.vel.x = 3;
    //hint1.x = player.x;
  }
  else if (kb.pressing("a")){
   player.ani = "walk";
    player.mirror.x = true;
    player.vel.x = -3;
    //hint1.x = player.x;
  }
  else {
    player.vel.x = 0;
    //hint1.x = player.x;
  }
  if (kb.pressing('w') || kb.pressing('s') || kb.pressing('a') || kb.pressing('d')){
    player.ani.playing = true; 
    wasd.remove(); 
  }
  else {
    player.ani.playing = false;
  }

  //camera.x = player.x;
	//camera.y = player.y;
}

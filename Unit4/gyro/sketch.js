/* For mobile phones - accesses accelerometer and gyroscope.
Make sure you turn on orientation lock on your iPhone or Android device. */

let alpha = 0, beta = 0 , gamma = 0; // gyroscope variablers
let bunnyImage, backgroundimage;
let xPosition = 0;
let yPosition = 0;
let x = 0, y = 0, z = 0 ; // accelerometer data
let font1;
let ball, floor, shine, bounds;

function preload() {
  backgroundimage = loadImage("assets/background.png");
  shine = loadImage("assets/shine.png");
  font1 = loadFont('assets/AvenirLTStdBook.otf');
}

function setup() {

  createCanvas(400, 400);
	//world.gravity.y = 10;

	gems = new Group();
  //gems.shapeColor = 'white';
	gems.diameter = 20;
	gems.x = () => random(0, width);
	gems.y = () => random(0, height);
  gems.rotationLock = true;
	gems.amount = 150;


  bounds = new Sprite(145, 157, 105, 15, "static");
  bounds = new Sprite(305, 107, 105, 15, "static");
  bounds.rotation = -12;
  bounds = new Sprite(285, 257, 105, 15, "static");
  bounds.rotation = -45;

	floor = new Sprite(200, 400, 400, 5, "static");
  floor = new Sprite(200, 0, 400, 5, "static");
  floor = new Sprite(400, 200, 5, 400, "static");
  floor = new Sprite(0, 200, 5, 400, "static");

  bunnyImage = loadImage("assets/bunny.png");
  imageMode(CENTER);
  rectMode(CENTER);

}

function draw() {
  //gems.addImage("assets/shine.png");

  background('#c6f5ff'); // light blue
  textFont(font1);
  
  textSize(12);
  text(mouseX + ", " + mouseY, 120, 120);

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);

  // push(); // before you use translate, rotate, or scale commands, push and then pop after

  // translate(xPosition, yPosition); // move everything over by x, y

  // rotate(radians(alpha)); // rotate the bunny depending on the alpha intake
  

  // image(bunnyImage, 0, 0, 100, 100);
  // // rect(0, 0, 100, 100) ;
  // pop();


  // if (beta >= 30 && gamma >= -50 && gamma <= 50){
    //  world.gravity.y = yPosition;
    //  world.gravity.x = xPosition;
    gems.moveTowards(xPosition, yPosition, 0.05);
     image(backgroundimage, width/2, height/2);
  // }
  // if (beta <= -30 && gamma >= -50 && gamma <= 50){
  //   world.gravity.y = -10;
  // }

  // push();
  // translate(xPosition, yPosition);
  // world.gravity.y = 10;
  // world.gravity.x = 10;
  // pop();


  //Text commands that display debugging data
//   textAlign(LEFT);
//   textSize(20);
//   fill('black');
//   text("orientation data:", 25, 25);
//   textSize(15);
//   text("alpha: " + alpha, 25, 50);
//  text("beta: " + beta, 25, 70);
//   text("gamma: " + gamma, 25, 90);
//   textSize(20);
//   text("acceleration data:", 25, 125);
//   textSize(15);
  // text("x = " + x.toFixed(2), 25, 150); // .toFixed means just show (x) decimal places
  // text("y = " + y.toFixed(2), 25, 170);
  // text("z = " + z.toFixed(4), 25, 190);

  // Text that makes CTK type in the background
  fill('black');
  noStroke();
  //textSize(300);
  textAlign(CENTER);
 text("use your phone's gyroscope", width / 2, height / 2);

}



// Read in gyroscope data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});

// Read in accelerometer data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});

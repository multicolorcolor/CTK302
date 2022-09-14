let i1, i2, i3;

function setup() {
  createCanvas(500, 500);  
i1 = loadImage("assets/grass.jpg");
i2 = loadImage("assets/crack.jpg");
i3 = loadImage("assets/leaves.jpg");
imageMode(CENTER);
}

function draw(){
background(45);
image(i1, width / 2, height / 2 - 120, 200, 100);
image(i2, width / 2, height / 2, 200, 100);
image(i3, width / 2, height / 2 + 120, 200, 100);
}

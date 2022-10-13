//let myCar, myCar2;
let cars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn one object
  //myCar = new Car();
  //myCar2 = new Car();
  for (let i = 0; i < 100; i++) {
		cars.push(new Car());  // pushes onto an array called “cars”
		}

}

function draw() {
  background(100);

  //myCar.display();
  //myCar.move();
  //.display();
  //myCar2.move();
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
     }
  

}




class Car {

  // constructor and attributes
  constructor() {
    this.x = random(width);  // initialize your attributes here
    this.y = random(height);
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, random(1,6));
    this.r = (0);
    this.g = (100, 200);
    this.b = random(150, 255);
    this.width = random(1, 5);
    this.height = random(10, 40);
  }

  // methods

  display() {
    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, this.width, this.height);
    //circle(this.x+10, this.y+20, 20);
    //circle(this.x+50, this.y+20, 20);
    //ellipse(this.x+10, this.y+20, 20, 20);
    
    
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x>width) this.pos.x = 0;
    if (this.pos.x<0) this.pos.x = width;
    if (this.pos.y>height) this.pos.y = 0;
    if (this.pos.y<0) this.pos.y = height;
  }


  
}
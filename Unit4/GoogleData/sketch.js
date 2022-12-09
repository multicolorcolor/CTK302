var bubbles = [];
let url = "";

function setup() {
  let key = "1Mir68y1BUHe6QgDg9RKtSLRs29rmeUt3C6Lc_APZjQk"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(800, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["Cow or horse?"],
        data[i]["Color"],
        data[i]["Water, grass or forest?"],
        data[i]["Type anything"])); // THESE NEED TO MATCH SPREADSHEET
    
  }
}

function draw() {
  background("green");
  noStroke();
  fill("blue");
  quad(0, 0, 800, 0, 150, 35, 0, 15);
  bezier(0, 15, 150, 35, 650, 65, 800, 50);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(animal, favcolor, area, phrase) {
    // only the order of these parameters matters!
    this.animal = animal;
    this.favcolor = favcolor;
    this.area = area;
    this.phrase = phrase;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("red");
    noFill();
    ellipse(this.pos.x, this.pos.y+10, 20, 20);
    fill("white");
   // text(
    //  this.name + "\n" + this.happy + "\n" + this.thankful,
   //   this.pos.x,
   //   this.pos.y
   // );
  
  
    
  }
  
  
}

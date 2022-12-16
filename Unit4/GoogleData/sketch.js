var animals = [];
var clickedonanimal = false;
var makeintrodissapear = false;
let introopacity = 255;
let introopacity01 = 0;
let url = "";
let map;
let horseblack, horseblue, horsegreen, horsepink, horsered, horseyellow;
let cowblack, cowblue, cowgreen, cowpink, cowred, cowyellow;
let animalssetup = false;
let font1;

function preload(){
  map = loadImage("assets/greenmeadowmap.png");
  horseblack = loadImage("assets/horseblack.png");
  horseblue = loadImage("assets/horseblue.png");
  horsegreen = loadImage("assets/horsegreen.png");
  horsepink = loadImage("assets/horsepink.png");
  horsered = loadImage("assets/horsered.png");
  horseyellow = loadImage("assets/horseyellow.png");
  cowblack = loadImage("assets/cowblack.png");
  cowblue = loadImage("assets/cowblue.png");
  cowgreen = loadImage("assets/cowgreen.png");
  cowpink = loadImage("assets/cowpink.png");
  cowred = loadImage("assets/cowred.png");
  cowyellow = loadImage("assets/cowyellow.png");
  font1 = loadFont('assets/AvenirLTStdBook.otf');
}


function setup() {
  let key = "1Mir68y1BUHe6QgDg9RKtSLRs29rmeUt3C6Lc_APZjQk"; 

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; 

  loadJSON(url, gotData);

 
  createCanvas(800, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
  
}



function gotData(data) {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    animals.push(
      new Animal(
        data[i]["Cow or horse?"],
        data[i]["Color"],
        data[i]["Water, grass or forest?"],
        data[i]["Type anything"])); 
        
    
  }
  
}

function draw() {
  background("green");
  image(map, width/2, height/2);


  fill(255,255,255, introopacity01);
  textAlign(CENTER, CENTER);
  textSize(14);
  textFont(font1);
  text(
    "Appearance of each animal here is an avatar predefined by answers of survey participants \nClick on an animal to learn what participants chose to answer where they were \n prompted to type anything that comes to mind",
    406, 518, 730, 50
    );
  
    fill(255,255,255, introopacity);
    text(
      "Hello. Welcome to the Green Meadow. Click within this area to begin",
      406, 533, 730, 50
      );



  for (let i = 0; i < animals.length; i++) {
    animals[i].display(); 
    //animals[i].forestarea();
    //noLoop(); 
    // if (forestsetup == false){
    //   animals[i].forestarea();
    // }
    
  }


}

function mouseClicked(){
  for (let i = 0; i < animals.length; i++) {
    animals[i].clicked();
  }



}

// my Bubble class
class Animal {
  constructor(animal, favcolor, area, phrase) {
    // only the order of these parameters matters!
    this.animal = animal;
    this.favcolor = favcolor;
    this.opacity = 0;
    this.introopacity = 255;
    this.introopacity01 = 0;
    this.area = area;
    this.phrase = phrase;
    this.pos = createVector(random(-30, -35), random(-30, -35));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    if (this.animal == "Cow" && this.favcolor == "Black"){
      image(cowblack, this.pos.x, this.pos.y)
    }
    if (this.animal == "Cow" && this.favcolor == "Blue"){
      image(cowblue, this.pos.x, this.pos.y)
    }
    if (this.animal == "Cow" && this.favcolor == "Green"){
      image(cowgreen, this.pos.x, this.pos.y)
    }
    if (this.animal == "Cow" && this.favcolor == "Pink"){
      image(cowpink, this.pos.x, this.pos.y)
    }
    if (this.animal == "Cow" && this.favcolor == "Red"){
      image(cowred, this.pos.x, this.pos.y)
    }
    if (this.animal == "Cow" && this.favcolor == "Yellow"){
      image(cowyellow, this.pos.x, this.pos.y)
    }

    if (this.animal == "Horse" && this.favcolor == "Black"){
      image(horseblack, this.pos.x, this.pos.y)
    }
    if (this.animal == "Horse" && this.favcolor == "Blue"){
      image(horseblue, this.pos.x, this.pos.y)
    }
    if (this.animal == "Horse" && this.favcolor == "Green"){
      image(horsegreen, this.pos.x, this.pos.y)
    }
    if (this.animal == "Horse" && this.favcolor == "Pink"){
      image(horsepink, this.pos.x, this.pos.y)
    }
    if (this.animal == "Horse" && this.favcolor == "Red"){
      image(horsered, this.pos.x, this.pos.y)
    }
    if (this.animal == "Horse" && this.favcolor == "Yellow"){
      image(horseyellow, this.pos.x, this.pos.y)
    }

    fill(255,255,255, this.opacity);
    textAlign(CENTER, CENTER);
    textSize(14);
    text(
      this.phrase,
      406, 533, 730, 50
      );

      noStroke();
      //let t = "Hello. Welcome to the Green Meadow. \nClick within this area to begin"



    
  }

  forestarea()
  {
    if (this.area == "Forest"){
      this.pos.x = random(700, 750);
      this.pos.y = random(30, 472);
      //noLoop()  
      // animalssetup = true;  
    }
  }

  waterarea()
  {
    if (this.area == "Water"){
      this.pos.x = random(35, 321);
      this.pos.y = random(250, 330);
      //noLoop()
    }
  }

  grassarea()
  {
    if (this.area == "Grass"){
      this.introopacity01 = 255;
      this.pos.x = random(450, 550);
      this.pos.y = random(30, 450);
      //noLoop()
      
    }
  }

  clicked(){
      if (animalssetup == false && mouseX > 24 && mouseX < 780 && mouseY > 496 && mouseY < 571){
      this.forestarea();
      this.waterarea();
      this.grassarea();
      introopacity = 0;
      
      //  if (clickedonanimal == false){
      //   this.introopacity01 = 0;
      //  }
      //  else if (clickedonanimal == true){
      introopacity01 = 255;
      //  }
      
      //forestsetup = true;
    }
    if (mouseX > this.pos.x - 30 && mouseX < this.pos.x +30 && mouseY > this.pos.y - 30&& mouseY < this.pos.y + 30){
      introopacity01 = 0;
      clickedonanimal = !clickedonanimal;  
    
     
        if (clickedonanimal == true){
          //this.col = color("yellow");
          this.opacity = 255;
          
          animalssetup = true; 
          makeintrodissapear = true;
          // if (makeintrodissapear == true){
          //   this.introopacity01 = 0;
          // }
          
       
        }
        else if(clickedonanimal == false){
          //this.col = color("white");
          this.opacity = 0;
          
        }

    }

    else{
      this.opacity = 0;
      //this.introopacity01 = 0;
    }
  }

  
  
}

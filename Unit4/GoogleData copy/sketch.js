var internationalstudents = [];
var clickedonstudent = false;
let url = "";
let map, countryinfo;

function preload(){
  map = loadImage("assets/map.jpg");
}

function setup() {
  let key = "1Em0jhcg5xkCC1EAeIOPTjRsI-H6LwOBLGkZ_i1C9Vpc"; 

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; 

  loadJSON(url, gotData);


  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
}


function gotData(data) {
  console.log(data); 
  for (let i = 0; i < data.length; i++) {
    internationalstudents.push(
      new InternationalStudent(
        data[i]["Country"],
        data[i]["Mention one thing you miss about your home country? e.g food"])); // 
    
  }
}

function draw() {
  background("#eaddcd");
  image(map, width/2, height/2);
  map.resize(1280, 720);
  fill(255);
  textSize(12);
  text(mouseX + ", " + mouseY, 120, 120);
  for (let i = 0; i < internationalstudents.length; i++) {
    internationalstudents[i].display();
  }
}
function mouseClicked(){
  for (let i = 0; i < internationalstudents.length; i++) {
    internationalstudents[i].clicked();
  }
}



class InternationalStudent {
  constructor(nationality, memory) {

    this.nationality = nationality;
    this.memory = memory;
    this.col = color("white");
    this.opacity = 0;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    noStroke();
    fill(this.col);
    rect(this.pos.x, this.pos.y, 20, 20);
    fill(255, 255, 255, this.opacity);
    rect( width/2, height/2, 250, 250)
    fill(0,0,0, this.opacity);
    //textWrap(WORD);
    text(
      this.nationality + "\n" + this.memory,
      width/2,
      height/2, 175, 175
      );

      if (this.nationality == "Ghana"){
        //this.col = color("blue");
      }

      if (this.nationality == "Nigeria"){
        //this.col = color("blue");
      }

      if (this.nationality == "India"){
        //this.col = color("blue");
      }

      if (this.nationality == "Kenya"){
        //this.col = color("blue");
      }

      if (this.nationality == "Brazilia"){
        //this.col = color("blue");
      }

      if (this.nationality == "Sakha"){
        this.col = color("blue");
      }

  }

  
  clicked(){
    if (mouseX > this.pos.x - 10 && mouseX < this.pos.x +10 && mouseY > this.pos.y - 10 && mouseY < this.pos.y + 10){
      clickedonstudent = !clickedonstudent;  
     
        if (clickedonstudent == true){
          this.col = color("yellow");
          this.opacity = 255;
        }
        else if(clickedonstudent == false){
          this.col = color("white");
          this.opacity = 0;
        }
    }


    
  }
  

}





var internationalstudents = [];
var clickedonstudent = false;
var clickedonbrazilstudent = false;
let url = "";
let map, countryinfo, redbird;
let countrycolor;

function preload(){
  map = loadImage("assets/map.jpg");
  redbird = loadImage("assets/redbird.png")
}

function setup() {
  let key = "1Em0jhcg5xkCC1EAeIOPTjRsI-H6LwOBLGkZ_i1C9Vpc"; 

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; 

  loadJSON(url, gotData);


  createCanvas(1280, 720);
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
  //Brazil info
  if (mouseX > 532 && mouseX < 604 && mouseY > 468 && mouseY < 501){
    let t = '              Brazil \n\nMotto: "Ordem e Progresso" \nAnthem: "Hino Nacional Brasileiro" \nCapital: Brasília \nPopulation: 217240060 \nOfficial and nationally recognized languages: \nPortuguese';
fill(50);
textAlign(LEFT);
text(t, 148, 481, 130, 180);
    } 
  //Ghana info
  else if (mouseX > 680 && mouseX < 752 && mouseY > 311 && mouseY < 341){
    let t = '             Ghana \n\nMotto: "Freedom and Justice" \nAnthem: "God Bless Our Homeland Ghana" \nCapital: Accra \nPopulation: 32103042 \nOfficial and nationally recognized languages: \nEnglish, Dagaare, Dagbanli, Dangme, Ewe, Frafra, Ga, Gonja, Nzema, Twi, Fante, Ghanaian Sign Language';
fill(50);
textAlign(LEFT);
text(t, 148, 500, 130, 240);
    } 
  //Nigeria info
  else if (mouseX > 749 && mouseX < 816 && mouseY > 343 && mouseY < 371){
    let t = '              Nigeria \n\nMotto: "Unity and Faith, Peace and Progress" \nAnthem: "Arise, O Compatriots" \nCapital: Abuja \nPopulation: 225082083 \nOfficial and nationally recognized languages: \nEnglish, Hausa, Yoruba, Igbo';
    fill(50);
    textAlign(LEFT);
    text(t, 148, 481, 130, 180);
    } 
  //Kenya info
  else if (mouseX > 821 && mouseX < 892 && mouseY > 386 && mouseY < 419){
    let t = '              Kenya \n\nMotto: "Harambee" \nAnthem: "Ee Mungu Nguvu Yetu" \nCapital: Nairobi \nPopulation: 55864655 \nOfficial and nationally recognized languages: \nSwahili, English';
    fill(50);
    textAlign(LEFT);
    text(t, 148, 481, 130, 180);
    } 
  //India info
  else if (mouseX > 981 && mouseX < 1052 && mouseY > 297 && mouseY < 333){
    let t = '              India \n\nMotto: "Satyameva Jayate" \nAnthem: "Jana Gana Mana" \nCapital: New Delhi \nPopulation: 1375586000 \nOfficial and nationally recognized languages: \nHindi, English and 447 native languages';
    fill(50);
    textAlign(LEFT);
    text(t, 148, 481, 130, 180);
    } 
  //Sakha info
  else if (mouseX > 1040 && mouseX < 1111 && mouseY > 146 && mouseY < 178){
    let t = '              Sakha \n\nMotto:  \nAnthem: "State Anthem of the Sakha Republic" \nCapital: Yakutsk \nPopulation: 995686 \nOfficial and nationally recognized languages: \nSakha, russian';
    fill(50);
    textAlign(LEFT);
    text(t, 148, 481, 130, 180);
    } 

  //default info in text box
  else{
    let t = 'Hover over the country icons to see the short information \n\nAnd click on them to learn more about international students from ISU who answered our survey \n\nStudents icons are clickable too';
    fill(50);
    textAlign(LEFT);
    text(t, 148, 481, 130, 180);
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
    this.studentopacity = 0;
    this.pos = createVector(random(-241, -300), random(-40, -675));
    //this.brazilpos = createVector(random(524,616), random(445,462));
    //this.ghanapos = createVector(random(672,753), random(293,309));
    //this.vel = createVector(random(2, 5), 0);
  }

  display() {
    noStroke();
    fill(0,0,0, this.studentopacity);
    image(redbird, this.pos.x, this.pos.y)
    // rect(this.pos.x, this.pos.y, 10, 10);

    fill(255, 255, 255, this.opacity);
    rect( 143, 229, 250, 250)
    fill(0,0,0, this.opacity);
    textAlign(CENTER);
    text(
      this.memory,
      143, 229, 175, 175
      );




  }

  brazilclicked(){
      if (this.nationality == "Brazil"){
         this.pos.x = random(524, 616);
         this.pos.y = random(433, 462);
         this.studentopacity = 255;
       }
  }
  ghanaclicked(){
  if (this.nationality == "Ghana"){
     this.pos.x = random(629, 745);
     this.pos.y = random(345, 400);
     this.studentopacity = 255;
   }
  }
  nigeriaclicked(){
  if (this.nationality == "Nigeria"){
     this.pos.x = random(755, 827);
     this.pos.y = random(309, 340);
     this.studentopacity = 255;
   }
  }
  kenyaclicked(){
    if (this.nationality == "Kenya"){
       this.pos.x = random(820, 900);
       this.pos.y = random(422, 450);
       this.studentopacity = 255;
     }
    }
  indiaclicked(){
    if (this.nationality == "India"){
       this.pos.x = random(975, 1058);
       this.pos.y = random(333, 371);
       this.studentopacity = 255;
     }
    }
  sakhaclicked(){
    if (this.nationality == "Sakha"){
       this.pos.x = random(1031, 1112);
       this.pos.y = random(126, 140);
       this.studentopacity = 255;
     }
    }

  clicked(){

    
    if (mouseX > this.pos.x - 10 && mouseX < this.pos.x +10 && mouseY > this.pos.y - 10&& mouseY < this.pos.y + 10){
      clickedonstudent = !clickedonstudent;  
     
        if (clickedonstudent == true){
          //this.col = color("yellow");
          this.opacity = 255;
        }
        else if(clickedonstudent == false){
          //this.col = color("white");
          this.opacity = 0;
        }
    }
    else if (mouseX > 532 && mouseX < 604 && mouseY > 468 && mouseY < 501){
           this.brazilclicked()
         }
    else if (mouseX > 680 && mouseX < 752 && mouseY > 311 && mouseY < 341){
      this.ghanaclicked()
    }
    else if (mouseX > 749 && mouseX < 816 && mouseY > 343 && mouseY < 371){
      this.nigeriaclicked()
    }
    else if (mouseX > 821 && mouseX < 892 && mouseY > 386 && mouseY < 419){
      this.kenyaclicked()
    }
    else if (mouseX > 981 && mouseX < 1052 && mouseY > 297 && mouseY < 333){
      this.indiaclicked()
    }
    else if (mouseX > 1040 && mouseX < 1111 && mouseY > 146 && mouseY < 178){
      this.sakhaclicked()
    }
    else{
      this.opacity = 0;
    }


    


    
  }
  

}

// function mouseClicked(){
//   if (mouseX > 532 && mouseX < 604 && mouseY > 468 && mouseY < 501){
//     InternationalStudent.brazilclicked()
//   }
// }



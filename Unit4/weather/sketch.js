// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let temperature = 0;
let humidity = 0;
let answer;
let fog, unty;
let font1;

function preload() {
  fog = loadImage("assets/fog.png");
  unty = loadImage("assets/unty.png");
  font1 = loadFont('assets/AvenirLTStdBook.otf');
}

function setup() {
  createCanvas(800, 600);
  //imageMode(CENTER);

  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Yakutsk,RU&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US
 

 // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx
  
  let myIDString = "appid=b25b7a3e523f2047d0511d8c1f09063d" ;

  let myTotalString = myCityString + myIDString;
  

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp + "F";
  humidity = weather.main.humidity;

}

function draw() {

  
  switch (state) {
      
    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      let bg = 0;
      // if(temperature < 50){
      //   bg = map(temperature, 0, 50, 0, 255);
      //   background(0, 0, bg);

      // }
      // else{
      //   bg = map(temperature, 50, 100, 0, 255);
      //   background(bg, 0, 0);

      // }
      //temp = map(0, 100, )
    
      // else if (temperature = 6){
      //   answer = "Not yet!"
      // }
      background("white");
      image(fog, x, 250);
      image(unty, 0, 0);
      //fill(255);
  
      
      
      fill("black");
      textAlign(CENTER, CENTER);
      textFont(font1);
      text("Is it time to wear UNTY* in Yakutsk yet?", 554, 82);
      text(answer, 554, 102);
      //text(answer + "windspeed is " + windspeed, 20, 40);
      text("Because the temperature is " + temperature, 554, 122);
      text("You can start wearing UNTY \neven when it's just 5F", 554, 154);
      text("Current humidity is " + humidity + "%", 554, 184);
      text("And the windspeed is " + windspeed, 554, 204);
      text("*Sakha traditional warm footwear. Made from deer or cow hide", 243, 567);
      if (weather.main.temp < 5){
        answer = "YES!"
       }
      else if (weather.main.temp > 5){
        answer = "Not yet"
       }

      // cloud
      // fill("white");
      // noStroke();
      // ellipse(x, 300, 200, 100);
      

      // move the cloud's x position
      x = x + windspeed / 16;
      if (x > 435) x = -107;

      break;
  }
}

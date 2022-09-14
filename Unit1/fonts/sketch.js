let f1, f2, f3;

function setup() {
  createCanvas(500, 500);  
f1 = loadFont("assets/typewriter.ttf");
f2 = loadFont("assets/cupid.ttf");
f3 = loadFont("assets/report.ttf");
textAlign(CENTER);
}

function draw(){
background(0);
fill(255);
textFont(f1, 24);
text("min  aatwm", width / 2, 100);
textFont(f2, 28);
text("[sargwlaana]", width / 2, 200);
textFont(f3, 24);
text("cerepanoba", width / 2, 300);

}

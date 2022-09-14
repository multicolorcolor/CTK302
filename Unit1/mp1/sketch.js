//let idleskincolor()

let upleftlegX = 0;
let uprightlegX = 0;
let lowerleftlegX3 = 0;
let lowerleftlegY3 = 0;
let lowerleftlegX4 = 0;
let lowerleftlegY4 = 0;
//var SkinLtR;

let leaffallXlayer1 = 0;
let leaffallYlayer1 = 0;
let leaffallXlayer2 = 0;
let leaffallYlayer2 = 0;

//apparently shoes are the hardest to animate LOL
let leftshoebaseX1 = 0;
let leftshoebaseY1 = 0;
let leftshoebaseX2 = 0;
let leftshoebaseY2 = 0;
let leftshoebaseX3 = 0;
let leftshoebaseY3 = 0;
let leftshoebaseX4 = 0;
let leftshoebaseY4 = 0;
let leftshoeinsoleX1 = 0;
let leftshoeinsoleX2 = 0;
let leftshoeinsoleX3 = 0;
let leftshoeinsoleX4 = 0;
let leftshoeinsoleY1 = 0;
let leftshoeinsoleY2 = 0;
let leftshoeinsoleY3 = 0;
let leftshoeinsoleY4 = 0;
let leftshoetoeX1 = 0;
let leftshoetoeY1 = 0;
let leftshoetoeX2 = 0;
let leftshoetoeY2 = 0;
let leftshoetoeX3 = 0;
let leftshoetoeY3 = 0;
let leftshoetoeX4 = 0;
let leftshoetoeY4 = 0;

let rightshoebaseX3 = 0;

let leftarmX3 = 0;
let leftarmX4 = 0;


//variables for idle animation
let idleupleftlegX = 0;
let idleuprightlegX = 0;
let idlerightshoebaseX3 = 0;
let idleleftarmX3 = 0;
let idleleftarmX4 = 0;

let moveright = 0;
let moveleft = 0;

let bodyx1;
let bodyy1;
let bodyx2;
let bodyy2;
//let [suorx1, suorx2, suorx3, suorx4];
let clicked = false;
var clickedoncharacterinfo;
let characterinfobutton = false;
let tutorial = true;
let characterinfo = false;
let charactertext;


anim = 0

let fr = 30;

function preload(){
  charactertext = loadStrings('suorij.txt');
}

function setup() {
  createCanvas(720, 400);
  frameRate(fr);
  //SkinLtR1 = color("#ffcdba");
  //fill("black");
  //body = quad(75, 56, 160, 57, 165, 384,78, 381);
  //body.mousePressed(reaction);
  bodyx1 = 75;
  bodyx2 = 161;
  bodyy1 = 61;
  bodyy2 = 383;
  
  //clicked = false;
 
}

function draw() {
  //console.log(frameCount);
  background(220);
 
  
  fill(255);
  textSize(12);
  text(mouseX + ", " + mouseY, 20, 20);
  
  //COLORS FOR ANIMATED FIGURE LTR
  let SkinLtR1 = color("#ffcdba");
  let SkinLtR2 = color("#f5bba5");
  let NeckLtR = color("#eeb29b");
  let BlackLtR = color("#000");
  let JacketLtR = color("#82afd6");
  let DressLtR = color("#485159");
  let LeggingsLtR = color("#686071");
  let LeggingsLtR2 = color("#5e5766");
  let LeavesLtR = color("#72953f");
  
  //COLORS FOR IDLE ANIMATED FIGURE LTR 
  let IdleSkinLtR1 = color("#ffcdba");
  let IdleSkinLtR2 = color("#f5bba5");
  let IdleNeckLtR = color("#eeb29b");
  let IdleBlackLtR = color("#000");
  let IdleJacketLtR = color("#82afd6");
  let IdleDressLtR = color("#485159");
  let IdleLeggingsLtR = color("#686071");
  let IdleLeggingsLtR2 = color("#5e5766");
  let IdleLeavesLtR = color("#72953f");
  
  //COLORS FOR ANIMATED FIGURE RTL
  let SkinRtL1 = color("#ffcdba");
  let SkinRtL2 = color("#f5bba5");
  let NeckRtL = color("#eeb29b");
  let BlackRtL = color("#000");
  let JacketRtL = color("#82afd6");
  let DressRtL = color("#485159");
  let LeggingsRtL = color("#686071");
  let LeggingsRtL2 = color("#5e5766");
  let LeavesRtL = color("#72953f");
  
  //COLORS FOR IDLE ANIMATED FIGURE RTL
  let IdleSkinRtL1 = color("#ffcdba");
  let IdleSkinRtL2 = color("#f5bba5");
  let IdleNeckRtL = color("#eeb29b");
  let IdleBlackRtL = color("#000");
  let IdleJacketRtL = color("#82afd6");
  let IdleDressRtL = color("#485159");
  let IdleLeggingsRtL = color("#686071");
  let IdleLeggingsRtL2 = color("#5e5766");
  let IdleLeavesRtL = color("#72953f");
  
  SkinLtR1.setAlpha(0);
  SkinLtR2.setAlpha(0);
  NeckLtR.setAlpha(0);
  BlackLtR.setAlpha(0);
  JacketLtR.setAlpha(0);
  DressLtR.setAlpha(0);
  LeggingsLtR.setAlpha(0);
  LeggingsLtR2.setAlpha(0);
  LeavesLtR.setAlpha(0);
  
  SkinRtL1.setAlpha(0);
  SkinRtL2.setAlpha(0);
  NeckRtL.setAlpha(0);
  BlackRtL.setAlpha(0);
  JacketRtL.setAlpha(0);
  DressRtL.setAlpha(0);
  LeggingsRtL.setAlpha(0);
  LeggingsRtL2.setAlpha(0);
  LeavesRtL.setAlpha(0);
  //print(alpha1);
  
  if (keyIsDown(68)){
  SkinLtR1.setAlpha(255);
  SkinLtR2.setAlpha(255);
  NeckLtR.setAlpha(255);
  BlackLtR.setAlpha(255);
  JacketLtR.setAlpha(255);
  DressLtR.setAlpha(255);
  LeggingsLtR.setAlpha(255);
  LeggingsLtR2.setAlpha(255);
  LeavesLtR.setAlpha(255);
    
  IdleSkinLtR1.setAlpha(0);
  IdleSkinLtR2.setAlpha(0);
  IdleNeckLtR.setAlpha(0);
  IdleBlackLtR.setAlpha(0);
  IdleJacketLtR.setAlpha(0);
  IdleDressLtR.setAlpha(0);
  IdleLeggingsLtR.setAlpha(0);
  IdleLeggingsLtR2.setAlpha(0);
  IdleLeavesLtR.setAlpha(0);  
    moveright = moveright + 1;
  }
  
  if (keyIsDown(65)){
  SkinRtL1.setAlpha(255);
  SkinRtL2.setAlpha(255);
  NeckRtL.setAlpha(255);
  BlackRtL.setAlpha(255);
  JacketRtL.setAlpha(255);
  DressRtL.setAlpha(255);
  LeggingsRtL.setAlpha(255);
  LeggingsRtL2.setAlpha(255);
  LeavesRtL.setAlpha(255);
    
  IdleSkinLtR1.setAlpha(0);
  IdleSkinLtR2.setAlpha(0);
  IdleNeckLtR.setAlpha(0);
  IdleBlackLtR.setAlpha(0);
  IdleJacketLtR.setAlpha(0);
  IdleDressLtR.setAlpha(0);
  IdleLeggingsLtR.setAlpha(0);
  IdleLeggingsLtR2.setAlpha(0);
  IdleLeavesLtR.setAlpha(0);  
    moveleft = moveleft - 1;
  }
  
  //if (keyReleased(65)){
  //IdleSkinLtR1.setAlpha(0);
  //IdleSkinLtR2.setAlpha(0);
  //IdleNeckLtR.setAlpha(0);
  //IdleBlackLtR.setAlpha(0);
  //IdleJacketLtR.setAlpha(0);
  //IdleDressLtR.setAlpha(0);
  //IdleLeggingsLtR.setAlpha(0);
  //IdleLeggingsLtR2.setAlpha(0);
  //IdleLeavesLtR.setAlpha(0); 
  //return false;  
  //}
  
  //forest
  fill("#000");
  bezier(-15, 252, 0, 204, 29, 212, 55, 250);
  bezier(-15, 252, 51, 215, 129, 215, 180, 250);
  bezier(386, 250, 505, 216, 606, 217, 599, 253);
  bezier(572, 248, 600, 225, 638, 224, 644, 245);
  bezier(630, 248, 652, 219, 750, 225, 800, 252);
  bezier(617, 253, 650, 203, 675, 219, 691, 249);
  
  //grass
  fill("#35523d");
  quad(0, 241, 720, 241, 720, 400, 0, 400);
  
  //moon
  fill(255);
  quad(528, 52, 540, 56, 545, 84, 528, 91);
  noFill();
  stroke(255);
  strokeWeight(6);
  bezier(518, 48, 533, 56, 533, 78, 523, 95);
  bezier(518, 48, 553, 48, 553, 90, 523, 95);
  noStroke();
  
  
  
  //WALKING ANIMATION FROM LEFT TO RIGHT
  
  //antlers
  noFill();
  stroke(BlackLtR);
  strokeWeight(3);
  
  //right antler
  bezier(121+ moveright + moveleft, 64, 170+ moveright + moveleft, 64, 223+ moveright + moveleft, 68, 238+ moveright + moveleft, 30);
  bezier(156+ moveright + moveleft, 62, 154+ moveright + moveleft, 53, 146+ moveright + moveleft, 46, 130+ moveright + moveleft, 48);
  bezier(180+ moveright + moveleft, 62, 182+ moveright + moveleft, 40, 170+ moveright + moveleft, 31, 156+ moveright + moveleft, 27);
  bezier(209+ moveright + moveleft, 55, 211+ moveright + moveleft, 44, 205+ moveright + moveleft, 38, 196+ moveright + moveleft, 35);
  
  //left antler
  bezier(121+ moveright + moveleft, 64, 72+ moveright + moveleft, 64, 19+ moveright + moveleft, 68, 4+ moveright + moveleft, 30);
  bezier(86+ moveright + moveleft, 62, 88+ moveright + moveleft, 53, 96+ moveright + moveleft, 46, 103+ moveright + moveleft, 45);
  bezier(62+ moveright + moveleft, 62, 60+ moveright + moveleft, 40, 72+ moveright + moveleft, 31, 86+ moveright + moveleft, 15);
  bezier(33+ moveright + moveleft, 55, 31+ moveright + moveleft, 44, 37+ moveright + moveleft, 38, 46+ moveright + moveleft, 37);
   
  noStroke();
  
  //suor
  fill(BlackLtR);
  bezier(67 + moveright + moveleft, 61, 68 + moveright + moveleft, 33, 100 + moveright + moveleft, 50, 73 + moveright + moveleft, 63);
  circle(82 + moveright + moveleft, 44, 10);
  triangle(83 + moveright + moveleft, 40, 90 + moveright + moveleft, 44, 83 + moveright + moveleft, 49);
  quad(68 + moveright + moveleft, 53, 70 + moveright + moveleft, 63, 68 + moveright + moveleft, 75, 62 + moveright + moveleft, 74);
  
  
  //leaves
  fill(LeavesLtR);
  bezier(74 + moveright + moveleft + leaffallXlayer1, 27 + leaffallYlayer1, 53 + moveright + moveleft + leaffallXlayer1, 29 + leaffallYlayer1, 69 + moveright + moveleft + leaffallXlayer1, 16 + leaffallYlayer1, 74 + moveright + moveleft + leaffallXlayer1, 27 + leaffallYlayer1);
  bezier(86 + moveright + moveleft, 14, 103 + moveright + moveleft, 9, 105 + moveright + moveleft, 22, 86 + moveright + moveleft, 14);
  bezier(36 + moveright + moveleft, 39, 18 + moveright + moveleft, 33, 38 + moveright + moveleft, 26, 36 + moveright + moveleft, 39);
  bezier(140 + moveright + moveleft, 46, 137 + moveright + moveleft, 36, 158 + moveright + moveleft, 42, 140 + moveright + moveleft, 46);
  bezier(162 + moveright + moveleft, 27, 162 + moveright + moveleft, 12, 186 + moveright + moveleft, 16, 162 + moveright + moveleft, 27);
  bezier(179 + moveright + moveleft + leaffallXlayer1, 50 + leaffallYlayer1, 163 + moveright + moveleft + leaffallXlayer1, 60 + leaffallYlayer1, 166 + moveright + moveleft + leaffallXlayer1, 45 + leaffallYlayer1, 179 + moveright + moveleft + leaffallXlayer1, 50 + leaffallYlayer1);
  bezier(206 + moveright + moveleft, 39, 209 + moveright + moveleft, 23, 234 + moveright + moveleft, 41,206 + moveright + moveleft, 39);
  bezier(14 + moveright + moveleft + leaffallXlayer2, 45 + leaffallYlayer2, 0 + moveright + moveleft + leaffallXlayer2, 41 + leaffallYlayer2, 0 + moveright + moveleft + leaffallXlayer2, 61 + leaffallYlayer2, 14 + moveright + moveleft + leaffallXlayer2, 45 + leaffallYlayer2);
  bezier(237 + moveright + moveleft + leaffallXlayer2, 33 + leaffallYlayer2, 248 + moveright + moveleft + leaffallXlayer2, 23 + leaffallYlayer2, 260 + moveright + moveleft + leaffallXlayer2, 42 + leaffallYlayer2, 237 + moveright + moveleft + leaffallXlayer2, 33 + leaffallYlayer2);
  bezier(41 + moveright + moveleft, 61, 26 + moveright + moveleft, 73, 43 + moveright + moveleft, 85, 41 + moveright + moveleft, 61);
  bezier(95 + moveright + moveleft, 65, 76 + moveright + moveleft, 69, 86 + moveright + moveleft, 79, 95 + moveright + moveleft, 65);
  bezier(163 + moveright + moveleft, 65, 164 + moveright + moveleft, 82, 188 + moveright + moveleft, 78, 163 + moveright + moveleft, 65);
  bezier(218 + moveright + moveleft, 52, 236 + moveright + moveleft, 69, 242 + moveright + moveleft, 53, 218 + moveright + moveleft, 52);
  
  //hair
  fill(BlackLtR);
  bezier(107 + moveright + moveleft, 95, 92 + moveright + moveleft, 78, 104 + moveright + moveleft, 48, 125 + moveright + moveleft, 60);
  bezier(116 + moveright + moveleft, 69, 80 + moveright + moveleft, 94, 90 + moveright + moveleft, 115, 118 + moveright + moveleft, 123);
  bezier(111 + moveright + moveleft, 58, 157 + moveright + moveleft, 55, 140 + moveright + moveleft, 125, 111 + moveright + moveleft, 119);
  
  //legs
  //right leg
  fill(LeggingsLtR2);
  quad(133 + moveright + moveleft, 220, 152 + moveright + moveleft, 212, 148 + moveright + moveleft + uprightlegX, 256, 134 + moveright + moveleft + uprightlegX, 264);//upper right leg
  ellipse(141 + moveright + moveleft + uprightlegX, 260, 15, 38); //knee
  quad(134 + moveright + moveleft + uprightlegX, 263, 147 + moveright + moveleft + uprightlegX, 261, 143 + moveright + moveleft, 341, 131 + moveright + moveleft, 340); //lower right leg
  bezier(147 + moveright + moveleft + uprightlegX, 261, 123 + moveright + moveleft + uprightlegX, 276, 126 + moveright + moveleft, 313, 143 + moveright + moveleft, 341); //lower right leg muscle
 bezier(137 + moveright + moveleft + uprightlegX, 259, 130 + moveright + moveleft + uprightlegX, 244, 127 + moveright + moveleft, 216, 131 + moveright + moveleft, 207);//muscle
  
  //left leg
  fill(LeggingsLtR); 
  quad(99 + moveright + moveleft, 228, 125 + moveright + moveleft, 221, 120 + upleftlegX + moveright + moveleft, 262, 101 + upleftlegX + moveright + moveleft, 265); // upper left leg
  ellipse(112 + moveright + moveleft + upleftlegX, 264, 16, 30);
  quad(101 + moveright + moveleft + upleftlegX, 264, 118 + moveright + moveleft + upleftlegX, 269, 103 + moveright + moveleft - lowerleftlegX3, 351 - lowerleftlegY3, 92 + moveright + moveleft - lowerleftlegX4, 350 - lowerleftlegY4);//lower left leg
  bezier(118 + moveright + moveleft + upleftlegX, 269, 91 + moveright + moveleft + upleftlegX, 266, 88 + moveright + moveleft, 314, 103 + moveright + moveleft - lowerleftlegX4, 351 - lowerleftlegY4);//lower left leg muscle
  //I might consider adding dedicated variables for this muscle if I'll have time
  
  //shoes
  fill(BlackLtR);
  //rightshoe
  quad(128 + moveright + moveleft, 338, 143 + moveright + moveleft, 338, 144 + moveright + moveleft - rightshoebaseX3, 362, 128 + moveright + moveleft - rightshoebaseX3, 362); //right shoe
  quad(128 + moveright + moveleft - rightshoebaseX3, 362, 157 + moveright + moveleft - rightshoebaseX3, 364, 158 + moveright + moveleft - rightshoebaseX3, 375 , 130 + moveright + moveleft - rightshoebaseX3, 373); //NEW coordinates 
  bezier(129 + moveright + moveleft, 363, 135 + moveright + moveleft, 338, 150 + moveright + moveleft, 355, 156 + moveright + moveleft, 366);
  
  //left shoe
  quad(89 + moveright + moveleft - leftshoebaseX1, 348 - leftshoebaseY1, 104 + moveright + moveleft - leftshoebaseX2, 348 - leftshoebaseY2, 105 + moveright + moveleft - leftshoebaseX3, 372 - leftshoebaseY3, 87 + moveright + moveleft - leftshoebaseX4, 372 - leftshoebaseY4);// left shoe ALSO new coordinates for x4y4 - 74, 358; x3y3 - 92, 363(13,9)
  quad(87 + moveright + moveleft - leftshoeinsoleX1, 372 - leftshoeinsoleY1, 118 + moveright + moveleft - leftshoeinsoleX2, 374 - leftshoeinsoleY2, 119 + moveright + moveleft - leftshoeinsoleX3, 385 - leftshoeinsoleY3, 88 + moveright + moveleft - leftshoeinsoleX4, 382 - leftshoeinsoleY4);//left shoe insole ALSO new coordinates x1y1 - 74, 358, x4y4 - 74, 368, x3y3 106, 383, x2y2 - 106,373
  bezier(90 + moveright + moveleft - leftshoetoeX1, 373 - leftshoetoeY1, 96 + moveright + moveleft - leftshoetoeX2, 343 - leftshoetoeY2, 111 + moveright + moveleft - leftshoetoeX3, 365 - leftshoetoeY3, 117 + moveright + moveleft - leftshoetoeX4, 376 - leftshoetoeY4); //left shoe toe, NEW coordinates x1y1 - 82,365  x2y2 - 86,353  x3y3 - 100,361(might just leave it), x4y4 - 106,373
 
  //right hand
  fill(SkinLtR2);
  quad(133 + moveright + moveleft, 154, 145 + moveright + moveleft, 152, 156 + moveright + moveleft + leftarmX3, 192, 150 + moveright + moveleft + leftarmX3, 195);
  quad(150 + moveright + moveleft + leftarmX3, 195, 156 + moveright + moveleft + leftarmX3, 192, 165 + moveright + moveleft + leftarmX3, 204, 157 + moveright + moveleft + leftarmX3, 213);
  quad(157 + moveright + moveleft + leftarmX3, 212, 165 + moveright + moveleft + leftarmX3, 204, 162 + moveright + moveleft + leftarmX3, 215, 158 + moveright + moveleft + leftarmX3, 222);
  
  //piece of jacket
  fill(JacketLtR);
  quad(129 + moveright + moveleft, 108, 135 + moveright + moveleft, 108, 146 + moveright + moveleft, 153, 134 + moveright + moveleft, 158);
  bezier(138 + moveright + moveleft, 108, 147 + moveright + moveleft, 117, 144 + moveright + moveleft, 127, 138 + moveright + moveleft, 145);
  
  //neck
  fill(NeckLtR);
  quad(113 + moveright + moveleft, 91, 125 + moveright + moveleft, 91, 126 + moveright + moveleft, 104, 113 + moveright + moveleft, 103);
  fill(SkinLtR2);
  quad(113 + moveright + moveleft, 102, 126 + moveright + moveleft, 103, 134 + moveright + moveleft, 111, 106 + moveright + moveleft, 117);
  quad(107 + moveright + moveleft, 111, 130 + moveright + moveleft, 109, 135 + moveright + moveleft, 139, 108 + moveright + moveleft, 145);
  
  
  
  //head
  fill(SkinLtR1);
  quad(113 + moveright + moveleft, 65, 123 + moveright + moveleft, 64, 131 + moveright + moveleft, 78, 108 + moveright + moveleft, 83);
  quad(108 + moveright + moveleft, 82, 131 + moveright + moveleft, 78, 127 + moveright + moveleft, 94, 111 + moveright + moveleft, 91);
  bezier(123 + moveright + moveleft, 64, 128 + moveright + moveleft, 65, 128 + moveright + moveleft, 67, 131 + moveright + moveleft, 78);
  bezier(111 + moveright + moveleft, 91, 118 + moveright + moveleft, 96, 126 + moveright + moveleft, 96, 127 + moveright + moveleft, 94);
  
  //face
  noFill();
  stroke(BlackLtR);
  strokeWeight(1);
  bezier(124 + moveright + moveleft, 83, 125 + moveright + moveleft, 71, 124 + moveright + moveleft, 74, 129 + moveright + moveleft, 71);
  line(124 + moveright + moveleft, 83, 122 + moveright + moveleft, 84);
  stroke(BlackLtR);
  line(116 + moveright + moveleft, 73, 108 + moveright + moveleft, 72);
  strokeWeight(2);
  line(117 + moveright + moveleft, 77, 111 + moveright + moveleft, 78);
  line(126 + moveright + moveleft, 77, 129 + moveright + moveleft, 76);
  line(122 + moveright + moveleft, 88, 123 + moveright + moveleft, 88);
  
  //framinghair
  
  fill(BlackLtR);
  noStroke();
  bezier(114 + moveright + moveleft, 59, 120 + moveright + moveleft, 60, 119 + moveright + moveleft, 80, 102 + moveright + moveleft, 83);
  
  
  //dress
  fill(DressLtR);
  quad(106 + moveright + moveleft, 159, 141 + moveright + moveleft, 165, 151 + moveright + moveleft, 215, 97 + moveright + moveleft, 216);
  quad(97 + moveright + moveleft, 232, 103 + moveright + moveleft, 183, 151 + moveright + moveleft, 215, 127 + moveright + moveleft, 231);
  quad(95 + moveright + moveleft, 111, 111 + moveright + moveleft, 108, 140 + moveright + moveleft, 160, 106 + moveright + moveleft, 170);
  quad(130 + moveright + moveleft, 106, 138 + moveright + moveleft, 108, 141 + moveright + moveleft, 165, 123 + moveright + moveleft, 165);
  bezier(91 + moveright + moveleft, 225, 99 + moveright + moveleft, 234, 118 + moveright + moveleft, 247, 150 + moveright + moveleft, 215);
  bezier(88 + moveright + moveleft, 234, 116 + moveright + moveleft, 235, 114 + moveright + moveleft, 215, 99 + moveright + moveleft, 195);
  bezier(151 + moveright + moveleft, 215, 154 + moveright + moveleft, 195, 147 + moveright + moveleft, 178, 140 + moveright + moveleft, 165);
  bezier(138 + moveright + moveleft, 108, 142 + moveright + moveleft, 128, 143 + moveright + moveleft, 136, 138 + moveright + moveleft, 149);
  
  
  //blue jacket
  fill(JacketLtR);
  quad(91 + moveright + moveleft, 111, 102 + moveright + moveleft, 110, 109 + moveright + moveleft, 170, 87 + moveright + moveleft, 170);
  bezier(71 + moveright + moveleft, 209, 86 + moveright + moveleft, 219, 101 + moveright + moveleft, 219, 115 + moveright + moveleft, 217);
  quad(87 + moveright + moveleft, 170, 109 + moveright + moveleft, 170, 115 + moveright + moveleft, 217, 71 + moveright + moveleft, 209);
  
  //leftarm
  fill(SkinLtR1);
  quad(82 + moveright + moveleft, 158, 92 + moveright + moveleft, 156, 102 + moveright + moveleft - leftarmX3, 207, 94 + moveright + moveleft - leftarmX4, 212);//arm NEW x3 - 79, x4 - 87
  quad(94 + moveright + moveleft - leftarmX3, 212, 102 + moveright + moveleft - leftarmX3, 207, 104 + moveright + moveleft - leftarmX3, 210, 94 + moveright + moveleft - leftarmX3, 216);//umm between arm and hand(zapiastie)
  quad(94 + moveright + moveleft - leftarmX3, 216, 104 + moveright + moveleft - leftarmX3, 210, 106 + moveright + moveleft - leftarmX3, 223, 94 + moveright + moveleft - leftarmX3, 223);//hand
  triangle(102 + moveright + moveleft - leftarmX3, 210, 102 + moveright + moveleft - leftarmX3, 217, 111 + moveright + moveleft - leftarmX3, 219);//thumb
  quad(94 + moveright + moveleft - leftarmX3, 223, 106 + moveright + moveleft - leftarmX3, 223, 107 + moveright + moveleft - leftarmX3, 230, 98 + moveright + moveleft - leftarmX3, 227);//fingers
  quad(97 + moveright + moveleft - leftarmX3, 195, 98 + moveright + moveleft - leftarmX3, 181, 95 + moveright + moveleft, 163, 92 + moveright + moveleft, 156);//muscle
  
  //jacket piece
  fill(JacketLtR);
  quad(91 + moveright + moveleft, 111, 95 + moveright + moveleft, 116, 93 + moveright + moveleft, 159, 81 + moveright + moveleft, 163); //piece of jacket that covers left arm
  
  
  //IDLE ANIMATION FOR LEFT TO RIGHT
  
  //antlers
  noFill();
  stroke(IdleBlackLtR);
  strokeWeight(3);
  
  //right antler
  bezier(121+ moveright + moveleft, 64, 170+ moveright + moveleft, 64, 223+ moveright + moveleft, 68, 238+ moveright + moveleft, 30);
  bezier(156+ moveright + moveleft, 62, 154+ moveright + moveleft, 53, 146+ moveright + moveleft, 46, 130+ moveright + moveleft, 48);
  bezier(180+ moveright + moveleft, 62, 182+ moveright + moveleft, 40, 170+ moveright + moveleft, 31, 156+ moveright + moveleft, 27);
  bezier(209+ moveright + moveleft, 55, 211+ moveright + moveleft, 44, 205+ moveright + moveleft, 38, 196+ moveright + moveleft, 35);
  
  //left antler
  bezier(121+ moveright + moveleft, 64, 72+ moveright + moveleft, 64, 19+ moveright + moveleft, 68, 4+ moveright + moveleft, 30);
  bezier(86+ moveright + moveleft, 62, 88+ moveright + moveleft, 53, 96+ moveright + moveleft, 46, 103+ moveright + moveleft, 45);
  bezier(62+ moveright + moveleft, 62, 60+ moveright + moveleft, 40, 72+ moveright + moveleft, 31, 86+ moveright + moveleft, 15);
  bezier(33+ moveright + moveleft, 55, 31+ moveright + moveleft, 44, 37+ moveright + moveleft, 38, 46+ moveright + moveleft, 37);
   
  noStroke();
  
  //suor
  fill(IdleBlackLtR);
  bezier(67 + moveright + moveleft, 61, 68 + moveright + moveleft, 33, 100 + moveright + moveleft, 50, 73 + moveright + moveleft, 63);
  circle(82 + moveright + moveleft, 44, 10);
  triangle(83 + moveright + moveleft, 40, 90 + moveright + moveleft, 44, 83 + moveright + moveleft, 49);
  quad(68 + moveright + moveleft, 53, 70 + moveright + moveleft, 63, 68 + moveright + moveleft, 75, 62 + moveright + moveleft, 74);
  
  
  //leaves
  fill(IdleLeavesLtR);
  bezier(74 + moveright + moveleft + leaffallXlayer1, 27 + leaffallYlayer1, 53 + moveright + moveleft + leaffallXlayer1, 29 + leaffallYlayer1, 69 + moveright + moveleft + leaffallXlayer1, 16 + leaffallYlayer1, 74 + moveright + moveleft + leaffallXlayer1, 27 + leaffallYlayer1);
  bezier(86 + moveright + moveleft, 14, 103 + moveright + moveleft, 9, 105 + moveright + moveleft, 22, 86 + moveright + moveleft, 14);
  bezier(36 + moveright + moveleft, 39, 18 + moveright + moveleft, 33, 38 + moveright + moveleft, 26, 36 + moveright + moveleft, 39);
  bezier(140 + moveright + moveleft, 46, 137 + moveright + moveleft, 36, 158 + moveright + moveleft, 42, 140 + moveright + moveleft, 46);
  bezier(162 + moveright + moveleft, 27, 162 + moveright + moveleft, 12, 186 + moveright + moveleft, 16, 162 + moveright + moveleft, 27);
  bezier(179 + moveright + moveleft + leaffallXlayer1, 50 + leaffallYlayer1, 163 + moveright + moveleft + leaffallXlayer1, 60 + leaffallYlayer1, 166 + moveright + moveleft + leaffallXlayer1, 45 + leaffallYlayer1, 179 + moveright + moveleft + leaffallXlayer1, 50 + leaffallYlayer1);
  bezier(206 + moveright + moveleft, 39, 209 + moveright + moveleft, 23, 234 + moveright + moveleft, 41,206 + moveright + moveleft, 39);
  bezier(14 + moveright + moveleft + leaffallXlayer2, 45 + leaffallYlayer2, 0 + moveright + moveleft + leaffallXlayer2, 41 + leaffallYlayer2, 0 + moveright + moveleft + leaffallXlayer2, 61 + leaffallYlayer2, 14 + moveright + moveleft + leaffallXlayer2, 45 + leaffallYlayer2);
  bezier(237 + moveright + moveleft + leaffallXlayer2, 33 + leaffallYlayer2, 248 + moveright + moveleft + leaffallXlayer2, 23 + leaffallYlayer2, 260 + moveright + moveleft + leaffallXlayer2, 42 + leaffallYlayer2, 237 + moveright + moveleft + leaffallXlayer2, 33 + leaffallYlayer2);
  bezier(41 + moveright + moveleft, 61, 26 + moveright + moveleft, 73, 43 + moveright + moveleft, 85, 41 + moveright + moveleft, 61);
  bezier(95 + moveright + moveleft, 65, 76 + moveright + moveleft, 69, 86 + moveright + moveleft, 79, 95 + moveright + moveleft, 65);
  bezier(163 + moveright + moveleft, 65, 164 + moveright + moveleft, 82, 188 + moveright + moveleft, 78, 163 + moveright + moveleft, 65);
  bezier(218 + moveright + moveleft, 52, 236 + moveright + moveleft, 69, 242 + moveright + moveleft, 53, 218 + moveright + moveleft, 52);
  
  //hair
  fill(IdleBlackLtR);
  bezier(107 + moveright + moveleft, 95, 92 + moveright + moveleft, 78, 104 + moveright + moveleft, 48, 125 + moveright + moveleft, 60);
  bezier(116 + moveright + moveleft, 69, 80 + moveright + moveleft, 94, 90 + moveright + moveleft, 115, 118 + moveright + moveleft, 123);
  bezier(111 + moveright + moveleft, 58, 157 + moveright + moveleft, 55, 140 + moveright + moveleft, 125, 111 + moveright + moveleft, 119);
  
  //legs
  //right leg
  fill(IdleLeggingsLtR2);
  quad(133 + moveright + moveleft, 220, 152 + moveright + moveleft, 212, 148 + moveright + moveleft + idleuprightlegX, 256, 134 + moveright + moveleft + idleuprightlegX, 264);//upper right leg
  ellipse(141 + moveright + moveleft + idleuprightlegX, 260, 15, 38); //knee
  quad(134 + moveright + moveleft + idleuprightlegX, 263, 147 + moveright + moveleft + idleuprightlegX, 261, 143 + moveright + moveleft, 341, 131 + moveright + moveleft, 340); //lower right leg
  bezier(147 + moveright + moveleft + idleuprightlegX, 261, 123 + moveright + moveleft + idleuprightlegX, 276, 126 + moveright + moveleft, 313, 143 + moveright + moveleft, 341); //lower right leg muscle
 bezier(137 + moveright + moveleft + idleuprightlegX, 259, 130 + moveright + moveleft + idleuprightlegX, 244, 127 + moveright + moveleft, 216, 131 + moveright + moveleft, 207);//muscle
  
  //left leg
  fill(IdleLeggingsLtR); 
  quad(99 + moveright + moveleft, 228, 125 + moveright + moveleft, 221, 120 + idleupleftlegX + moveright + moveleft, 262, 101 + idleupleftlegX + moveright + moveleft, 265); // upper left leg
  ellipse(112 + moveright + moveleft + idleupleftlegX, 264, 16, 30);
  quad(101 + moveright + moveleft + idleupleftlegX, 264, 118 + moveright + moveleft + idleupleftlegX, 269, 103 + moveright + moveleft, 351, 92 + moveright + moveleft, 350);//lower left leg
  bezier(118 + moveright + moveleft + idleupleftlegX, 269, 91 + moveright + moveleft + idleupleftlegX, 266, 88 + moveright + moveleft, 314, 103 + moveright + moveleft, 351);//lower left leg muscle
  //I might consider adding dedicated variables for this muscle if I'll have time
  
  //shoes
  fill(IdleBlackLtR);
  //rightshoe
  quad(128 + moveright + moveleft, 338, 143 + moveright + moveleft, 338, 144 + moveright + moveleft - idlerightshoebaseX3, 362, 128 + moveright + moveleft - idlerightshoebaseX3, 362); //right shoe
  quad(128 + moveright + moveleft - idlerightshoebaseX3, 362, 157 + moveright + moveleft - idlerightshoebaseX3, 364, 158 + moveright + moveleft - idlerightshoebaseX3, 375 , 130 + moveright + moveleft - idlerightshoebaseX3, 373); //NEW coordinates 
  bezier(129 + moveright + moveleft, 363, 135 + moveright + moveleft, 338, 150 + moveright + moveleft, 355, 156 + moveright + moveleft, 366);
  
  //left shoe
  quad(89 + moveright + moveleft, 348, 104 + moveright + moveleft, 348, 105 + moveright + moveleft, 372, 87 + moveright + moveleft, 372);// left shoe ALSO new coordinates for x4y4 - 74, 358; x3y3 - 92, 363(13,9)
  quad(87 + moveright + moveleft, 372, 118 + moveright + moveleft, 374, 119 + moveright + moveleft, 385, 88 + moveright + moveleft, 382);//left shoe insole ALSO new coordinates x1y1 - 74, 358, x4y4 - 74, 368, x3y3 106, 383, x2y2 - 106,373
  bezier(90 + moveright + moveleft, 373, 96 + moveright + moveleft, 343, 111 + moveright + moveleft, 365, 117 + moveright + moveleft, 376); //left shoe toe, NEW coordinates x1y1 - 82,365  x2y2 - 86,353  x3y3 - 100,361(might just leave it), x4y4 - 106,373
 
  //right hand
  fill(IdleSkinLtR2);
  quad(133 + moveright + moveleft, 154, 145 + moveright + moveleft, 152, 156 + moveright + moveleft + idleleftarmX3, 192, 150 + moveright + moveleft + idleleftarmX3, 195);
  quad(150 + moveright + moveleft + idleleftarmX3, 195, 156 + moveright + moveleft + idleleftarmX3, 192, 165 + moveright + moveleft + idleleftarmX3, 204, 157 + moveright + moveleft + idleleftarmX3, 213);
  quad(157 + moveright + moveleft + idleleftarmX3, 212, 165 + moveright + moveleft + idleleftarmX3, 204, 162 + moveright + moveleft + idleleftarmX3, 215, 158 + moveright + moveleft + idleleftarmX3, 222);
  
  //piece of jacket
  fill(IdleJacketLtR);
  quad(129 + moveright + moveleft, 108, 135 + moveright + moveleft, 108, 146 + moveright + moveleft, 153, 134 + moveright + moveleft, 158);
  bezier(138 + moveright + moveleft, 108, 147 + moveright + moveleft, 117, 144 + moveright + moveleft, 127, 138 + moveright + moveleft, 145);
  
  //neck
  fill(IdleNeckLtR);
  quad(113 + moveright + moveleft, 91, 125 + moveright + moveleft, 91, 126 + moveright + moveleft, 104, 113 + moveright + moveleft, 103);
  fill(IdleSkinLtR2);
  quad(113 + moveright + moveleft, 102, 126 + moveright + moveleft, 103, 134 + moveright + moveleft, 111, 106 + moveright + moveleft, 117);
  quad(107 + moveright + moveleft, 111, 130 + moveright + moveleft, 109, 135 + moveright + moveleft, 139, 108 + moveright + moveleft, 145);
  
  
  
  //head
  fill(IdleSkinLtR1);
  quad(113 + moveright + moveleft, 65, 123 + moveright + moveleft, 64, 131 + moveright + moveleft, 78, 108 + moveright + moveleft, 83);
  quad(108 + moveright + moveleft, 82, 131 + moveright + moveleft, 78, 127 + moveright + moveleft, 94, 111 + moveright + moveleft, 91);
  bezier(123 + moveright + moveleft, 64, 128 + moveright + moveleft, 65, 128 + moveright + moveleft, 67, 131 + moveright + moveleft, 78);
  bezier(111 + moveright + moveleft, 91, 118 + moveright + moveleft, 96, 126 + moveright + moveleft, 96, 127 + moveright + moveleft, 94);
  
  //face
  noFill();
  stroke(IdleBlackLtR);
  strokeWeight(1);
  bezier(124 + moveright + moveleft, 83, 125 + moveright + moveleft, 71, 124 + moveright + moveleft, 74, 129 + moveright + moveleft, 71);
  line(124 + moveright + moveleft, 83, 122 + moveright + moveleft, 84);
  line(116 + moveright + moveleft, 73, 108 + moveright + moveleft, 72);
  strokeWeight(2);
  line(117 + moveright + moveleft, 77, 111 + moveright + moveleft, 78);
  line(126 + moveright + moveleft, 77, 129 + moveright + moveleft, 76);
  line(122 + moveright + moveleft, 88, 123 + moveright + moveleft, 88);
  
  //framinghair
  
  fill(IdleBlackLtR);
  noStroke();
  bezier(114 + moveright + moveleft, 59, 120 + moveright + moveleft, 60, 119 + moveright + moveleft, 80, 102 + moveright + moveleft, 83);
  
  
  //dress
  fill(IdleDressLtR);
  quad(106 + moveright + moveleft, 159, 141 + moveright + moveleft, 165, 151 + moveright + moveleft, 215, 97 + moveright + moveleft, 216);
  quad(97 + moveright + moveleft, 232, 103 + moveright + moveleft, 183, 151 + moveright + moveleft, 215, 127 + moveright + moveleft, 231);
  quad(95 + moveright + moveleft, 111, 111 + moveright + moveleft, 108, 140 + moveright + moveleft, 160, 106 + moveright + moveleft, 170);
  quad(130 + moveright + moveleft, 106, 138 + moveright + moveleft, 108, 141 + moveright + moveleft, 165, 123 + moveright + moveleft, 165);
  bezier(91 + moveright + moveleft, 225, 99 + moveright + moveleft, 234, 118 + moveright + moveleft, 247, 150 + moveright + moveleft, 215);
  bezier(88 + moveright + moveleft, 234, 116 + moveright + moveleft, 235, 114 + moveright + moveleft, 215, 99 + moveright + moveleft, 195);
  bezier(151 + moveright + moveleft, 215, 154 + moveright + moveleft, 195, 147 + moveright + moveleft, 178, 140 + moveright + moveleft, 165);
  bezier(138 + moveright + moveleft, 108, 142 + moveright + moveleft, 128, 143 + moveright + moveleft, 136, 138 + moveright + moveleft, 149);
  
  
  //blue jacket
  fill(IdleJacketLtR);
  quad(91 + moveright + moveleft, 111, 102 + moveright + moveleft, 110, 109 + moveright + moveleft, 170, 87 + moveright + moveleft, 170);
  bezier(71 + moveright + moveleft, 209, 86 + moveright + moveleft, 219, 101 + moveright + moveleft, 219, 115 + moveright + moveleft, 217);
  quad(87 + moveright + moveleft, 170, 109 + moveright + moveleft, 170, 115 + moveright + moveleft, 217, 71 + moveright + moveleft, 209);
  
  //leftarm
  fill(IdleSkinLtR1);
  quad(82 + moveright + moveleft, 158, 92 + moveright + moveleft, 156, 102 + moveright + moveleft - idleleftarmX3, 207, 94 + moveright + moveleft - idleleftarmX4, 212);//arm NEW x3 - 79, x4 - 87
  quad(94 + moveright + moveleft - idleleftarmX3, 212, 102 + moveright + moveleft - idleleftarmX3, 207, 104 + moveright + moveleft - idleleftarmX3, 210, 94 + moveright + moveleft - idleleftarmX3, 216);//umm between arm and hand(zapiastie)
  quad(94 + moveright + moveleft - idleleftarmX3, 216, 104 + moveright + moveleft - idleleftarmX3, 210, 106 + moveright + moveleft - idleleftarmX3, 223, 94 + moveright + moveleft - idleleftarmX3, 223);//hand
  triangle(102 + moveright + moveleft - idleleftarmX3, 210, 102 + moveright + moveleft - idleleftarmX3, 217, 111 + moveright + moveleft - idleleftarmX3, 219);//thumb
  quad(94 + moveright + moveleft - idleleftarmX3, 223, 106 + moveright + moveleft - idleleftarmX3, 223, 107 + moveright + moveleft - idleleftarmX3, 230, 98 + moveright + moveleft - idleleftarmX3, 227);//fingers
  quad(97 + moveright + moveleft - idleleftarmX3, 195, 98 + moveright + moveleft - idleleftarmX3, 181, 95 + moveright + moveleft, 163, 92 + moveright + moveleft, 156);//muscle
  
  //jacket piece
  fill(IdleJacketLtR);
  quad(91 + moveright + moveleft, 111, 95 + moveright + moveleft, 116, 93 + moveright + moveleft, 159, 81 + moveright + moveleft, 163); //piece of jacket that covers left arm
  
  
  
  
  //WALKING ANIMATION FOR RIGHT TO LEFT
  
  //antlers
  noFill();
  stroke(BlackRtL);
  strokeWeight(3);
  
  //right antler
  bezier(113+ moveright + moveleft, 64, 64+ moveright + moveleft, 64, 11+ moveright + moveleft, 68, -4+ moveright + moveleft, 30);
  bezier(78+ moveright + moveleft, 62, 80+ moveright + moveleft, 53, 88+ moveright + moveleft, 46, 104+ moveright + moveleft, 48);
  bezier(54+ moveright + moveleft, 62, 52+ moveright + moveleft, 40, 64+ moveright + moveleft, 31, 78+ moveright + moveleft, 27);
  bezier(25+ moveright + moveleft, 55, 23+ moveright + moveleft, 44, 29+ moveright + moveleft, 38, 38+ moveright + moveleft, 35);
  
  //left antler
  bezier(113+ moveright + moveleft, 64, 162+ moveright + moveleft, 64, 215+ moveright + moveleft, 68, 230+ moveright + moveleft, 30);
  bezier(148+ moveright + moveleft, 62, 146+ moveright + moveleft, 53, 138+ moveright + moveleft, 46, 131+ moveright + moveleft, 45);
  bezier(172+ moveright + moveleft, 62, 174+ moveright + moveleft, 40, 162+ moveright + moveleft, 31, 148+ moveright + moveleft, 15);
  bezier(201+ moveright + moveleft, 55, 203+ moveright + moveleft, 44, 197+ moveright + moveleft, 38, 188+ moveright + moveleft, 37);
  noStroke();
  
  //suor
  fill(BlackRtL);
  bezier(167 + moveright + moveleft, 61, 166 + moveright + moveleft, 33, 134 + moveright + moveleft, 50, 161 + moveright + moveleft, 63);
  circle(152 + moveright + moveleft, 44, 10);
  triangle(151 + moveright + moveleft, 40, 144 + moveright + moveleft, 44, 151 + moveright + moveleft, 49);
  quad(166 + moveright + moveleft, 53, 164 + moveright + moveleft, 63, 166 + moveright + moveleft, 75, 172 + moveright + moveleft, 74);
  
  
  //leaves
  fill(LeavesRtL);
  bezier(160 + moveright + moveleft + leaffallXlayer1, 27 + leaffallYlayer1, 181 + moveright + moveleft + leaffallXlayer1, 29 + leaffallYlayer1, 165 + moveright + moveleft + leaffallXlayer1, 16 + leaffallYlayer1, 160 + moveright + moveleft + leaffallXlayer1, 27 + leaffallYlayer1);
  bezier(148 + moveright + moveleft, 14, 131 + moveright + moveleft, 9, 129 + moveright + moveleft, 22, 148 + moveright + moveleft, 14);
  bezier(198 + moveright + moveleft, 39, 216 + moveright + moveleft, 33, 196 + moveright + moveleft, 26, 198 + moveright + moveleft, 39);
  bezier(94 + moveright + moveleft, 46, 97 + moveright + moveleft, 36, 76 + moveright + moveleft, 42, 94 + moveright + moveleft, 46);
  bezier(72 + moveright + moveleft, 27, 72 + moveright + moveleft, 12, 48 + moveright + moveleft, 16, 72 + moveright + moveleft, 27);
  bezier(55 + moveright + moveleft + leaffallXlayer1, 50 + leaffallYlayer1, 71 + moveright + moveleft + leaffallXlayer1, 60 + leaffallYlayer1, 68 + moveright + moveleft + leaffallXlayer1, 45 + leaffallYlayer1, 55 + moveright + moveleft + leaffallXlayer1, 50 + leaffallYlayer1);
  bezier(28 + moveright + moveleft, 39, 25 + moveright + moveleft, 23, 0 + moveright + moveleft, 41,28 + moveright + moveleft, 39);
  bezier(220 + moveright + moveleft + leaffallXlayer2, 45 + leaffallYlayer2, 234 + moveright + moveleft + leaffallXlayer2, 41 + leaffallYlayer2, 234 + moveright + moveleft + leaffallXlayer2, 61 + leaffallYlayer2, 220 + moveright + moveleft + leaffallXlayer2, 45 + leaffallYlayer2);
  bezier(-3 + moveright + moveleft + leaffallXlayer2, 33 + leaffallYlayer2, -14 + moveright + moveleft + leaffallXlayer2, 23 + leaffallYlayer2, -26 + moveright + moveleft + leaffallXlayer2, 42 + leaffallYlayer2, -3 + moveright + moveleft + leaffallXlayer2, 33 + leaffallYlayer2);
  bezier(193 + moveright + moveleft, 61, 208 + moveright + moveleft, 73, 191 + moveright + moveleft, 85, 193 + moveright + moveleft, 61);
  bezier(139 + moveright + moveleft, 65, 158 + moveright + moveleft, 69, 148 + moveright + moveleft, 79, 139 + moveright + moveleft, 65);
  bezier(71 + moveright + moveleft, 65, 70 + moveright + moveleft, 82, 46 + moveright + moveleft, 78, 71 + moveright + moveleft, 65);
  bezier(16 + moveright + moveleft, 52, -2 + moveright + moveleft, 69, -8 + moveright + moveleft, 53, 16 + moveright + moveleft, 52);
  
  //hair
  fill(BlackRtL);
  bezier(127 + moveright + moveleft, 95, 142 + moveright + moveleft, 78, 130 + moveright + moveleft, 48, 109 + moveright + moveleft, 60);
  bezier(118 + moveright + moveleft, 69, 154 + moveright + moveleft, 94, 144 + moveright + moveleft, 115, 116 + moveright + moveleft, 123);
  bezier(123 + moveright + moveleft, 58, 77 + moveright + moveleft, 55, 94 + moveright + moveleft, 125, 123 + moveright + moveleft, 119);
  
  //legs
  
  fill(LeggingsRtL2);
  quad(101 + moveright + moveleft, 220, 82 + moveright + moveleft, 212, 86 + moveright + moveleft - uprightlegX, 256, 100 + moveright + moveleft - uprightlegX, 264);//upper right leg
  ellipse(93 + moveright + moveleft - uprightlegX, 260, 15, 38); //knee
  quad(100 + moveright + moveleft - uprightlegX, 263, 87 + moveright + moveleft - uprightlegX, 261, 91 + moveright + moveleft, 341, 103 + moveright + moveleft, 340); //lower right leg
  bezier(87 + moveright + moveleft - uprightlegX, 261, 111 + moveright + moveleft - uprightlegX, 276, 108 + moveright + moveleft, 313, 91 + moveright + moveleft, 341); //lower right leg muscle
  bezier(97 + moveright + moveleft - uprightlegX, 259, 104 + moveright + moveleft - uprightlegX, 244, 107 + moveright + moveleft, 216, 103 + moveright + moveleft, 207);//muscle
  
  
  fill(LeggingsRtL);
  
  quad(135 + moveright + moveleft, 228, 109 + moveright + moveleft, 221, 114 - upleftlegX + moveright + moveleft, 262, 133 - upleftlegX + moveright + moveleft, 265); // upper left leg
  ellipse(122 + moveright + moveleft - upleftlegX, 264, 16, 30);
  
  quad(133 + moveright + moveleft - upleftlegX, 264, 116 + moveright + moveleft - upleftlegX, 269, 131 + moveright + moveleft + lowerleftlegX3, 351 - lowerleftlegY3, 142 + moveright + moveleft + lowerleftlegX4, 350 - lowerleftlegY4);//lower left leg
  bezier(116 + moveright + moveleft - upleftlegX, 269, 143 + moveright + moveleft - upleftlegX, 266, 146 + moveright + moveleft, 314, 131 + moveright + moveleft + lowerleftlegX4, 351 - lowerleftlegY4);//lower left leg muscle
  //I might consider adding dedicated variables for this muscle if I'll have time
  
    //shoes
  fill(BlackRtL);
  quad(106 + moveright + moveleft, 338, 90 + moveright + moveleft, 338, 90 + moveright + moveleft + rightshoebaseX3, 362, 106 + moveright + moveleft + rightshoebaseX3, 362); //right shoe
  quad(106 + moveright + moveleft + rightshoebaseX3, 362, 77 + moveright + moveleft + rightshoebaseX3, 364, 76 + moveright + moveleft + rightshoebaseX3, 375 , 104 + moveright + moveleft + rightshoebaseX3, 373); //NEW coordinates 
  bezier(105 + moveright + moveleft, 363, 99 + moveright + moveleft, 338, 84 + moveright + moveleft, 355, 78 + moveright + moveleft, 366);
  
  quad(145 + moveright + moveleft + leftshoebaseX1, 348 - leftshoebaseY1, 130 + moveright + moveleft + leftshoebaseX2, 348 - leftshoebaseY2, 129 + moveright + moveleft + leftshoebaseX3, 372 - leftshoebaseY3, 147 + moveright + moveleft + leftshoebaseX4, 372 - leftshoebaseY4);// left shoe ALSO new coordinates for x4y4 - 74, 358; x3y3 - 92, 363(13,9)
  quad(147 + moveright + moveleft + leftshoeinsoleX1, 372 - leftshoeinsoleY1, 116 + moveright + moveleft + leftshoeinsoleX2, 374 - leftshoeinsoleY2, 115 + moveright + moveleft + leftshoeinsoleX3, 385 - leftshoeinsoleY3, 146 + moveright + moveleft + leftshoeinsoleX4, 382 - leftshoeinsoleY4);//left shoe insole ALSO new coordinates x1y1 - 74, 358, x4y4 - 74, 368, x3y3 106, 383, x2y2 - 106,373
  bezier(144 + moveright + moveleft + leftshoetoeX1, 373 - leftshoetoeY1, 138 + moveright + moveleft + leftshoetoeX2, 343 - leftshoetoeY2, 123 + moveright + moveleft + leftshoetoeX3, 365 - leftshoetoeY3, 117 + moveright + moveleft + leftshoetoeX4, 376 - leftshoetoeY4); //left shoe toe, NEW coordinates x1y1 - 82,365  x2y2 - 86,353  x3y3 - 100,361(might just leave it), x4y4 - 106,373
  
    //right hand
  fill(SkinRtL2);
  quad(101 + moveright + moveleft, 154, 89 + moveright + moveleft, 152, 78 + moveright + moveleft - leftarmX3, 192, 84 + moveright + moveleft - leftarmX3, 195);
  quad(84 + moveright + moveleft - leftarmX3, 195, 78 + moveright + moveleft - leftarmX3, 192, 69 + moveright + moveleft - leftarmX3, 204, 77 + moveright + moveleft - leftarmX3, 213);
  quad(77 + moveright + moveleft - leftarmX3, 212, 69 + moveright + moveleft - leftarmX3, 204, 72 + moveright + moveleft - leftarmX3, 215, 76 + moveright + moveleft - leftarmX3, 222);
  
  //piece of jacket
  fill(JacketRtL);
  quad(105 + moveright + moveleft, 108, 99 + moveright + moveleft, 108, 88 + moveright + moveleft, 153, 100 + moveright + moveleft, 158);
  bezier(96 + moveright + moveleft, 108, 87 + moveright + moveleft, 117, 90 + moveright + moveleft, 127, 96 + moveright + moveleft, 145);
  
  //neck
  fill(NeckRtL);
  quad(121 + moveright + moveleft, 91, 109 + moveright + moveleft, 91, 108 + moveright + moveleft, 104, 121 + moveright + moveleft, 103);
  fill(SkinRtL2);
  quad(121 + moveright + moveleft, 102, 108 + moveright + moveleft, 103, 100 + moveright + moveleft, 111, 128 + moveright + moveleft, 117);
  quad(127 + moveright + moveleft, 111, 104 + moveright + moveleft, 109, 99 + moveright + moveleft, 139, 126 + moveright + moveleft, 145);
  
  
  
  //head
  fill(SkinRtL1);
  quad(121 + moveright + moveleft, 65, 111 + moveright + moveleft, 64, 103 + moveright + moveleft, 78, 126 + moveright + moveleft, 83);
  quad(126 + moveright + moveleft, 82, 103 + moveright + moveleft, 78, 107 + moveright + moveleft, 94, 123 + moveright + moveleft, 91);
  bezier(111 + moveright + moveleft, 64, 106 + moveright + moveleft, 65, 106 + moveright + moveleft, 67, 103 + moveright + moveleft, 78);
  bezier(123 + moveright + moveleft, 91, 116 + moveright + moveleft, 96, 108 + moveright + moveleft, 96, 107 + moveright + moveleft, 94);
  
  //face
  noFill();
  stroke(BlackRtL);
  strokeWeight(1);
  bezier(110 + moveright + moveleft, 83, 109 + moveright + moveleft, 71, 110 + moveright + moveleft, 74, 105 + moveright + moveleft, 71);
  line(110 + moveright + moveleft, 83, 112 + moveright + moveleft, 84);
  line(118 + moveright + moveleft, 73, 126 + moveright + moveleft, 72);
  strokeWeight(2);
  line(117 + moveright + moveleft, 77, 123 + moveright + moveleft, 78);
  line(108 + moveright + moveleft, 77, 105 + moveright + moveleft, 76);
  line(112 + moveright + moveleft, 88, 111 + moveright + moveleft, 88);
  
  //framinghair
  
  fill(BlackRtL);
  noStroke();
  bezier(120 + moveright + moveleft, 59, 114 + moveright + moveleft, 60, 115 + moveright + moveleft, 80, 132 + moveright + moveleft, 83);
  
  
  //dress
  fill(DressRtL);
  quad(128 + moveright + moveleft, 159, 93 + moveright + moveleft, 165, 83 + moveright + moveleft, 215, 137 + moveright + moveleft, 216);
  quad(137 + moveright + moveleft, 232, 131 + moveright + moveleft, 183, 83 + moveright + moveleft, 215, 107 + moveright + moveleft, 231);
  quad(139 + moveright + moveleft, 111, 123 + moveright + moveleft, 108, 94 + moveright + moveleft, 160, 128 + moveright + moveleft, 170);
  quad(104 + moveright + moveleft, 106, 96 + moveright + moveleft, 108, 93 + moveright + moveleft, 165, 111 + moveright + moveleft, 165);
  bezier(143 + moveright + moveleft, 225, 135 + moveright + moveleft, 234, 116 + moveright + moveleft, 247, 84 + moveright + moveleft, 215);
  bezier(146 + moveright + moveleft, 234, 118 + moveright + moveleft, 235, 120 + moveright + moveleft, 215, 135 + moveright + moveleft, 195);
  bezier(83 + moveright + moveleft, 215, 80 + moveright + moveleft, 195, 87 + moveright + moveleft, 178, 94 + moveright + moveleft, 165);
  bezier(96 + moveright + moveleft, 108, 92 + moveright + moveleft, 128, 91 + moveright + moveleft, 136, 96 + moveright + moveleft, 149);
  
  
  //blue jacket
  fill(JacketRtL );
  quad(143 + moveright + moveleft, 111, 132 + moveright + moveleft, 110, 125 + moveright + moveleft, 170, 147 + moveright + moveleft, 170);
  bezier(163 + moveright + moveleft, 209, 148 + moveright + moveleft, 219, 133 + moveright + moveleft, 219, 119 + moveright + moveleft, 217);
  quad(147 + moveright + moveleft, 170, 125 + moveright + moveleft, 170, 119 + moveright + moveleft, 217, 163 + moveright + moveleft, 209);
  
  //leftarm
  fill(SkinRtL1);
  quad(152 + moveright + moveleft, 158, 142 + moveright + moveleft, 156, 132 + moveright + moveleft + leftarmX3, 207, 140 + moveright + moveleft + leftarmX4, 212);//arm NEW x3 - 79, x4 - 87
  quad(140 + moveright + moveleft + leftarmX3, 212, 132 + moveright + moveleft + leftarmX3, 207, 130 + moveright + moveleft + leftarmX3, 210, 140 + moveright + moveleft + leftarmX3, 216);//umm between arm and hand(zapiastie)
  quad(140 + moveright + moveleft + leftarmX3, 216, 130 + moveright + moveleft + leftarmX3, 210, 128 + moveright + moveleft + leftarmX3, 223, 140 + moveright + moveleft + leftarmX3, 223);//hand
  triangle(132 + moveright + moveleft + leftarmX3, 210, 132 + moveright + moveleft + leftarmX3, 217, 123 + moveright + moveleft + leftarmX3, 219);//thumb
  quad(140 + moveright + moveleft + leftarmX3, 223, 128 + moveright + moveleft + leftarmX3, 223, 127 + moveright + moveleft + leftarmX3, 230, 136 + moveright + moveleft + leftarmX3, 227);//fingers
  quad(137 + moveright + moveleft + leftarmX3, 195, 136 + moveright + moveleft + leftarmX3, 181, 139 + moveright + moveleft, 163, 142 + moveright + moveleft, 156);//muscle
  
  //acket piece
  fill(JacketRtL);
  quad(143 + moveright + moveleft, 111, 139 + moveright + moveleft, 116, 141 + moveright + moveleft, 159, 153 + moveright + moveleft, 163); //piece of jacket that covers left arm
  
  //
  
  leaffallYlayer1  = leaffallYlayer1+1;
  leaffallXlayer1 = leaffallXlayer1-0.2;
  leaffallYlayer2  = leaffallYlayer2+0.5;
  leaffallXlayer2 = leaffallXlayer2-0.1;
  
    if (frameCount % 20 === 0){
    upleftlegX = 7;  
    uprightlegX = 0;
    rightshoebaseX3 = 0;
      
    idleupleftlegX = 2;  
    idleuprightlegX = 0;
    idlerightshoebaseX3 = 0;
    
    
  }
  
  if (frameCount % 30 === 0){
    upleftlegX = 14;
    lowerleftlegX4 = 5;
    lowerleftlegY4 = 11;
    lowerleftlegX3 = 5;
    lowerleftlegY3 = 5;
    leftshoebaseX1 = 2;
    leftshoebaseY1 = 9;
    leftshoebaseX2 = 6;
    leftshoebaseY2 = 2;
    leftshoebaseX3 = 13;
    leftshoebaseY3 = 5;
    leftshoebaseX4 = 13;
    leftshoebaseY4 = 14;
    leftshoeinsoleX1 = 13;
    leftshoeinsoleY1 = 14;
    leftshoeinsoleX4 = 14;
    leftshoeinsoleY4 = 14;
    leftshoeinsoleX3 = 13;
    leftshoeinsoleY3 = 2;
    leftshoeinsoleX2 = 12;
    leftshoeinsoleY2 = 1;
    leftshoetoeX1 = 8;
    leftshoetoeY1 = 8;
    leftshoetoeX4 = 11;
    leftshoetoeY4 = 3;
    leftshoetoeX2 = 10;
    leftshoetoeY2 = 10;
    leftarmX3 = 5;
    leftarmX4 = 5;
    
    idleupleftlegX = 4;
    idleleftarmX3 = 2;
    idleleftarmX4 = 2;
   
    
  }
  
  if (frameCount % 60 === 0){
    upleftlegX = 0;  
    uprightlegX = 8;
    lowerleftlegX4 = 0;
    lowerleftlegY4 = 0;
    lowerleftlegX3 = 0;
    lowerleftlegY3 = 0;
    leftshoebaseX1 = 0;
    leftshoebaseY1 = 0;
    leftshoebaseX2 = 0;
    leftshoebaseY2 = 0;
    leftshoebaseX4 = 0;
    leftshoebaseY4 = 0;
    leftshoebaseX3 = 0;
    leftshoebaseY3 = 0;
    leftshoeinsoleX1 = 0;
    leftshoeinsoleY1 = 0;
    leftshoeinsoleX4 = 0;
    leftshoeinsoleY4 = 0;
    leftshoeinsoleX3 = 0;
    leftshoeinsoleY3 = 0;
    leftshoeinsoleX2 = 0;
    leftshoeinsoleY2 = 0;
    leftshoetoeX1 = 0;
    leftshoetoeY1 = 0;
    leftshoetoeX4 = 0;
    leftshoetoeY4 = 0;
    leftshoetoeX2 = 0;
    leftshoetoeY2 = 0;
    rightshoebaseX3 = 2;
    leftarmX3 = 0;
    leftarmX4 = 0;
    
    idleupleftlegX = 0;  
    idleuprightlegX = 2;
    idlerightshoebaseX3 = 2;
    idleleftarmX3 = 0;
    idleleftarmX4 = 0;
    
  }
  if (frameCount % 290 ===0){
    leaffallYlayer1 = 0;
    leaffallXlayer1 = 0;
  }
  
  if (frameCount % 400 ===0){
    leaffallYlayer2 = 0;
    leaffallXlayer2 = 0;
  }
  
  //if (frameCount % 70 === 0) {
   // uprightlegX = 7
   // }
  //if (frameCount % 90 === 0) {
   // uprightlegX = 14
   // }
 // if (frameCount % 110 === 0) {
   // uprightlegX = 0
  //  }
  
   //clickable stuff
  //noFill;
  //quad(bodyx1+ moveright + moveleft, bodyy1, bodyx2+ moveright + moveleft, bodyy1, bodyx2+ moveright + moveleft, bodyy2, bodyx1+ moveright + moveleft, bodyy2);
  
   if (clicked === true){
  fill("white");
  quad(82, 301, 660, 301, 660, 353, 82, 353);
     fill("black");
     textSize(16);
     text("SUOR IJ: Yup, I see that you clicked on me. Clap-clap-clap", 92, 333);
     //if (mouseClicked){
       //clicked = false;
     //}
  }
  if (tutorial === true){
    textSize(28);
    fill("white");
    text("Press A or D to move, click on Suor to interact", 367, 279, 300, 250);
  }
  if (characterinfobutton === true){
    textSize(16);
    fill("white");
    text("Character Design Info", 530, 336, 300, 250);
  noFill();
  stroke("white");
  
  quad(522, 330, 694, 330, 694, 358, 522, 358);
  noStroke();
    
  }
  
  if (characterinfo){
       fill("#fff9dd");
  quad(270, 39, 419, 39, 437, 95, 270, 76);
  quad(433, 39, 570, 39, 575, 116, 416, 93);
  quad(582, 39, 693, 39, 693, 197, 535, 158);
  quad(270, 85, 522, 57, 513, 225, 270, 204);
  quad(270, 217, 445, 182, 435, 310, 270, 310);
  quad(420, 267, 580, 203, 693, 310, 450, 310);
  quad(610, 150, 693, 210, 693, 310, 578, 233);
  quad(414, 92, 621, 90, 626, 276, 414, 285);
  }
       fill("#fff9dd");
  quad(270, 39, 419, 39, 437, 95, 270, 76);
  quad(433, 39, 570, 39, 575, 116, 416, 93);
  quad(582, 39, 693, 39, 693, 197, 535, 158);
  quad(270, 85, 522, 57, 513, 225, 270, 204);
  quad(270, 217, 445, 182, 435, 310, 270, 310);
  quad(420, 267, 580, 203, 693, 310, 450, 310);
  quad(610, 150, 693, 210, 693, 310, 578, 233);
  quad(414, 92, 621, 90, 626, 276, 414, 285);
  fill("black");
  textSize(12);
  text(charactertext, 327, 80, 100, 200);
 
}

//function reaction(){
  
//}
function mouseClicked(){
  if (mouseX > bodyx1+ moveright + moveleft && mouseX < bodyx2+ moveright + moveleft && mouseY > bodyy1 && mouseY < bodyy2){
  clicked = true; 
    tutorial = false;
    characterinfobutton = true;
  }
  if (mouseX > 522 && mouseX<694 && mouseY > 330 && mouseY < 358 && characterinfobutton === true){
  characterinfo = !characterinfo;
  }
  
}

function keyPressed(){
  if (keyCode === 65) {
  clicked = false;
  tutorial = false;  
  characterinfobutton = true;  
  }
  else if (keyCode === 68){
  clicked = false; 
    tutorial = false;
    characterinfobutton = true;
  }
}

function keyReleased(){
  if (keyCode === 65) {
    //SkinLtR1.setAlpha(0);
  }
    else if (keyCode === 68){
    //SkinLtR1.setAlpha(100);
    SkinLtR1 = ("#82afd6");
      
    
  }
}

// work log
// 9.06 - 2.5 hours discovering framecount and animating legs (start 9:46pm)
// 9.02 - 1 hours sketching concept(12:13am - 1:03am)
// 9.02 - starting shapes(dress, jacket, legs, hair) - 1.5-2(?) hours, I remember it didn't took long, because in the middle of doing it I realized I'd better take care of how I'm gonna do animations and that passive-agressive dialogue
// 9.05 - 1.5 - fruitlessly researching animation methods (12:30am - 2am)
//9.07 start 6:30pm - 9pm go on break   10pm - I'm back! 11:30 - finished for today
//9.08 - 6:21pm beginning ;   8:06 - break; 10 pm - back; 11:30 - this is it for today, I still need to animate shoes and arms, and then animate idle, and then assign alphas for switching between poses and then passive agressive dialogue for the next week
//9.09 - 6pm beginning - 12AM finished for today, turned out i can't use alpha channel as a global variable(or don't know how), so i had to move character movement and animation switch thingy inside draw function. this is a mess
//9/11 - 3pm quick edits and reimagining the concept until 4pm
//9/12 - 3pm start - finished for today by 7:38pm
//25 hours total so far

//9/13 - 8pm start
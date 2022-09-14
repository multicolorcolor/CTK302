//let fogXtest = [];
let xoff = 0; //for my grass

let e1; //sad eye
let teardropY1 = 0; 
let teardropY2 = 0;
let fr = 30;
let starttext;
let fogX = 0;
let fogI = 0;
let secondfogX = 0;
let secondfogI = 0;
let grassI = 0;
let grassX = 0;
//let fogX1 = 0;
let clicked = false;
let cry = 0;


function setup() {
  createCanvas(720, 400);
  frameRate(fr);
  noiseSeed(5);
  
  startcolor = ("#484c58");
  eyecolor = ("#ffffff");
  normaleye = color("#ffffff");
  redeye = color("#ffaebd");
  e1 = new Eye(370, 100, 100);
  
  }

function drawFog(){
  fill("#c0e2ff")
  bezier(36, 365, 10, 366, 11, 357, 43, 337);
}
function draw(){
  
  background("#9cdbf5");
  noStroke();
  
  e1.update(mouseX, mouseY);
  e1.display();
  stroke("white");
  strokeWeight(1);
    textSize(25);
  fill("white");
text('cry your eyes out', 321, 180, 125, 150);
  noStroke();
  
  //far away forest and dawn
  fill("#a9c4e0")
  quad(0, 400, 0, 399, 720, 300, 720, 400);
  fill("#92acc8")
  quad(0, 400, 0, 353, 720, 380, 720, 400);
  
  //grayish tree on left
  fill("#8da1be");
  quad(94, 144, 144, 104, 193, 144, 155, 155);
  quad(85, 162, 147, 135, 200, 165, 158, 185);
  quad(100, 200, 147, 155, 206, 200, 141, 230);
  quad(75, 190, 147, 135, 225, 195, 162, 220);
  quad(85, 210, 147, 150, 228, 220, 100, 250);
  quad(75, 235, 147, 150, 228, 220, 100, 250);
  quad(65, 275, 147, 170, 245, 245, 185, 345);
  quad(55, 315, 168, 225, 277, 290, 200, 385);
  quad(35, 350, 168, 250, 277, 330, 200, 400);
  quad(15, 375, 168, 280, 320, 375, 200, 400);
  
  //grayish tree on right
  fill("#8da1be");
  quad(560, 144, 614, 74, 663, 144, 625, 155);
  quad(555, 162, 617, 120, 670, 165, 628, 185);
  quad(550, 200, 617, 155, 676, 200, 611, 230);
  quad(535, 190, 617, 135, 695, 195, 632, 220);
  quad(525, 210, 617, 150, 698, 220, 570, 250);
  quad(505, 235, 617, 150, 698, 220, 570, 250);
  quad(495, 275, 617, 170, 715, 245, 655, 345);
  quad(485, 315, 638, 225, 747, 290, 670, 385);
  quad(465, 350, 638, 250, 747, 330, 670, 400);
  quad(455, 375, 638, 280, 790, 375, 670, 400);
  
  //blue green tree on right
  fill("#6b8f96");
  quad(460, 234, 491, 196, 532, 221, 500, 251);
  fill("#6b8f96");
  quad(454, 249, 505, 216, 540, 241, 500, 281);
  fill("#6b8f96");
  quad(443, 269, 505, 236, 550, 261, 500, 301);
  fill("#6b8f96");
  quad(436, 289, 505, 236, 560, 281, 500, 331);
  fill("#6b8f96");
  quad(426, 309, 505, 256, 570, 301, 500, 341);
  fill("#6b8f96");
  quad(426, 329, 505, 276, 570, 321, 500, 361);
  fill("#6b8f96");
  quad(420, 359, 505, 306, 576, 351, 500, 391);
  fill("#6b8f96");
  quad(410, 380, 505, 330, 590, 377, 500, 400);
  
  //blue green tree on left
  fill("#6b8f96");
  quad(192, 214, 220, 166, 248, 206, 225, 221);
  fill("#6b8f96");
  quad(185, 234, 220, 196, 257, 221, 225, 251);
  fill("#6b8f96");
  quad(179, 249, 230, 226, 260, 241, 225, 281);
  fill("#6b8f96");
  quad(170, 269, 230, 236, 280, 261, 225, 301);
  fill("#6b8f96");
  quad(160, 289, 230, 236, 285, 281, 225, 331);
  fill("#6b8f96");
  quad(151, 309, 230, 256, 295, 301, 225, 341);
  fill("#6b8f96");
  quad(151, 329, 230, 276, 315, 321, 225, 361);
  fill("#6b8f96");
  quad(145, 359, 230, 306, 317, 351, 225, 391);
  fill("#6b8f96");
  quad(135, 380, 230, 330, 325, 377, 225, 400);
  
   
  //gray tree on left
  fill("#97a8c1");
  quad(12, 104, 44, 65, 93, 104, 55, 115);
  fill("#97a8c1");
  quad(2, 129, 47, 95, 100, 125, 58, 145);
  fill("#97a8c1");
  quad(0, 159, 47, 115, 106, 164, 41, 197);
  fill("#97a8c1");
  quad(0, 190, 47, 135, 125, 195, 0, 220);
  fill("#97a8c1");
  quad(9, 200, 47, 150, 128, 220, 0, 250);
  fill("#97a8c1");
  quad(9, 210, 47, 150, 128, 220, 0, 250);
   fill("#97a8c1");
  quad(0, 230, 47, 170, 145, 245, 0, 266);
  fill("#97a8c1");
  quad(7, 245, 68, 225, 177, 290, 0, 285);
  fill("#97a8c1");
  quad(0, 280, 68, 250, 177, 330, 0, 345);
  fill("#97a8c1");
  quad(0, 310, 68, 280, 220, 375, 0, 385);
  
  
// fog should be placed here
  
  //gray tree on right
  fill("#97a8c1");
  quad(660, 64, 690, 25, 720, 64, 700, 85);
  fill("#97a8c1");
  quad(662, 90, 685, 55, 720, 82, 685, 105);
  fill("#97a8c1");
  quad(642, 120, 700, 75, 720, 112, 700, 155);
  fill("#97a8c1");
  quad(641, 159, 694, 85, 720, 132, 720, 197);
  fill("#97a8c1");
  quad(639, 190, 710, 135, 720, 195, 720, 220);
  fill("#97a8c1");
  quad(638, 293, 710, 150, 720, 220, 720, 250);
  fill("#97a8c1");
  quad(630, 228, 710, 150, 720, 220, 720, 250);
   fill("#97a8c1");
  quad(622, 264, 710, 170, 720, 245, 720, 266);
  fill("#97a8c1");
  quad(600, 300, 720, 225, 720, 290, 720, 310);
  fill("#97a8c1");
  quad(610, 333, 720, 250, 720, 330, 720, 345);
  fill("#97a8c1");
  quad(550, 400, 680, 310, 720, 336, 720, 385);
  
  //fog
  fogColor = color("#d9edff");
  fogColor.setAlpha(95);
  fill(fogColor);
  bezier(fogX + 720, 365, fogX + 694, 366, fogX + 695, 357, fogX + 727, 337);
  bezier(fogX + 718, 353, fogX + 731, 301, fogX + 794, 309, fogX + 829, 349);
  bezier(fogX + 806, 353, fogX + 830, 264, fogX + 949, 296, fogX + 985, 353);
  bezier(fogX + 788, 353, fogX + 783, 305, fogX + 819, 309, fogX + 836, 353);
  
  bezier(fogX + 907, 350, fogX + 965, 193, fogX + 1103, 203, fogX + 1243, 337);
  
  bezier(fogX + 1155, 285, fogX + 1182, 219, fogX + 1210, 217, fogX + 1274, 234);
  bezier(fogX + 1090, 281, fogX + 1134, 240, fogX + 1218, 248, fogX + 1295, 272);
  bezier(fogX + 1104, 338, fogX + 1250, 177, fogX + 1306, 193, fogX + 1367, 336);
  bezier(fogX + 1311, 293, fogX + 1404, 329, fogX + 1404, 364, fogX + 1310, 376);
  bezier(fogX + 1114, 337, fogX + 1144, 385, fogX + 1353, 425, fogX + 1334, 328);
  bezier(fogX + 854, 325, fogX + 914, 415, fogX + 1140, 415, fogX + 1251, 325);
  bezier(fogX + 712, 353,fogX + 792, 400, fogX + 884, 400, fogX + 1038, 353);
  bezier(fogX + 727, 341, fogX + 697, 373, fogX + 747, 388, fogX + 805, 345);  
  
  fogI = fogX + 1404;
  fogX = fogX - 0.5;
  
  if (fogI < 0){
    fogX = 0;
  }
  //print(fogI);
  
  
  //second fog
  
  //fog
  fogColor = color("#d9edff");
  fogColor.setAlpha(95);
  fill(fogColor);
  bezier(secondfogX + 1120, 365, secondfogX + 1094, 366, secondfogX + 1095, 357, secondfogX + 1127, 337);
  bezier(secondfogX + 1118, 353, secondfogX + 1131, 301, secondfogX + 1194, 309, secondfogX + 1229, 349);
  bezier(secondfogX + 1206, 353, secondfogX + 1230, 264, secondfogX + 1349, 296, secondfogX + 1385, 353);
  bezier(secondfogX + 1188, 353, secondfogX + 1188, 305, secondfogX + 1219, 309, secondfogX + 1236, 353);
  
  bezier(secondfogX + 1307, 350, secondfogX + 1365, 193, secondfogX + 1503, 203, secondfogX + 1643, 337);
  
  bezier(secondfogX + 1555, 285, secondfogX + 1582, 219, secondfogX + 1610, 217, secondfogX + 1674, 234);
  bezier(secondfogX + 1490, 281, secondfogX + 1534, 240, secondfogX + 1618, 248, secondfogX + 1695, 272);
  bezier(secondfogX + 1504, 338, secondfogX + 1650, 177, secondfogX + 1706, 193, secondfogX + 1767, 336);
  bezier(secondfogX + 1711, 293, secondfogX + 1804, 329, secondfogX + 1804, 364, secondfogX + 1710, 376);
  bezier(secondfogX + 1614, 337, secondfogX + 1644, 385, secondfogX + 1753, 425, secondfogX + 1734, 328);
  bezier(secondfogX + 1254, 325, secondfogX + 1314, 415, secondfogX + 1540, 415, secondfogX + 1651, 325);
  bezier(secondfogX + 1112, 353, secondfogX + 1192, 400, secondfogX + 1284, 400, secondfogX + 1438, 353);
  bezier(secondfogX + 1127, 341, secondfogX + 1097, 373, secondfogX + 1147, 388, secondfogX + 1205, 345);  
  
  secondfogI = secondfogX + 1804;
  secondfogX = secondfogX - 0.5;
  
  if (secondfogI < 0){
    secondfogX = 0;
  }
  
  
  //blue green tree on left 1
  fill("#6b8f96");
  quad(48, 214, 78, 190, 104, 206, 81, 221);
  fill("#6b8f96");
  quad(41, 234, 76, 196, 113, 221, 81, 251);
  fill("#6b8f96");
  quad(35, 249, 76, 226, 116, 241, 81, 281);
  fill("#6b8f96");
  quad(26, 269, 76, 236, 126, 261, 81, 301);
  fill("#6b8f96");
  quad(16, 289, 76, 236, 131, 281, 81, 331);
  fill("#6b8f96");
  quad(7, 309, 76, 256, 141, 301, 81, 341);
  fill("#6b8f96");
  quad(7, 329, 76, 276, 161, 321, 81, 361);
  fill("#6b8f96");
  quad(1, 359, 76, 306, 163, 351, 81, 391);
  fill("#6b8f96");
  quad(19, 380, 76, 330, 171, 377, 81, 400);
  
  
  //dark tree on left
  fill("#3a575a");
  quad(122, 306, 140, 287, 162, 309, 140, 317);
  fill("#3a575a");
  quad(120, 321, 140, 297, 160, 325, 140, 332);
  fill("#3a575a");
  quad(115, 331, 140, 307, 166, 331, 140, 348);
  fill("#3a575a");
  quad(111, 351, 140, 327, 171, 355, 140, 361);
  fill("#3a575a");
  quad(105, 371, 140, 347, 191, 381, 140, 378);
  
  //dark tree on left 2
  fill("#3a575a");
  quad(186, 291, 200, 267, 222, 289, 200, 297);
  fill("#3a575a");
  quad(182, 306, 200, 287, 222, 309, 200, 317);
  fill("#3a575a");
  quad(180, 321, 200, 297, 220, 325, 200, 332);
  fill("#3a575a");
  quad(175, 337, 200, 307, 226, 341, 200, 348);
  fill("#3a575a");
  quad(171, 359, 200, 327, 241, 360, 200, 381);
  fill("#3a575a");
  quad(165, 371, 200, 347, 251, 381, 200, 400);
  
  
  
  
  
  //hoton grass
  fill("#197000");
  triangle(464, 299, 494, 315, 475, 315);
  fill("#197000");
  triangle(489, 300, 498, 314, 483, 315);
  fill("#197000");
  triangle(502, 293, 514, 316, 490, 316);
  fill("#197000");
  triangle(522, 293, 529, 318, 497, 317);
  fill("#197000");
  triangle(527, 297, 544, 314, 523, 315);
  fill("#197000");
  triangle(542, 297, 559, 313, 534, 313);
  fill("#197000");
  triangle(551, 290, 562, 312, 550, 312);
  fill("#197000");
  triangle(562, 293, 570, 311, 555, 313);
  fill("#197000");
  triangle(572, 293, 578, 311, 561, 309);
  fill("#197000");
  triangle(587, 289, 594, 310, 570, 309);
  fill("#197000");
  triangle(598, 291, 607, 313, 591, 312);
  fill("#197000");
  triangle(603, 294, 617, 308, 602, 309);
  fill("#197000");
  triangle(615, 283, 625, 314, 612, 311);
  fill("#197000");
  triangle(626, 291, 634, 317, 614, 312);
  fill("#197000");
  triangle(634, 297, 640, 317, 625, 313);
  fill("#197000");
  triangle(650, 297, 645, 314, 627, 317);
  //hoton
  fill("#66450e");
  quad(436, 389, 475, 315, 610, 305, 654, 381);
  fill("#4c3714");
  quad(654, 381, 610, 305, 645, 314, 694, 379);
  fill("#4c3714");
  quad(509, 373, 513, 342, 533, 342, 535, 372);
  
  
  //kyryo part1
  fill("#e0b975");
  quad(0, 354, 0, 350, 94, 340, 94, 344);
  fill("#e0b975");
  quad(0, 365, 0, 361, 94, 354, 94, 358);
  fill("#e0b975");
  quad(94, 344, 94, 340, 243, 357, 243, 361);
  fill("#e0b975");
  quad(94, 358, 94, 354, 243, 371, 243, 375);
  fill("#e0b975");
  quad(243, 361, 243, 357, 360, 366, 360, 370);
  fill("#e0b975");
  quad(243, 375, 243, 371, 360, 374, 360, 378);
  fill("#e0b975");
  quad(360, 370, 360, 366, 488, 355, 488, 359);
  fill("#e0b975");
  quad(360, 378, 360, 374, 488, 364, 488, 368);
  fill("#e0b975");
  quad(611, 347, 611, 351, 698, 357, 698, 353);
  fill("#e0b975");
  quad(614, 361, 614, 365, 699, 365, 699, 361);
  fill("#e0b975");
  quad(698, 353, 698, 357, 720, 356, 720, 352);
  fill("#e0b975");
  quad(699, 361, 699, 365, 720, 369, 720, 365);
  //kyryo part2
  fill("#ffd488");
  quad(12, 385, 10, 336, 18, 331, 17, 385);
  fill("#ffd488");
  quad(92, 385, 90, 326, 98, 331, 97, 385);
  fill("#ffd488");
  quad(235, 385, 243, 346, 251, 351, 240, 385);
  fill("#ffd488");
  quad(360, 385, 356, 356, 364, 361, 365, 385);
  fill("#ffd488");
  quad(490, 385, 486, 346, 492, 351, 495, 385);
  fill("#ffd488");
  quad(612, 385, 609, 336, 614, 334, 617, 385);
  fill("#ffd488");
  quad(700, 385, 697, 346, 702, 344, 705, 385);
  

  //randomtreeattempt
  
  
 
  
  //darkgrass
  fill("#2b641a");
  quad(0, 375, 68, 364, 400, 400, 0, 400);
  quad(260, 387, 622, 364, 720, 400, 350, 400);
  quad(260, 387, 720, 374, 720, 400, 350, 400);
  
   //grass closer layer
  fill("#388300");
  //xoff = xoff +0.01;
  //let n = noise(xoff) * width;
  triangle(grassX + 28, 353, 26, 400, 18, 400);
  triangle(grassX + 9, 365, 38, 400, 26, 400);
  triangle(grassX + 45, 373, 42, 400, 31, 400);
  triangle(grassX + 0, 369, 19, 400, 0, 400);
  triangle(grassX + 66, 337, 59, 400, 48, 400);
  triangle(grassX + 104, 345, 74, 400, 64, 400);
  triangle(grassX + 73, 329, 90, 400, 79, 400);
  triangle(grassX + 105, 377, 106, 400, 94, 400);
  triangle(grassX + 576, 352, 592, 400, 578, 400);
  triangle(grassX + 630, 350, 612, 400, 603, 400);
  triangle(grassX + 555, 377, 570, 400, 562, 400);
  triangle(grassX + 601, 354, 626, 400, 618, 400);
  triangle(grassX + 659, 356, 644, 400, 634, 400);
  triangle(grassX + 631, 377, 657, 400, 648, 400);
  triangle(grassX + 663, 367, 673, 400, 658, 400);
  triangle(grassX + 690, 335, 693, 400, 681, 400);
  triangle(grassX + 720, 332, 712, 400, 698, 400);
  
  //grassX = grassX + random(-0.5,0.5);
  //grassX = grassX - 0.1;
  
  //if (grassI < 0){
    //grassX = 0;
  //}
  
  if (frameCount % 10 === 0){
    grassX = 2;
  }
  if (frameCount % 20 === 0){
    grassX = 3;
  }
  if (frameCount % 40 === 0){
    grassX = 0;
  }
  
  
  
  
  
    
  
  textSize(14);
  fill(255);
  text(mouseX + ", " + mouseY, 20, 20);
  
  //eyelids can i boolean shape them?
   fill(255);
  noStroke();
  bezier(356, 148, 384, 148, 405, 139, 418, 115);
  bezier(323, 116, 337, 139, 362, 153, 382, 147);
  bezier(335, 134, 342, 142, 367, 160, 405, 133);
  bezier(321, 101, 320, 68, 353, 51, 376, 51);
  bezier(350, 56, 380, 45, 405, 60, 419, 93);
  triangle(362, 60, 386, 75, 335, 87);
  triangle(386, 70, 358, 79, 406, 86);
  
  noFill();
   strokeWeight(6);
  stroke(255)
  bezier(324, 117, 345, 140, 395, 144, 417, 115);
  bezier(321, 101, 343, 77, 392, 79, 419, 95);
  
  strokeWeight(6);
  ellipse(370, 100, 98, 98);
  
  
  
  

  //countours for eyelids
  noFill();
  strokeWeight(3);
stroke("#484c58");
bezier(323, 117, 346, 144, 396, 141, 418, 115);
bezier(321, 101, 343, 77, 392, 79, 419, 95);
  ellipse(370, 100, 100, 100);
  
  //fill("#7a9ed9");
  //noStroke();
  //bezier(319, teardropY1 + 112, 306, teardropY2 + 150, 337, teardropY2 + 150, 320, teardropY1 + 112);
  //teardropY1 = teardropY1 + 4;
  //teardropY2 = teardropY2 + 4;
  
  //circle(321, 126, 10, 10);
  //bezier(318, 102, 311, 130, 317, 129, 326, 121);
  
  //blend eyelids
  
  
  //stroke("#980011");
  //fill("#ff7282");
  //ellipse(370, 100, 100, 100);
  //noStroke();
  //fill("#450007");
  //ellipse(370, 133, 100, 100);
  
 // noFill();
 //strokeWeight(3);
//stroke(startcolor);
 
//starttext = text('саҕалаа', 53, 207);
  
  noStroke();
  fill("#7a9ed9");
  quad(0, 400 - cry, 720, 400 - cry, 720 , 410,  0, 410);
  

if (clicked === true) {
  fill("#7a9ed9");
  noStroke();
  bezier(319, teardropY1 + 112, 306, teardropY2 + 150, 337, teardropY2 + 150, 320, teardropY1 + 112);
  teardropY1 = teardropY1 + 4;
  teardropY2 = teardropY2 + 4;
  cry = cry + 0.3;
}
  if (frameCount % 125 === 0){
    clicked = false;
  teardropY1 = 0;
  teardropY2 = 0;
  }
  textSize(22);
  stroke("#9cdbf5");
  strokeWeight(1);
  fill("#9cdbf5");
  text("I'm sorry it happened to you", 255, 173);
  text("It will get", 128, 89);
  text("better", 422, 37);
  text("someday", 535, 15);
  noStroke();
  fill("#2b641a");
  text("I'm here", 112, 393);
  fill("#66450e");
  text("I hear you", 478, 334);
  
  noFill();
  strokeWeight(3);
stroke("#484c58");
  ellipse(370, 100, 100, 100);
  
  noStroke();
  
  
  
  
  textSize(16);
  function mouseReleased(){
    print(mouseX + ", " + mouseY);
  }
}
//eye is from this example https://p5js.org/examples/math-arctangent.html
function Eye(tx, ty, ts) {
  this.x = tx;
  this.y = ty;
  this.size = ts;
  this.angle = 0;

  this.update = function(mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
  };

  this.display = function() {
    push();
    translate(this.x, this.y);

      
    
    noStroke;
    fill(eyecolor);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    fill("#66450e");
    ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
    fill("#000000");
    ellipse(this.size / 4, 0, this.size / 4, this.size / 4);
    //fill(255);
    //ellipse(this.size / 10, 0, this.size / 8, this.size / 8);
    
    pop();
    
    
    
    
  };
  
}


function mouseClicked() {
  
  //if (startcolor === "#484c58") {
   // eyecolor = ("#ffd1d9");
    //eyecolor = lerpColor(normaleye, redeye, 0.5);
    //eyecolor = lerpedcolor;
    //fill(lerpedcolor);
  //rect(170, 30, 50, 100);
     //teardrop
  //startcolor = ("#adb0c8"); 
    
  
    
    //starttext.remove();
    
  //}
  
  if (mouseX > 318 && mouseX < 421 && mouseY > 49 && mouseY < 150){
  clicked = true;  
}}

let e1;

function setup() {
  createCanvas(720, 400);
  

  e1 = new Eye(370, 100, 100);
  
  }


function draw(){
  background("#9cdbf5");
  noStroke();
  
  e1.update(mouseX, mouseY);
  e1.display();
  
  
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
  quad(454, 249, 505, 216, 540, 241, 500, 281);
  quad(443, 269, 505, 236, 550, 261, 500, 301);
  quad(436, 289, 505, 236, 560, 281, 500, 331);
  quad(426, 309, 505, 256, 570, 301, 500, 341);
  quad(426, 329, 505, 276, 570, 321, 500, 361);
  quad(420, 359, 505, 306, 576, 351, 500, 391);
  quad(410, 380, 505, 330, 590, 377, 500, 400);
  
  //blue green tree on left
  fill("#6b8f96");
  quad(192, 214, 220, 166, 248, 206, 225, 221);
  quad(185, 234, 220, 196, 257, 221, 225, 251);
  quad(179, 249, 230, 226, 260, 241, 225, 281);
  quad(170, 269, 230, 236, 280, 261, 225, 301);
  quad(160, 289, 230, 236, 285, 281, 225, 331);
  quad(151, 309, 230, 256, 295, 301, 225, 341);
  quad(151, 329, 230, 276, 315, 321, 225, 361);
  quad(145, 359, 230, 306, 317, 351, 225, 391);
  quad(135, 380, 230, 330, 325, 377, 225, 400);
  
   
  //gray tree on left
  fill("#97a8c1");
  quad(12, 104, 44, 65, 93, 104, 55, 115);
  quad(2, 129, 47, 95, 100, 125, 58, 145);
  quad(0, 159, 47, 115, 106, 164, 41, 197);
  quad(0, 190, 47, 135, 125, 195, 0, 220);
  quad(9, 200, 47, 150, 128, 220, 0, 250);
  quad(9, 210, 47, 150, 128, 220, 0, 250);
  quad(0, 230, 47, 170, 145, 245, 0, 266);
  quad(7, 245, 68, 225, 177, 290, 0, 285);
  quad(0, 280, 68, 250, 177, 330, 0, 345);
  quad(0, 310, 68, 280, 220, 375, 0, 385);
  
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
  
 
  
  //darkgrass
  fill("#2b641a");
  quad(0, 375, 68, 364, 400, 400, 0, 400);
  quad(260, 387, 622, 364, 720, 400, 350, 400);
  quad(260, 387, 720, 374, 720, 400, 350, 400);
  
   //grass closer layer
  fill("#388300");
  triangle(28, 353, 26, 400, 18, 400);
  triangle(9, 365, 38, 400, 26, 400);
  triangle(45, 373, 42, 400, 31, 400);
  triangle(0, 369, 19, 400, 0, 400);
  triangle(66, 337, 59, 400, 48, 400);
  triangle(104, 345, 74, 400, 64, 400);
  triangle(73, 329, 90, 400, 79, 400);
  triangle(105, 377, 106, 400, 94, 400);
  triangle(576, 352, 592, 400, 578, 400);
  triangle(630, 350, 612, 400, 603, 400);
  triangle(555, 377, 570, 400, 562, 400);
  triangle(601, 354, 626, 400, 618, 400);
  triangle(659, 356, 644, 400, 634, 400);
  triangle(631, 377, 657, 400, 648, 400);
  triangle(663, 367, 673, 400, 658, 400);
  triangle(690, 335, 693, 400, 681, 400);
  triangle(720, 332, 712, 400, 698, 400);
  
  
  
  
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
  

  
  noFill();
  strokeWeight(3);
stroke("#484c58");
bezier(323, 117, 346, 144, 396, 141, 418, 115);
bezier(321, 101, 343, 77, 392, 79, 419, 95);
  ellipse(370, 100, 100, 100);
  
  //blend eyelids
  
  
  //stroke("#980011");
  //fill("#ff7282");
  //ellipse(370, 100, 100, 100);
  //noStroke();
  //fill("#450007");
  //ellipse(370, 133, 100, 100);
  
  
  textSize(32);
text('саҕалаа', 53, 207);
  
  
  textSize(32);
text('тахсыы', 562, 224);
 
  
  
  textSize(16);
  function mouseReleased(){
    print(mouseX + ", " + mouseY);
  }
}

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
    fill(255);
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
function setup() {
  createCanvas(500, 500);
  
}

function draw() {
  background(150);
  for (let j = 0; j <= height; j += 25){
    for (let i = 0; i <= width; i += 25){
      rect(i, j, 20, 20);

    }
    
  }
}

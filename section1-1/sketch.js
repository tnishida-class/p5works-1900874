function setup() {
  createCanvas(128,128);
}

function draw() {
  background(3);
  strokeWeight(6);
  fill(178, 88, 162);
  triangle(12,120,116,120,116,10);
  fill(94, 185, 84);
  triangle(0,108,104,108,104,0);
  fill(255);
  textSize(36);
  textFont("serif");
  text("23", 68, 100);
}

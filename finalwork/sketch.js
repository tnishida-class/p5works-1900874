// 最終課題を制作しよう
let x, y, vx, vy,t;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 4;
  vy = 4;

}

function draw(){
  background(0,0,55);
  fill(255);
  for(let i = 0; i < 22; i++){
    for(let j = 0; j < 5; j++){
 star(60 * i,60 * j,10,0);}}

  fill(255,255,0);
    if(y>400){
        fill(0,0,55)}
  noStroke();
  star(x,y,20,x/3);

  fill(255);
 triangle(t+30,400,t-30,400,t,450);

 x += vx;
  y += vy;

if(x < 0 || x > width){ vx = -1 * vx; }
  if(y < 0 || y > height){ vy = -1 * vy; }

  x = constrain(x, 0, width);
  y = constrain(y, 0, height);

}

function mouseClicked(){

  t = mouseX;
}

function star(cx, cy, r, angle){
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI + angle;

    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

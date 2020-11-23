// チェッカー
function setup() {
  createCanvas(200, 200);
let size = width / 8;
  noStroke();

  for(let i = 0; i < 20; i++){
    for(let j = 0; j < 20; j++){

if(i % 2 == 0 && j % 2 == 0){
        fill(255)}
      else if(i % 2 == 1 && j % 2 == 1){
        fill(255)}
      else{fill(150)}
      rect(i * size, j * size, 30, 30);

if(i % 2 == 1 &&j % 2 == 0 && j < 3){
        fill(255,0,0)}
      else if (i % 2 == 0 && j % 2 == 1 && j < 3){
        fill(255,0,0)}
      else if(i % 2 == 1 && j % 2 == 0 && j > 4){
        fill(0)}
      else if(i % 2 == 0 && j % 2 == 1 && j > 4){
        fill(0)}
  ellipse(i * size + 12.5,j * size + 12.5,20)
      }
        }}

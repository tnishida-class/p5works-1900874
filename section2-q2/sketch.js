// チェッカー
function setup() {
createCanvas(400, 400);
{fill(150);
stroke(150);
rect(50,0,50,50);
  for(let    x=50;x<=350;x=x+100){
 for(let y=0;y<=300;y=y+100)  {
 rect(x,y,50,50);
 }

for(let x=0;x<=300;x=x+100){
for(let y=50;y<=350;y=y+100)  {                        rect(x,y,50,50);             }}}
}
fill(255,0,0);
stroke(255,0,0);
 for(let  x=75;x<=375;x=x+100) {
 for(let  y=25;y<=200;y=y+100) {
 ellipse(x,y,45);
 } }
 for(let  x=25;x<=400;x=x+100){
 ellipse(x,75,45);
 }

fill(0);
stroke(0);
 for(let  x=25;x<=400;x=x+100) {
 for(let  y=275;y<=400;y=y+100) {
 ellipse(x,y,45);
 } }
 for(let  x=75;x<=400;x=x+100){
 ellipse(x,325,45);
 }
}
if(i % 2 == 0 && j % 2 == 0){
        fill(255)}
      else if(i % 2 == 1 && j % 2 == 1){
        fill(255)}
      else{fill(128)}
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

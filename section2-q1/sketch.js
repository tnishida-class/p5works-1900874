// 小手調べ
function setup() {
createCanvas(400,400);
stroke(255,0,0)
for(let x=200;x>=100;x=x-20) {
ellipse(200,200,x);
}
stroke(0,0,255);
for(let x=100;x>=0;x=x-20){
ellipse(200,200,x)
}
}

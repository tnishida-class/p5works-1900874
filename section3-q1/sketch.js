// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46  ",0,0,155,0);

}

function balloon(t,x,y,c,tc){
  push();
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 70;

  fill(c);
  stroke(c);
ellipse(130, 100, w + p , h + p );
  stroke(c);
  fill(c);
 triangle(130,100,w + p ,100,h + p * 3,150);
  fill(tc);
  text(t, p + x, h + p + 15 + y);
  pop();

}

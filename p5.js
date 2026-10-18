let cloudX = 0;

function setup() {
  createCanvas(600,400);
  noStroke();
}

function draw(){
  drawSky();
  drawSun(520,70,70);

  cloudX += 0.5;
  if (cloudX > width + 100){
    cloudX = -100;
  }
  drawCloud(cloudX, 80,1);
  drawCloud(cloudX -250, 130, 0.7);

  drawGround();


  drawFlower(80,300,40, color(255,80,120), 0 );
  drawFlower(190,320,55, color(255,200,0), 1 );
  drawFlower(300,295,35, color(180,90,255), 2 );
  drawFlower(410,330,60, color(255,130,50), 3 );
  drawFlower(500,305,45, color(255,255,255), 4 );
  drawFlower(560,340,30, color(80,160,255), 5 );
}

function drawSky(){
  background(135,206,235);
}

function drawGround() {
  fill(70,160,70);
  rect(0,280,width,120);
}

function drawSun(x,y,diameter) {
  fill(255,240,120,120);
  ellipse(x,y,diameter *1.4);
  fill(255,220,0);
  ellipse(x,y,diameter);
}

function drawCloud(x,y,scaleAmount){
  fill(255);
  ellipse(x,y,70 * scaleAmount, 40 * scaleAmount);
  ellipse(x + 25 * scaleAmount,y -  10 * scaleAmount, 50 * scaleAmount, 40 * scaleAmount);
  ellipse(x - 25 * scaleAmount,y -  5 * scaleAmount, 45 * scaleAmount, 35 * scaleAmount);
}

function calculateSway(offset) {
  let angle = frameCount * 0.05 + offset;
  return sin(angle) * 8;
}

function drawFlower(x,y, size, petalColor, swayOffset) {
  let sway = calculateSway(swayOffset);
  let headX = x + sway;
  let headY= y - size * 1.5;

  stroke(30,110,30);
  strokeWeight(4);
  noFill();
  bezier(x, y + 60, x , y + 20, headX, headY + 30, headX, headY);
  noStroke();

  fill(50,140,50);
  ellipse(x + 12, y - size * 0.3, 25, 10);

  fill(petalColor);
  for (let i = 0; i <8; i++){
    let a = (TWO_PI / 8) * i ;
      ellipse(headX + cos(a) * size * 0.5, headY + sin (a) * size * 0.5, size * 0.55, size * 0.55);
  }

  fill(255,190,0);
  ellipse(headX,headY,size * 0.5);
}

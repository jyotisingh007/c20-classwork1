var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
 //movingRect.velocityX= 5;
  fixedRect.velocityY = 5;
 //fixedRect.velocityX= -5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);

  drawSprites();
}

function bounceOff(p1,p2){

  if (p1.x - p2.x < p2.width/2 + p1.width/2
    && p2.x - p1.x < p2.width/2 + p1.width/2) {
  p1.velocityX = p1.velocityX * (-1);
  p2.velocityX = p2.velocityX * (-1);
}
if (p1.y - p2.y < p2.height/2 + p1.height/2
  && p2.y - p1.y < p2.height/2 + p1.height/2){
  p1.velocityY = p1.velocityY * (-1);
  p2.velocityY = p2.velocityY * (-1);
}
}
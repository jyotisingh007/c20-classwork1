var movingRect, fixedRect;
var object1, object2;

var ob3, ob4;
function setup(){
createCanvas(800,600);
//creating sprites
fixedRect= createSprite(400,200,50,80);
fixedRect.shapeColor= "green";

movingRect= createSprite(400,400,80,30)
movingRect.shapeColor= "green";

object1= createSprite(200,150,50,50);
object1.shapeColor= "green";
object1.debug = true;

object2= createSprite( 300,100, 50, 50);
object2.shapeColor="green";
object2.debug= true;

ob3= createSprite(100, 400,50,50)
ob3.shapeColor="green"
ob3.debug = true;

ob4= createSprite(150, 450, 50,50);
ob4.shapeColor="green"
ob4.debug = true;



}
function draw(){
background(0);
  movingRect.x = mouseX;
  movingRect.y=mouseY;

 // object1.x= mouseX;
  //object1.y= mouseY;
  //console.log(movingRect.x);
  //console.log(movingRect.x - fixedRect.x);

 //console.log(movingRect.y- fixedRect.y);

if(isTouching(movingRect, object2)){  //if(true)
  movingRect.shapeColor="blue";
  object2.shapeColor= "blue";
 
}
else{
  object2.shapeColor= "green";
movingRect.shapeColor= "green"; 
}

if(isTouching(movingRect,object1)){
  object1.shapeColor= "blue";
  movingRect.shapeColor="blue";
}
else{
movingRect.shapeColor= "green";
object1.shapeColor= "green"; 
}
if(isTouching(movingRect, ob3)){
  ob3.shapeColor="yellow";
  movingRect.shapeColor="yellow";
}
else{
  movingRect.shapeColor = "green"
  ob3.shapeColor="green";
}
  drawSprites();
}

function isTouching(p1, p2){

  if(p1.x - p2.x < p2.width/2 + p1.width/2  
    && p2.x -p1.x < p2.width/2 +p1.width/2 
    && p1.y- p2.y < p2.height/2 +p1.height/2
    && p2.y - p1.y < p2.height/2 +p1.height/2)
   { 
    return true;
  }
  else {
    return false;
  }
}

var fixedRect, movingRect;
var leftRect,righttRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(600,200,60,40);
  leftRect = createSprite(400, 100, 50, 50);
  rightRect = createSprite(600,100,60,40);

  leftRect.velocityX = 1;
  rightRect.velocityX = -7;

}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;


  console.log("Distance "+ (movingRect.x-fixedRect.x));
  console.log("Width " + (fixedRect.width+movingRect.width)/2);

  if((movingRect.x-fixedRect.x) <= (fixedRect.width+movingRect.width)/2
    && fixedRect.x-movingRect.x <= (fixedRect.width+movingRect.width)/2
    && fixedRect.y-movingRect.y <= (fixedRect.height+movingRect.height)/2
    && movingRect.y-fixedRect.y <= (fixedRect.height+movingRect.height)/2)
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    
  }
  else
  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  if((leftRect.x-rightRect.x) <= (rightRect.width+leftRect.width)/2
    && rightRect.x-leftRect.x <= (rightRect.width+leftRect.width)/2)
  {
    leftRect.velocityX = -1*leftRect.velocityX;
    rightRect.velocityX = -1*rightRect.velocityX;
  
  }




  drawSprites();

}
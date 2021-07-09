var shipImg
var seaImg
var ship,sea;
function preload(){
seaImg=loadImage("sea.png");
shipImg=loadAnimation("ship-1.png","ship-2.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200);
  sea.addImage(seaImg);
  sea.velocityX=-3
  sea.scale=0.3

  ship=createSprite(100,300);
  ship.addAnimation("ship",shipImg);
  ship.scale=0.2
}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x=sea.width/8
  }
 drawSprites();
}
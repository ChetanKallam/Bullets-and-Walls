var bullet,wall,speed,weight;
var deformation=0
var thickness
var damage





function setup() {
 

 
 
 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83)
 bullet=createSprite(50,200,20,50);
 wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor=color(80,80,80)
 bullet.shapeColor="white"
 bullet.velocityX=speed;
 
 
  createCanvas(1600,400);
  
}

function draw() {
  background(0);  
  if ((wall.x-bullet.x< (bullet.width+wall.width)/2)) {
bullet.velocityX=0
//deformation=0.5* weight*speed*speed/22500;
damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  }
 if(damage>10)
{
  wall.shapeColor="red"
}
  
  if(damage<10)
  {
    wall.shapeColor="green"
  }
  
  
  
  drawSprites();
}
var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(180,200, 50, 10);
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX=speed
  speed=random(55,90);
  weight=random(400.1500);
  thicknes=random(22,83);
}

function draw() {
  background(0);
  bullet.x=World.mouseX;
  bullet.y=World.mouseY;
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if(deformatin<180 && deformation>100)
    {
      bullet.shapeColor=color(230,230,0)
    }
    if(deformation<100)
    {
      bullet.shapeColor=color(0,250,0);
    }
  }

  drawSprites();
}

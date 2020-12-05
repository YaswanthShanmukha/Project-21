var bullet,wall,thickness ; 
var speed,weight ; 

function setup() {
 var canvas =  createCanvas(1600,400);
 //canvas.shapeColor = color(80,80,80);


  speed=random(223,331);
  weight=random(30,52);

 bullet =  createSprite(50,200,100,150);
 bullet.shapeColor = color (165,165,165); 
 
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = color (165,42,42);

 thickness = random(22,83)
}


function draw() {
  background(80,80,80);  

  bullet.velocityX = speed ; 

  function hasCollided(lbullet,lwall)
  {
    bulletRightEdge=lbullet.x +lbullet.width;
    wallLeftEdge = lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
    return false;
  }


  if(hasCollided(bullet,wall)) {
      bullet.velocityX = 0 ;
      var damage = 0.5*weight*speed*speed /(thickness*thickness*thickness) ; 

      if(damage < 10) 
      {
        bullet.shapeColor = color(225,0,0);
      }

      if(damage > 10) 
      {
        bullet.shapeColor = color(0,255,0);
      }
    } 
  drawSprites();
}
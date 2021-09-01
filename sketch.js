var edges;
var bg;
var police,policeImg;
var thief1,thief2,thief1Img,thief2Img;
var gun,gunImg,bullet,bulletImg;

function preload()
{
  bg = loadImage("./Images/Background.jpg");
  policeImg = loadGif("./Images/Police Walking.gif");
  thief1Img = loadGif("./Images/Thief2.gif");
  gunImg = loadImage("./Images/gun.png");
  bulletImg = loadImage('./Images/bullet.png')
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

   police = createSprite(40,350,50,50);
   police.addImage(policeImg);
   police.scale = 1.5;

 gun = createSprite(950,50,20,20);
 gun.addImage(gunImg);
 gun.scale = 0.35;

 bullet = createSprite(950,650,20,20);
 bullet.addImage(bulletImg);
 bullet.scale = 0.2;
 bullet.visible = true;

 thief1 = createSprite(200,200,20,20);
 thief1.addImage(thief1Img);
 thief1.scale = 0.1;

  
  edges = createEdgeSprites();
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(bg);
  if(keyDown("right"))
  {
    police.velocityX = 3;
  }
  if(keyDown("left"))
  {
    police.velocityX = -3;
  }
  if(keyDown("right"))
  {
    police.velocityX = 3;
  }
  if(keyDown("right"))
  {
    police.velocityX = 3;
  }
  police.collide(edges[3]);
  drawSprites();
}



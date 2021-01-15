var bg,bg1,bg2;
var playButton;
var hero,heroImg;
var villian,villianImg;
function preload(){
  bg1 = loadImage("startingBg.gif");
  bg2 = loadImage("villianBg.gif");
  playButton = loadImage("start.jpg");
  heroImg = loadImage("hero.jpg")
  villianImg = loadImage("villian.jpg")
}
function setup(){
  createCanvas(1000,400);
bg = createSprite(200,200);
bg.addImage(bg1);
bg.scale = 0.5;
play = createSprite(200,300,10,5);
play.addImage(playButton);
play.scale = 0.25;
hero = createSprite(200,150)
hero.addImage(heroImg)
hero.scale = 0.5;

}
function draw(){
  background("white");
  textFont("Arial");
  textSize(24);
  strokeWeight(3);
  stroke("white");
  fill("blue");
  var c = text("SAVE THE VICTIM", 100, 25);
  c.depth = bg.depth
  c.depth += 2
  
  
  if (mousePressedOver(play)){
   bg.addImage(bg2)
   bg.scale = 2.5
   hero.remove(heroImg)
   play.remove(playButton)
   villian = createSprite(215,250)
   villian.addImage(villianImg)
   villian.scale = 0.5
   
  }
  drawSprites();
}

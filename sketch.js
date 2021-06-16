var ghost1,ghost2,ghost3,ghost4
var pacmanImg
var pacMan 

function preload (){
  ghost1=loadImage("blue ghost.PNG")
  ghost2=loadImage("green ghost.PNG")
  ghost3=loadImage("pink ghost.PNG")
  ghost4=loadImage("red ghost.PNG")
  ghost5=loadImage("yellow ghost.PNG")
  pacmanImg =loadAnimation("pac man 1.PNG","pac man 2.PNG")
  pcImg=loadImage("pc.png")
}
function setup(){
createCanvas(400,400)
pacMan =createSprite(120,120,20,20)
//pacMan.addAnimation("moving",pacmanImg)
pacMan.addImage(pcImg)
pc.scale=0.01;
var cardboard1 = createSprite(10,70,100,10);
cardboard1.shapeColor = "brown";
var cardboard2 = createSprite(100,50,10,100);
cardboard2.shapeColor = "brown";
var cardboard3 = createSprite(80,130,100,10);
cardboard3.shapeColor = "brown";
var cardboard4 = createSprite(50,250,10,100);
cardboard4.shapeColor = "brown";
var cardboard5 = createSprite(130,210,100,10);
cardboard5.shapeColor = "brown";
var cardboard6 = createSprite(10,250,100,10);
cardboard6.shapeColor = "brown";
var cardboard7 = createSprite(160,120,10,100);
cardboard7.shapeColor = "brown";
var cardboard8 = createSprite(150,20,100,10);
cardboard8.shapeColor = "brown";
var cardboard9 = createSprite(250,70,10,100);
cardboard9.shapeColor = "brown";
var cardboard10 = createSprite(270,150,100,10);
cardboard10.shapeColor = "brown";
var cardboard11 = createSprite(330,50,100,10);
cardboard11.shapeColor = "brown";
var cardboard12 = createSprite(340,125,10,100);
cardboard12.shapeColor = "brown";
var cardboard13 = createSprite(220,250,10,100);
cardboard13.shapeColor = "brown";
var cardboard14 = createSprite(330,210,150,10);
cardboard14.shapeColor = "brown";
var cardboard15 = createSprite(100,300,10,100);
cardboard15.shapeColor = "brown";
var cardboard16 = createSprite(180,310,100,10);
cardboard16.shapeColor = "brown";
var cardboard17 = createSprite(30,352,10,100);
cardboard17.shapeColor = "brown";
var cardboard18 = createSprite(175,352,10,100);
cardboard18.shapeColor = "brown";
var cardboard19 = createSprite(280,290,10,100);
cardboard19.shapeColor = "brown";
var cardboard20 = createSprite(350,270,120,10);
cardboard20.shapeColor = "brown";
var cardboard21 = createSprite(250,390,100,10);
cardboard21.shapeColor = "brown";
var cardboard22 = createSprite(330,370,10,100);
cardboard22.shapeColor = "brown";
}
function draw(){
background(0)
drawSprites();
}
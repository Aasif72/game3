const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var seeker
var runner
function setup(){
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);



  wall1=createSprite(10,70,100,20);
  wall2=createSprite(100,50,20,100);
  wall3=createSprite(80,130,100,20);
  wall4=createSprite(50,250,20,100);

  wall5=createSprite(130,210,100,20);
  wall6=createSprite(10,250,100,20);
  wall7=createSprite(160,120,20,100);
  wall8=createSprite(150,20,100,20);
  wall9=createSprite(250,70,20,100);
  wall10=createSprite(270,150,100,20);

  wall11=createSprite(330,50,100,20);
  wall12=createSprite(340,125,20,100);

  wall13=createSprite(220,250,20,100);
  wall14=createSprite(330,210,150,20);
  wall15=createSprite(100,300,20,100);
  wall16=createSprite(180,310,100,20);
  wall17=createSprite(30,360,20,80);
  
  wall18=createSprite(175,352,20,100);
  wall19=createSprite(280,290,20,100);
  wall20=createSprite(350,270,120,20);
  wall21=createSprite(250,390,100,20);
  wall22=createSprite(330,370,20,100);
  edges=createEdgeSprites();
  
  seeker=createSprite(20,15,12,12);
  seeker.shapeColor="red";

  runner=createSprite(380,380,12,12);
  runner.shapeColor="blue";
  
  var coins1=createSprite(200,200,10,10);
  var coins2=createSprite(350,20,10,10);
  var coins3=createSprite(60,350,10,10);
  var coins4=createSprite(20,100,10,10);
  var coins5=createSprite(380,250,10,10);
  var coins6=createSprite(280,360,10,10);
  var coins7=createSprite(200,50,10,10);
  var coins8=createSprite(380,150,10,10);
  var coins9=createSprite(200,290,10,10);
  var coins10=createSprite(100,180,10,10);
  coins1.shapeColor="yellow";
  coins2.shapeColor="yellow";
  coins3.shapeColor="yellow";
  coins4.shapeColor="yellow";
  coins5.shapeColor="yellow";
  coins6.shapeColor="yellow";
  coins7.shapeColor="yellow";
  coins8.shapeColor="yellow";
  coins9.shapeColor="yellow";
  coins10.shapeColor="yellow";

}

function draw(){
background("lightBlue");


if(keyDown(RIGHT_ARROW)){
  seeker.x=seeker.x+3
}
if(keyDown(LEFT_ARROW)){
  seeker.x=seeker.x-3
}
if(keyDown(DOWN_ARROW)){
  seeker.y=seeker.y+3
}
if(keyDown(UP_ARROW)){
  seeker.y=seeker.y-3
}

if(keyDown("d")){
  runner.x=runner.x+3
}
if(keyDown("a")){
  runner.x=runner.x-3
}
if(keyDown("s")){
  runner.y=runner.y+3
}
if(keyDown("w")){
  runner.y=runner.y-3
}

if(seeker.isTouching(wall1)
||seeker.isTouching(wall2)
||seeker.isTouching(wall3)
||seeker.isTouching(wall4)
||seeker.isTouching(wall5)
||seeker.isTouching(wall6)
||seeker.isTouching(wall7)
||seeker.isTouching(wall8)
||seeker.isTouching(wall9)
||seeker.isTouching(wall10)
||seeker.isTouching(wall11)
||seeker.isTouching(wall12)
||seeker.isTouching(wall13)
||seeker.isTouching(wall14)
||seeker.isTouching(wall15)
||seeker.isTouching(wall16)
||seeker.isTouching(wall17)
||seeker.isTouching(wall18)
||seeker.isTouching(wall19)
||seeker.isTouching(wall20)
||seeker.isTouching(wall21)
||seeker.isTouching(wall22)){
  seeker.x=20;
  seeker.y=15;
}

if(runner.isTouching(wall1)
||runner.isTouching(wall2)
||runner.isTouching(wall3)
||runner.isTouching(wall4)
||runner.isTouching(wall5)
||runner.isTouching(wall6)
||runner.isTouching(wall7)
||runner.isTouching(wall8)
||runner.isTouching(wall9)
||runner.isTouching(wall10)
||runner.isTouching(wall11)
||runner.isTouching(wall12)
||runner.isTouching(wall13)
||runner.isTouching(wall14)
||runner.isTouching(wall15)
||runner.isTouching(wall16)
||runner.isTouching(wall17)
||runner.isTouching(wall18)
||runner.isTouching(wall19)
||runner.isTouching(wall20)
||runner.isTouching(wall21)
||runner.isTouching(wall22)){
  runner.x=380;
  runner.y=380;
}

seeker.collide(edges);
runner.collide(edges);


drawSprites();
}
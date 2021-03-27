const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world; 

function setup() {
  createCanvas(900, 500);
  
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground (450, 475, 900, 20);

  rect1 = new Dustbin (600,375,25, 150);
  rect2 = new Dustbin (690,460,150, 25);
  rect3 = new Dustbin (780,375,25, 150);

  paper = new Paper (170, 400, 70);

  Engine.run(engine);
  
}

function draw() {

  background("#e6e6e6");

  paper.display();
  rect1.display();
  rect2.display();
  rect3.display();
  ground.display();

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(paper.body,paper.body.position,{x:700,y:-900});
   }
 }
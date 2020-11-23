const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies = Matter.Bodies;


var engine, world;

var object1;

function setup() {
  createCanvas(400,400);

  engine = Engine.create(); //automatically a worlds creates
  world = engine.world;

  var options = {
    isStatic: true
  }

  object1 = Bodies.rectangle(200,390,400,20,options);
  World.add(world,object1);
 
  

}

function draw() {
  background("yellow");  

  Engine.update(engine);
  
  rectMode(CENTER);
  rect(object1.position.x,object1.position.y,400,20);
 
  drawSprites();
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plataforma;

var block1;
var block2;
var block3;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;







var ground_options = {
	isStatic : true
}



	//Crie os Corpos Aqui.
plataforma = Bodies.rectangle(150,390,400,10,ground_options)
World.add(world,plataforma)

var block1_option = {
	restitution: 0.5,
	friction: 0.02,
	frictionAir: 0
}




var block2_option = {
	restitution : 0.7,
	friction : 0.01,
	frictionAir : 0.1
}



var block3_option = {
	restitution : 0.01,
	friction : 1,
	frictionAir : 0.3
}





block1 = Bodies.circle(200,90,90,block1_option);
World.add(world,block1);






block2 = Bodies.rectangle(50,50,90,90,block2_option);
World.add(world,block2);






block3 = Bodies.rectangle(345,50,90,20,block3_option);
World.add(world,block3);








	Engine.run(engine);
  Engine.update(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
 rect(plataforma.position.x,plataforma.position.y,500,20)
 ellipse(block1.position.x,block1.position.y,90,90)
 rect(block2.position.x,block2.position.y,90,90,90)
 rect(block3.position.x,block3.position.y,90,50,20)

}




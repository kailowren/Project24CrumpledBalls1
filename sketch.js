
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, centre, right, left, ground;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball = new Paper (100,500,20);

	centre = new Dustbin(600,580,200,30);

	left = new Dustbin(500,540,30,100);

	right = new Dustbin(700,540,30,100);
	
	ground = new Ground(400,600,800,20);
	
	
	
	
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  ball.display();
  centre.display();
  ground.display();
  left.display();
  right.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:130,y:-130})
	}
}




const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[];
var plinkos=[];
var divisions=[];
var engine,world;

function setup() {
  createCanvas(480,800);
 
  engine=Engine.create();
  world=engine.world;

  for(var k=0;k<=innerWidth;k=k+80){
    divisions.push(new Divisions(k,height-150,10,300));
    
  }
  for(var i=0;i<=width;i=i+50){
    plinkos.push(new Plinko(i,75,10));
  }
}

function draw() {
  background(0);  
  Engine.update(engine);
  for(var i=0;i<divisions.length;i++){
    divisions[i].display();
  }
  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();  
  }

  if(frameCount%60 === 0){
  particles.push(new Particle(random(10,480),0,10));
  }
  for(var i=0;i<particles.length;i++){
    particles[i].display();
  }
}
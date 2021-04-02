const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var basket;
var basketball;
var ground1,ground2;
var slingshot1;

function preload(){
	
  basket=loadImage("images/sprite_01.png");
  }

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
	 
  ground1 = new ground(width/2,600,width,20)
  basketball = new Basketball(200,200)
  slingShot1 = new Slingshot(basketball.body,{x:240,y:400});
}

function draw() {
  background(255,255,255); 
  
  
ground1.display();
basketball.display();
slingshot1.display();
  drawSprites();
}
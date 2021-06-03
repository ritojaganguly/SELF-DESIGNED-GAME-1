const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

function preload() {
//preload the images here
bg = loadImage("bg.png");

}

function setup() {
  engine = Engine.create();
  world = engine.world;


  createCanvas(1360, 657);
  // create sprites here
  fish = new Fish(150,200,180,150);

}

function draw() {
  background(bg);
  fish.display();
}


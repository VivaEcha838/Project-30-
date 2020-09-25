const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var division;



var particles = []
var plinkos = []
var divisions = []

var divisionHeight = 300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;


  ground1 = new Ground(240,800,1600,20);



  for(var k = 0; k<=width; k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }



/*for(var j = 40; j <= width; j=j-50){
  plinkos.push(new Plinko(j,75));
}

for(var j = 15; j <= width; j=j-50){
  plinkos.push(new Plinko(j,175));
}


for(var j = 22; j <= width; j=j-50){
  plinkos.push(new Plinko(j,275));
}


for(var j = 30; j <= width; j=j-50){
  plinkos.push(new Plinko(j,375));
}
*/

}


function draw() {
  background(255,255,0);  

  Engine.update(engine);

  
for(var k = 0; k < divisions.length; k++){
   divisions[k].display;
}
  


ground1.display();


  drawSprites();
}


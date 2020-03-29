const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,350,50,50);
    box2 = new Box(280,350,50,50);
    box3 = new Box(200,330,50,50)
    box4 = new Box(280,330,50,50)
    ground = new Ground(200,height,400,20)
    pig1 = new Pig(230,350)
    pig2 = new Pig(230,330)
    log1 = new Log(235,340,180,PI/2)
    log2 = new Log(235,320,180,PI/2)
    log3 = new Log(225,315,80,PI/7)
    log4 = new Log(255,315,80,-PI/7)
    bird = new Bird(150,250)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}
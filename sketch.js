const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var cbuild, rbuild, lbuild, llbuild, rrbuild;
var ground;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    cbuild = new Building (400, 200, 200, 300); // 300-500
    rbuild = new Building (550, 200, 100, 200 ); //500-600
    lbuild = new Building (250, 200, 100, 200 ); //200-300
    llbuild = new Building (100, 200, 150, 100); //25-175
    rrbuild = new Building(700, 200, 150, 100); //625-775
    ground= new Ground(400,390,800,20);
}

function draw(){
    background("black");
    Engine.update(engine);
    cbuild.display();
    ground.display();
    rbuild.display();
    lbuild.display();
    llbuild.display();
    rrbuild.display();
}
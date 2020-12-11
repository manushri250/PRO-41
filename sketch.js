const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var boy, boyWalking;
var rain = [];
var maxDrops = 275;
var circlee;
var dpl;
var tbImg1, tbImg2, tbImg3, tbImg4;
var thunderCreatedFrame = 0;
var thunderbolt;

function preload(){
    //boyWalking = loadAnimation("images/walking_1.png","images/walking_2.png","images/walking_3.png","images/walking_4.png","images/walking_5.png","images/walking_6.png","images/walking_7.png","images/walking_8.png");
    tbImg1 = loadImage("images/tb1.png");
    tbImg2 = loadImage("images/tb2.png");
    tbImg3 = loadImage("images/tb3.png");
    tbImg4 = loadImage("images/tb4.png");
    thunderGroup = new Group();
}

function setup(){
    canvas = createCanvas(450,650);
    engine = Engine.create();
    world = engine.world;
       //boy = createSprite(width/2, 425, 20, 20);
    //boy.addAnimation("walking", boyWalking);
    //boy.scale = 0.5;

    for(var i=0; i<maxDrops; i++){
        rain.push(new Drops(random(0,490), random(0, 650)));
    }

    circlee = new Umbrella(width/2, 520, 300, 300);
    dpl = new Circle(235,460,300);
    

}

function draw(){
    background(0);
    Engine.update(engine);

    dpl.display();
    circlee.display();

    for (var i = 0; i < rain.length; i++){
        rain[i].display();
      }

    for (var i = 0; i < rain.length; i++){
        rain[i].update();
      }

    
   size();
   drawSprites();
}

function size (){
    if (frameCount % 60 === 0) {
        thunderbolt = createSprite(random(20, 480), 10, 100, 100);
        var rand = Math.round(random(1,4));
        switch(rand){
            case 1: thunderbolt.addImage("tb1",tbImg1);
                    thunderbolt.scale = 0.4;
            break;
            case 2: thunderbolt.addImage("tb2", tbImg2);
                    thunderbolt.scale = 0.4;
            break;
            case 3: thunderbolt.addImage("tb3", tbImg3);
                    thunderbolt.scale = 0.4;
            break;
            case 4: thunderbolt.addImage("tb4", tbImg4);
                    thunderbolt.scale = 0.4;
            break;
        }

        thunderGroup.add(thunderbolt);
        
    }

    if(frameCount % 62 === 0){
        for(var i = 0; i<thunderGroup.length; i++){
             thunderGroup.get(i).destroy();
            }
    }
}



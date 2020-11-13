
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
createCanvas(600,600);
  
  monkey=createSprite(50,540,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;
  
  ground=createSprite(300,580,1200,20);
  ground.velocityX=-4;
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {

  background("lightgreen");
  
  if(ground.x<0){
    ground.x=300;
  }
  
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
    monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  spawnFood();
  spawnObstacles();
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50);
}


function spawnFood(){
  if(frameCount%80===0){
    banana=createSprite(650,250,40,10);
    banana.y=Math.round(random(250,350));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-5;
    banana.lifetime=200;
    FoodGroup.add(banana);
    monkey.depth=banana.depth+1;
  }
}

function spawnObstacles(){
  if(frameCount%300===0){
     obstacles=createSprite(800,540,10,40);
     obstacles.addImage(obstacleImage);
     obstacles.velocityX=-4;
     obstacles.scale=0.2;
     obstacles.lifetime=300;
     obstacleGroup.add(obstacles);
  }
  
  
}


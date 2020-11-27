var player,playerImage;
var background,backgroundImage;
var obstacle,obstacleImage,obstacle2,obstacle2Image;
var gameState = "play";
var obstacle2Group,obstacleGroup;
var play=1;
var end=0;
var game,gameImage;
var gameOverImage;



function preload(){
backgroundImage=loadImage("Screenshot (79).png")
obstacleImage=loadImage("Screenshot (81).png")
obstacle2Image=loadImage("Screenshot (83).png")
playerImage=loadImage("Screenshot__84_-removebg-preview.png")
gameImage=loadImage("Screenshot (90)-1.png")
gameOverImage=loadImage("Screenshot__88_-removebg-preview.png")
startImage=loadImage("Screenshot__91_-removebg-preview (1).png")


}

function setup() {
createCanvas(650,400)
  
  background=createSprite(200,100)
 background.addImage( backgroundImage)
 background.scale=4.6
 background.velocityX=-3;


player=createSprite(100,200)
 player.addImage( playerImage)
 player.scale=0.3
 
  
 obstacleGroup= new Group();
   obstacle2Group= new Group();
}

function draw() {
 drawSprites();

   player.setCollider("rectangle",-80,0,240,180);
  player.debug = false;
  player.depth= player.depth + 4
  
  

 





 if (gameState === "play") {
  
   if(background.x<0){
  background.x=200
}
 
 if(keyDown("space")) {
        player.velocityY = -6;
    
    }
 
  player.velocityY = player.velocityY + 0.8;
  
  
  
  obstacles();
 obstacles2();
  
  

   
   
   
 if(player.isTouching(obstacle2Group) ){
   gameState=end
 }
 
if(player.isTouching(obstacleGroup) ){
   gameState=end
 }
 
 
 
 
 
 }  
 else if (gameState === end) {
  background.velocityX=0;
 player.velocityY=0;
obstacleGroup.setVelocityXEach(0);
 obstacle2Group.setVelocityXEach(0);
 player.addImage(gameOverImage)
 player.x=250
   player.scale=1.1
 
 } 
 


    
    
   

}


function obstacles(){
if(frameCount%200===0){
  obstacle=createSprite(650,130) 
obstacle.x=obstacle.x + 10
  obstacle.addImage(obstacleImage)
 obstacle.scale=1.6
 obstacle.velocityX=-3;

  
  
obstacleGroup.add(obstacle)


}
  
  
  
}

function obstacles2(){
if(frameCount%200===0){
  obstacle2=createSprite(650,290) 
obstacle2.x=obstacle.x + 269
  obstacle2.addImage(obstacle2Image)
 obstacle2.scale=1.6
 obstacle2.velocityX=-3;
   
  
obstacle2Group.add(obstacle2)


}
  
  
  
}





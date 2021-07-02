var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation1,carAnimation2, logAnimation, playerAnimation;
var school;
function preload()
{

carAnimation1=loadAnimation("images/car1.png")
carAnimation2=loadAnimation("images/car2.png")
logAnimation2=loadAnimation("images/log2.png")       
playerAnimation=loadAnimation("images/player-03.png")
}

function setup() {
  createCanvas(1366,700);
 
  
  
  

  


  carGroup1 = new Group();
  logGroup1 = new Group();
  
  
  for(var i = 0; i < 40; i++ ){
    cars=new Car(2);
    carGroup1.add(cars.spt)

   }
  
   for(var i = 0; i < 40; i++ ){
    logs=new Log(2);
    logGroup1.add(logs.spt)  

   }

     






  for(var i=0;i<6;i++){
    
    var bottomGrass1=createSprite(683 ,height-50-(i*400),width,grassHeight);
    if(1%2===0)
    
    {
     var road=createSprite(683,height-150-(i*400)-grassHeight,width,300)
     road.shapeColor="black";

    }
    bottomGrass1.shapeColor="green";
    


  }
  player = new Player (width/2,height-25)
}

function draw() {

  for(i=1;i<logGroup1.length;i++){
    if(logGroup1[i].x<0)
    {
     logGroup1[i].x=width

    }

    }

    for(i=1;i<logGroup1.length;i++){
      if(logGroup1[i].x<0)
       { 
       logGroup1[i].x=width;
 
      }
 
      }


     

  if(carGroup1.isTouching(player.spt)){
    player.spt.x=width/2;
    player.spt.y=height-75
  }
  
  if(logGroup1.isTouching(player.spt)){
     player.spt.x=player.spt.x-3
  }
  else if(( player.spt.y > height-1550  && player.spt.y < height -1300)||
           (player.spt.y < height-500 && player.spt.y > height -850)||
           (player.spt.y>height)||
           (player.spt.x <0)||
           (player.spt.x>width)){

          player.spt.x=width/2
          player.spt.y=-height75

           }

   




  background("skyblue")

  translate( 0,-player.spt.y+height-150);

  drawSprites();
}

function keyPressed (){

  if(keyCode == UP_ARROW){
    player.move(0,-2);
  }else if (keyCode == DOWN_ARROW){
    player.move(0,2)
  }else if (keyCode == LEFT_ARROW){
    player.move(-2,0)
  }else if (keyCode == RIGHT_ARROW){
    player.move(2,0)
  }
}









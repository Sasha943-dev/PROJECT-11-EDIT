var idk;
var path;
var idkImg;
var pathImg;
var boundary1;
var boundary2;

function preload(){

 pathImg = loadImage("path.png");
 idkImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  
  idk = createSprite(200,200);
  idk.addAnimation("running kid",idkImg);
  idk.scale=0.1;

  path = createSprite(200,200);
  path.addImage(pathImg)
  path.scale = 1.1;
  path.velocityY+=5;

  boundary1 = createSprite(350,200,5,400);
  boundary1.visible = false;
  boundary2 = createSprite(55,200,5,400);
  boundary2.visible = false;
 
  


}

function draw() {
  background("white");
 
  if(path.y>400){
    path.y = height/2;
  }
 
  path.depth=idk.depth;
  idk.depth+=1;

  idk.bounceOff(boundary1);
  idk.bounceOff(boundary2);

  
 


  

  if(keyDown("left")){
    idk.x-=5;

  }

  if(keyDown("right")){
    idk.x+=5;

  }
   

  

  if(keyDown("up")){
    idk.y-=5;

  }

  if(keyDown("down")){
    idk.y+=5;

  }





    



  drawSprites();

}

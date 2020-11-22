
var context = document.getElementById("canvas").getContext("2d");
var showPoint = document.getElementById("showPoint");
//--------
var x=0;
var y=20;
var x1=700;
var y1=380;
var width=200;
var height=40;
var speedLeft=10;
var speedRight=10;
var fakeSpeedLeft=speedLeft;
var fakeSpeedRight=-speedLeft;

var player = {
    x:400,
    y:760,
    width:40,
    height:40,
    step:5,
}
var isMoveRight=false;
var isMoveLeft=false;
var isMoveUp=false;
var isMoveDown=false;
var isMoveFast=false;

function setPlayer(){
    context.beginPath();
    context.rect(player.x,player.y,player.width,player.height);
    context.fillStyle="black";
    context.fill();
    context.closePath();
}
function setRectangle(){
    //--------------------------
    context.beginPath();
    context.rect(x,y,width,height);
    context.fillStyle="red";
    context.fill();
    context.closePath();
    //--------------------------
    context.beginPath();
    context.rect(x,y+180,width,height);
    context.fillStyle="red";
    context.fill();
    context.closePath();
    //---------------------------
    context.beginPath();
    context.rect(x1,y1,width,height);
    context.fillStyle="red";
    context.fill();
    context.closePath();
    //----------------------------
    context.beginPath();
    context.rect(x1,y1+200,width,height);
    context.fillStyle="red";
    context.fill();
    context.closePath();

}
function moveObtacble(){
      x+=speedLeft;
      x1-=speedRight;
      if( x > canvas.clientWidth-width){
          speedLeft=fakeSpeedRight;
      }
      if(x<0){
          speedLeft=fakeSpeedLeft
      }
      if( x1 < 0){
        speedRight=-fakeSpeedLeft;
    }
    if( x1 > canvas.clientWidth-width){
        speedRight=-fakeSpeedRight;
    }
    
      
      
}

document.addEventListener("keydown",function(event){
      if(event.keyCode === 37){
          isMoveLeft=true;
      }
      if(event.keyCode === 39){
        isMoveRight=true;
      }
      if(event.keyCode === 38){
        isMoveUp=true;
      }
      if(event.keyCode === 40){
        isMoveDown=true;
      }
      if(event.keyCode === 17){
        isMoveFast=true;
      }

    
     
})

document.addEventListener("keyup",function(event){
    if(event.keyCode === 37){
        isMoveLeft=false;
    }
    if(event.keyCode === 39){
      isMoveRight=false;
    }
    if(event.keyCode === 38){
        isMoveUp=false;
      }
      if(event.keyCode === 17){
        isMoveFast=false;
      }  
   
  
})

function movePlayerNow(){
    if(isMoveLeft){
        player.x-=player.step;
       
    }
    if(isMoveRight){
        player.x+=player.step;
    }

    if(isMoveUp){
        player.y-=player.step;
    }
    if(isMoveDown){
        player.y+=player.step;
    }
    if(isMoveFast){
        player.y-=player.step+player.step+player.step;
    }

} 
function playerTouchCanvas(){
    if(player.x<0){
         player.x=0
    }
    if(player.x>canvas.clientWidth-player.width){
        player.x=canvas.clientWidth-player.width;
    }
    if(player.y>canvas.clientHeight-player.height){
        player.y=canvas.clientHeight-player.height
    }
    if(player.y<0){
        alert("win");
        showPoint.textContent=parseFloat(showPoint.textContent)+1;
        player.x=400;
        player.y=780;
        speedRight+=10;
        speedLeft+=10;
    }
    
}
function playerTouchObtacble(){
   if(player.x>x && player.x<x+160 && player.y>y && player.y<y+40){ 
    alert("Game Over")
       player.x=400;
       player.y=780;
   }
    if(player.x>x && player.x<x+160 && player.y>y+180 && player.y<y+40+180){ 
     alert("Game Over")
        player.x=400;
        player.y=780;
    }
     if(player.x>x1 && player.x<x1+160 && player.y>y1&& player.y<y1+40){ 
     alert("Game Over")
        player.x=400;
        player.y=780;
    }
    if(player.x>x1 && player.x<x1+160 && player.y>y1+200 && player.y<y1+40+200){ 
        alert("Game Over")
           player.x=400;
           player.y=780;
       }

 
} 

function runCanvas(){




    context.clearRect(0,0,canvas.clientWidth,canvas.clientHeight)
         setRectangle();
         moveObtacble();
         setPlayer();
         movePlayerNow();
         playerTouchCanvas();
         playerTouchObtacble();
         requestAnimationFrame(runCanvas);
         
}
runCanvas() 
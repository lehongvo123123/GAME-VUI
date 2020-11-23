let player = {
    x:400,
    y:760,
    width:40,
    height:40,
    step:10,
}


function setPlayer(){
    context.beginPath();
    context.rect(player.x,player.y,player.width,player.height);
    context.fillStyle="black";
    context.fill();
    context.closePath();
}

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
        setUpPosition()
    }
    
}
function playerTouchObtacble(){
   if(player.x>x && player.x<x+160 && player.y>y && player.y<y+40){ 
    alert("Game Over")
       player.x=400;
       player.y=780;
       setUpPosition()
   }
    if(player.x>x && player.x<x+160 && player.y>y+180 && player.y<y+40+180){ 
     alert("Game Over")
        player.x=400;
        player.y=780;
        setUpPosition()
    }
     if(player.x>x1 && player.x<x1+160 && player.y>y1&& player.y<y1+40){ 
     alert("Game Over")
        player.x=400;
        player.y=780;
        
        setUpPosition()
    }
    if(player.x>x1 && player.x<x1+160 && player.y>y1+200 && player.y<y1+40+200){ 
        alert("Game Over")
           player.x=400;
           player.y=780;
           
           setUpPosition()
       }
} 
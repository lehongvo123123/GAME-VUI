let isMoveRight=false;
let isMoveLeft=false;
let isMoveUp=false;
let isMoveDown=false;
let isMoveFast=false;


function setUpPosition(){
    isMoveLeft = false;
    isMoveRight=false;
    isMoveUp=false;
    isMoveDown=false;
    isMoveFast=false;


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

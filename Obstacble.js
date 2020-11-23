let x=0;
let y=20;
let x1=700;
let y1=380;
let width=200;
let height=40;
let speedLeft=10;
let speedRight=10;
let fakeSpeedLeft=speedLeft;
let fakeSpeedRight=-speedLeft;

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
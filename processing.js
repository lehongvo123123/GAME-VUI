
let context = document.getElementById("canvas").getContext("2d");
let showPoint = document.getElementById("showPoint");

function runCanvas(){
    context.clearRect(0,0,canvas.clientWidth,canvas.clientHeight)
         setRectangle();
         moveObtacble();
         setPlayer();
         movePlayerNow();
         playerTouchCanvas();
         playerTouchObtacble();
         setUpPosition()
         requestAnimationFrame(runCanvas);    
}
 
 runCanvas()  
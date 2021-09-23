let canvas=document.getElementById('canvas');
var ctx = canvas.getContext('2d');
let balls=[]

function setup(){
    // const ball1=new Ball(10,10,2,3,10);
    // balls.push(ball1);
    // for(let i=0;i<5;i++){
    //     balls.push(new Ball(10+i*5,10+i*5,i+1,i+2,10,"blue"))
    // }
     
      
}
 canvas.addEventListener('mousedown', newBall);

// function logKey(e) {
//   var rect = canvas.getBoundingClientRect();
//     console.log(e.clientX,e.clientY)
// console.log(e.clientX-rect.left)
// console.log(e.clientY - rect.top)
    
//         // return {
//         //   x: evt.clientX - rect.left,
//         //   y: evt.clientY - rect.top
//         // };
// }
function newBall(e) {
    var rect = canvas.getBoundingClientRect();
  //canvas.click();
  //console.log(e.clientX,e.clientY)
  let ranXspeed=Math.floor((Math.random()+0.01) * 5)
  let ranYspeed=Math.floor((Math.random()+0.01) * 6)
  balls.push(new Ball(e.clientX-rect.left,e.clientY - rect.top,ranXspeed,ranYspeed,10,"blue"))
}

function draw(){
     for(let i=0;i<balls.length;i++){
         balls[i].move()
         balls[i].turn()
         balls[i].display()
     }

}
setup()

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
 
  requestAnimationFrame(loop);
}
loop()


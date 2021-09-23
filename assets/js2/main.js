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
function myFunction() {
  //canvas.click();
  let ranXspeed=Math.floor((Math.random()+0.01) * 5)
  let ranYspeed=Math.floor((Math.random()+0.01) * 6)
  balls.push(new Ball(10,10,ranXspeed,ranYspeed,10,"blue"))
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


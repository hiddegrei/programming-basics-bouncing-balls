

class Ball {
  constructor(x,y,xspeed,yspeed,r) {
    this.x = x;
    this.y=y;
    this.xspeed=xspeed;
    this.yspeed=yspeed;
    this.r=r;
  }
  move(){
      this.x=this.x+this.xspeed;
      this.y=this.y+this.yspeed
  }
  display(){
     
      rect(this.x,this.y,this.r)
  }
  turn(){
      if(this.x+this.r>canvas.width){
          this.xspeed*=-1
      }
       if(this.x-this.r<0){
          this.xspeed*=-1
      }
      if(this.y+this.r>canvas.height){
          this.yspeed*=-1
      }
       if(this.y-this.r<0){
          this.yspeed*=-1
      }
  }
}
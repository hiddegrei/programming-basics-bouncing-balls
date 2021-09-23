function rect(x,y,r,color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(
      x,
      y,
      r,
      0,
      2* Math.PI
    );
    ctx.closePath();
    ctx.fill();

}
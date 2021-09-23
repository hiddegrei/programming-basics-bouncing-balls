function rect(x,y,r){
    ctx.fillStyle = "blue";
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
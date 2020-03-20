class Ground {
    constructor(x,y,w,h){
      var options={
        isStatic:true
      }
      this.ground=Bodies.rectangle(x,y,w,h,options);
      World.add(world,this.ground);
      this.width=w;
      this.height=h;
    }
    display(){
        var positions=this.ground.position;
        fill(255);
        rectMode(CENTER);
        rect(positions.x,positions.y,this.width,this.height);
       
    }
}
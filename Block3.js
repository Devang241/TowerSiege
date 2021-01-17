class Block3{
    constructor(x, y, width, height) {
      var options = {
          isStatic : false, 
          restitution :0.6,
          friction :1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
       var pos= this.body.position;
       push();
       translate(pos.x, pos.y);
       rectMode(CENTER);
       fill("lightgreen")
       strokeWeight(3)
       rect(0,0,this.width, this.height);
       pop();
    }
  }
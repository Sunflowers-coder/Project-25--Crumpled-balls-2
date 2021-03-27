class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic : true,
          'restitution':0,
          'friction':1,
          'density':0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/Dustbin.png");
  
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle
      push();
      rotate(angle);
      fill("white")
      imageMode(CENTER);
      image(this.image, 690, 330, 240, 280);
      pop();
    }
  }

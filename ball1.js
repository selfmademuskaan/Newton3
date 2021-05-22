class Ball1 {
    constructor(x,y,radius) {
      var options = {
          //isStatic: false,
          restitution:1,
          friction:0.5,
          density:0.5
          //this.image = loadImage("paper.png");
}
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     ellipseMode(CENTER);
      fill("pink");
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };
  




  /*class Ball1 {
    constructor(x,y,radius) {
      var options = {
          //isStatic: false,
          restitution:1,
          friction:0.5,
          density:0.5
          //this.image = loadImage("paper.png");
}
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     ellipseMode(CENTER);
      fill("pink");
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }

    class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("black");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
  };*/
  
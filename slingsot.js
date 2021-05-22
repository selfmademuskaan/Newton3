class SlingShot {
    constructor(bodyA, bodyB,offSetX,offSetY) {
        var options = {
          bodyA:bodyA,
          bodyB:bodyB,
          stiffness:0.04,
          length:10,
          pointB:{x:this.offSetX,y:this.offSetY}
            //this.image = loadImage("paper.png");
        }
        this.offSetX=offSetX;
        this.offSetY=offSetY;
         this.sling=Constraint.create(options)
         World.add(world, this.sling);
    }
    display() {
        var pointA= this.sling.bodyA.position;
        var pointB= this.sling.bodyB.position;
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x+this.offSetX,pointB.y+this.offSetY);
console.log("hi");



    }



}

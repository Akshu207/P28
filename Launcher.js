class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
          pointB: pointB,
            stiffness: 10,
            length: 50
        }
        this.pointB = pointB
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }

    fly(){
        this.string.bodyA = null;
   
       }

   
    display(){
        if(this.string.bodyA){

        
        var pointA = this.string.bodyA.position;
        var pointB = this.pointB

        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}

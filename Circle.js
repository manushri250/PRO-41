class Circle {

    constructor (x,y) {
     var options = {
         isStatic:true,
         restitution:0,
         friction:0.5,
         density:1.2
     }

     this.radius = 55;
    
     this.body = Bodies.circle(x,y,this.radius, options);
     //this.color = color(random(0,255), random(0,255), random(0,255) );
     World.add(world,this.body);
    }
    
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("black");
        ellipseMode(RADIUS);
        ellipse(0 , 0 , this.radius+10 ,this.radius);
        
    
        
        pop();
      }
    
    };
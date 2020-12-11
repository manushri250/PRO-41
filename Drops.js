class Drops {

    constructor (x,y) {
     var options = {
         isStatic:false,
         friction:0.5,
         density:1.2
     }

     this.radius = 4.5;
    
     this.body = Bodies.circle(x,y,this.radius, options);
     World.add(world,this.body);
    }
    
    update(){
      if(this.body.position.y > 600){
        Matter.Body.setPosition(this.body, {x: random(0, 440), y: random(0, 650)})
      }
   }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0 , 0 , this.radius ,this.radius);
        
    
        
        pop();
      }
    
    };
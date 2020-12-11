class Umbrella{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :0.1,
			}
            this.x=x;
            this.y=y;
			//this.r=r
			this.w=w;
			this.h=h;
           
		this.image=loadImage("images/walking_5.png")
        this.body=Bodies.rectangle(x, y, 110, 170 , options);
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		image(this.image, 0,0,this.w, this.h)
		pop()
 }
}
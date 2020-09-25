class Particle{
    constructor(x, y, r) {
           var options = {
               'restitution':0.4,
               
           }
           this.body = Bodies.rectangle(x, y, r, options);
           this.color = color(random(0,255),random(0,255),random(0,255));
           this.r = r;
           World.add(world, this.body);
         }
         display(){
           var pos = this.body.position;
           var angle = this.body.angle;
          
           rotate(angle);
           translate(pos.x,pos.y);
           noStroke();
           fill(this.color)

           ellipseMode(CENTER);
           ellipse(0, 0, this.r,this.r);
           pop();
         }
   }
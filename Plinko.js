class Plinko{
     constructor(x, y, r) {
            var options = {
                'restitution':0.4,
                
            }
            this.body = Bodies.rectangle(x, y, r, options);
            
            this.r = r;
            World.add(world, this.body);
          }
          display(){
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            ellipseMode(CENTER);
            ellipse( 0, 0, this.r);
            pop();
          }
    }

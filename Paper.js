class Paper {
    constructor (x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.7,
            density: 1.2
        }

        this.body = Bodies.circle(x , y, radius, options);
        this.x=x;
        this.y=y;
        this.radius = radius;
        this.image = loadImage("Images/paperIMG.png");
        World.add(world, this.body);
        

    }

    display() {

        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("white");
        
        imageMode(CENTER);
        image(this.image, 0, 0, 2*this.radius,2*this.radius);
        pop();
    }
 }

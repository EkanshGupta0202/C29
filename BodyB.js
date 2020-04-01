class BodyB{
    constructor(x,y,width,height){
        var options ={
            isStatic: true        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage('S1.png');
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        image(this.image,pos.x,pos.y,50,50)

    }
}
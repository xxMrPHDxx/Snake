export class Box{
	constructor(x,y,width,height){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	collides(box){
		if(!(box instanceof Box)) throw new Error(box + " is not A Box");
		return (this.x + this.width >= box.x &&
				this.y + this.height >= box.y &&
				this.x < box.x + box.width && 
				this.y < box.y + box.height);
	}

	draw(ctx){
		ctx.fillRect(this.x,this.y,this.width,this.height);
	}
}
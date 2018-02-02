import {Box} from './box.js';

export class Apple{
	constructor(){
		this.x = Math.random() * 20 | 0;
		this.y = Math.random() * 20 | 0;

		this.image = new Box(this.x,this.y,1,1);
		this.color = "red";
	}

	collides(box){
		return (this.x === box.x && this.y === box.y);
	}

	draw(ctx){
		ctx.fillStyle = this.color;
		this.image.draw(ctx);
	}
}
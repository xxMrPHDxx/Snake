import {Box} from './box.js';
import {Apple} from './apple.js';

export class Snake{
	constructor(){
		this.size = 1;

		this.head = new Box(this.x,this.y,this.size,this.size);
		this.tail = [];
		for(let i=0;i<3;i++){
			this.tail.push(new Box(this.x,this.y,this.size,this.size));
		}
		this.color = "black";

		this.die();

		this.direction = {x:1,y:0};
		this.moveCounter = 0;
		this.moveInterval = 1000;

		this.scoreHolder = document.querySelector("#Score");
		this.score = 0;

		this.apple = new Apple();
	}

	die(){
		this.score = 0;
		this.tail.splice(3);

		[this.head,...this.tail].forEach(body => {
			body.x = 10;
			body.y = 10;
		});
	}

	draw(ctx){
		ctx.fillStyle = this.color;
		[this.head,...this.tail].forEach((body,i) => {
			body.draw(ctx);
		});

		this.apple.draw(ctx);
	}

	move(){
		this.head.x += this.direction.x;
		this.head.y += this.direction.y;

		for(let i=this.tail.length-1;i>=0;i--){
			if(i == 0){
				this.tail[i].x = this.head.x;
				this.tail[i].y = this.head.y;
			}else{
				this.tail[i].x = this.tail[i-1].x;
				this.tail[i].y = this.tail[i-1].y;
			}
		}

		if(this.apple.collides(this.head)){
			this.apple = new Apple();
			this.score += 50;

			let lastTail = this.tail[this.tail.length-1];

			this.tail.push(new Box(lastTail.x,lastTail.y,this.size,this.size));
		}

		if(this.head.x < 0 ||
			this.head.y < 0 ||
			this.head.x >= 20 ||
			this.head.y >= 20){
			this.die();
		}
	}

	moveDown(){
		if(this.direction.y === -1) return;

		this.direction.x = 0;
		this.direction.y = 1;
	}

	moveLeft(){
		if(this.direction.x === 1) return;

		this.direction.x = -1;
		this.direction.y = 0;
	}

	moveRight(){
		if(this.direction.x === -1) return;

		this.direction.x = 1;
		this.direction.y = 0;
	}

	moveUp(){
		if(this.direction.y === 1) return;

		this.direction.x = 0;
		this.direction.y = -1;
	}

	update(dt){
		this.moveCounter += dt;
		if(this.moveCounter > this.moveInterval){
			this.move();
			this.moveCounter = 0;
		}

		this.updateScore();
	}

	updateScore(){
		this.scoreHolder.innerText = "Score : " + this.score;
	}
}
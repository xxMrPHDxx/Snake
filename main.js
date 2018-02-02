import {Snake} from './snake.js';

const canvas = createCanvas();
const ctx = canvas.getContext('2d');
ctx.scale(20,20);

const snake = new Snake();

let lastTime = 0;
let dt = 0;

function update(time=0){
	dt = time - lastTime;
	lastTime = time;

	clearRect(ctx);

	snake.update(dt);
	snake.draw(ctx);

	requestAnimationFrame(update);
}
update();

window.onkeydown = (e) => {
	if(e.key === 's'){
		snake.moveDown();
	}else if(e.key === 'a'){
		snake.moveLeft();
	}else if(e.key === 'd'){
		snake.moveRight();
	}else if(e.key === 'w'){
		snake.moveUp();
	}
}
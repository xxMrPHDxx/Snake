function createCanvas(width=400,height=400){
	let holder = document.querySelector(".wrapper");
	let canvas = document.createElement("canvas");
	canvas.setAttribute("width",width+"px");
	canvas.setAttribute("height",height+"px");
	holder.appendChild(canvas);
	return canvas;
}

function clearRect(ctx,color="#fff"){
	ctx.save();
	ctx.fillStyle = color;
	ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
	ctx.restore();
}
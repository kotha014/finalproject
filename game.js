var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var dx =3;
var dy =-3;
var x = canvas.width/2;
var y = canvas.height-30;
var ballRadius =10;
var poleheight = 10;
var polewidth =75;
var polex =(canvas.width-polewidth)/2
var poley =(canvas.height-poleheight)
 


function drawball(){
	ctx.beginPath();
	ctx.arc(x,y,ballRadius,0,Math.PI*2);
	ctx.fillStyle ="Red";
	ctx.fill();
	ctx.closePath();

}
function drawPole(){
	ctx.beginPath();
	ctx.rect(polex,poley,75,35);
	ctx.fillStyle ="blue";
	ctx.fill();
	ctx.closePath();
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawball();


	if(x + dx  > canvas.width - ballRadius || x + dx < ballRadius){
		dx = -dx;
	}

	if(y + dy > canvas.height - ballRadius  || y +dy < 0){
		dy = -dy;
	}

	x += dx;
	y += dy;
	drawPole();
}
setInterval(draw, 10);



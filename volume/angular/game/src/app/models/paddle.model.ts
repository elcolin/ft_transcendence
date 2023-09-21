export class Paddle{
	speed: number = 1;
	constructor(public posy: number, public currentUser: boolean, public context: CanvasRenderingContext2D)
	{
	}

	draw(){
		this.context.fillStyle = 'red';
		this.context.fillRect(5, this.posy, 15, 20);
	}
}

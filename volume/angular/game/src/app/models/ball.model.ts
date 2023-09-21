export class Ball{
	constructor(public posx: number,
		public posy: number,
		public angle: number, public context: CanvasRenderingContext2D)
	{

	}

	updatePosition()
	{
		this.posx += Math.cos(this.angle);
		this.posy += Math.sin(this.angle);
	}

	draw()
	{
		this.context.arc(this.posx, this.posy, 10, 0, Math.PI * 2, false);
		this.context.fillStyle = 'blue';
		this.context.fill();
	}
}
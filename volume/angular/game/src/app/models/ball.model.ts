export class Ball{
	public posx: number = 500;
	public posy: number = 320;
	public speed: number = 3;
	constructor(
		public angle: number, public context: CanvasRenderingContext2D)
	{

	}

	updatePosition()
	{
		this.posx += Math.cos((this.angle * Math.PI) / 180) * this.speed;
		this.posy += Math.sin((this.angle * Math.PI) / 180) * this.speed;
	}

	draw()
	{
		this.context.beginPath();
		this.context.arc(this.posx, this.posy, 10, 0, Math.PI * 2, false);
		this.context.fillStyle = 'blue';
		this.context.fill();
		this.context.closePath();
	}
}
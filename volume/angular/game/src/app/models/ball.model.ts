export class Ball{
	constructor(public posx: number,
		public posy: number,
		public angle: number)
	{

	}

	updatePosition()
	{
		let x = Math.cos(this.angle);
		let y = Math.sin(this.angle);
		if(this.posx + x < 100 && this.posx + x > 0)
			this.posx += Math.cos(this.angle);
		if(this.posy + y < 100 && this.posx + y > 0)
			this.posy += Math.sin(this.angle);

	}
}
import { GameBoardComponent } from "../game-board/game-board.component";
export class Ball{
	public posx: number = 500;
	public posy: number = 320;
	public speed: number = 10;
	public radius: number = 15;
	constructor(
		public angle: number, public context: CanvasRenderingContext2D, public gameBoard: GameBoardComponent)
	{

	}

	updatePosition()
	{
		let hx: number = Math.cos((this.angle * Math.PI) / 180) * this.speed + this.posx;
		let hy: number = Math.sin((this.angle * Math.PI) / 180) * this.speed + this.posy;
		// this.posx += Math.cos((this.angle * Math.PI) / 180) * this.speed;
		// this.posy += Math.sin((this.angle * Math.PI) / 180) * this.speed;
		if (hx < this.gameBoard.width - this.radius && hx > this.radius && hy < this.gameBoard.height - this.radius && hy > this.radius)
		{
			this.posx = hx;
			this.posy = hy;
			return;
		}
		else
		{
			this.angle = this.angle % 90 * -1 ;
			this.updatePosition();
		}
	}

	draw()
	{
		this.context.beginPath();
		this.context.arc(this.posx, this.posy, this.radius, 0, Math.PI * 2, false);
		this.context.fillStyle = 'blue';
		this.context.fill();
		this.context.closePath();
	}
}
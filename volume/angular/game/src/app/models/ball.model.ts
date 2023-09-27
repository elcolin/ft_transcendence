import { GameBoardComponent } from "../game-board/game-board.component";
export class Ball{
	public posx: number = 500;
	public posy: number = 320;
	public speed: number = 7;
	public radius: number = 15;
	public angle: number = 156;
	constructor( public context: CanvasRenderingContext2D, public gameBoard: GameBoardComponent)
	{

	}

	calculateReflectionAngle(ballY: number, paddleHeight: number): number {
		const minAngle = -45;  // Angle at the bottom of the paddle
		const maxAngle = 45;   // Angle at the top of the paddle
	  
		const relativePosition = ballY / paddleHeight;
		const newAngle = minAngle + (maxAngle - minAngle) * relativePosition;
	  
		return newAngle;
	  }
	
	updatePosition()
	{
		//faire un tableau? pour les faces?
		let hx: number = Math.cos((this.angle * Math.PI) / 180) * this.speed + this.posx;
		let hy: number = Math.sin((this.angle * Math.PI) / 180) * this.speed + this.posy;
		if (hx < this.gameBoard.width - this.radius && hx >= this.radius && hy < this.gameBoard.height - this.radius && hy > this.radius && !(hx <= this.gameBoard.paddleLeft.width + this.radius && hy < this.gameBoard.paddleLeft.posy + this.gameBoard.paddleLeft.height && hy > this.gameBoard.paddleLeft.posy))
		{
			this.posx = hx;
			this.posy = hy;
			return;
		}
		else {

			if (hx <= this.radius + this.gameBoard.paddleLeft.width || hx >= this.gameBoard.width - this.radius)
			{
				if (hx <= this.radius)
					this.posx = this.radius
				else if (hx <= this.gameBoard.paddleLeft.width + this.radius)
					this.posx = this.gameBoard.paddleLeft.width + this.radius;
				else
					this.posx = this.gameBoard.width - this.radius;
				this.angle = (180 - this.angle) % 360;
			}	
			if (hy <= this.radius || hy >= this.gameBoard.height - this.radius)
			{
				// if (hy < this.gameBoard.paddleLeft.posy + this.gameBoard.paddleLeft.height && hy > this.gameBoard.paddleLeft.posy)
					// this.posy = 
				this.angle = (-this.angle) % 360; 
			}
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
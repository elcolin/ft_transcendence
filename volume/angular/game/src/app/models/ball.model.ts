import { GameBoardComponent } from "../game-board/game-board.component";
import { Paddle } from "./paddle.model";
export class Ball{
	public speed!: number;
	public radius: number = 15;
	public angle: number =  Math.random() * 360;
	public posx!: number;
	public posy!: number;
	constructor(public context: CanvasRenderingContext2D, public gameBoard: GameBoardComponent)
	{

	}
	
	updatePosition()
	{
		let hx: number = Math.cos((this.angle * Math.PI) / 180) * this.speed + this.posx;
		let hy: number = Math.sin((this.angle * Math.PI) / 180) * this.speed + this.posy;
		if (this.isCollidingPaddle(hx, hy, this.gameBoard.paddleLeft))
		{
			this.angle = this.calculateReflectionAngle(hy - (this.gameBoard.paddleLeft.posy - this.gameBoard.paddleLeft.height / 2), this.gameBoard.paddleLeft.height);
			this.posx = this.gameBoard.paddleLeft.width + this.radius;
			return;
		}
		if (hx < this.gameBoard.width - this.radius && hx >= this.radius && hy < this.gameBoard.height - this.radius && hy > this.radius)
		{
			this.posx = hx;
			this.posy = hy;
			return;
		}
		else {
			if (hx <= this.radius || hx >= this.gameBoard.width - this.radius)
				this.reset();
			// if (hx <= this.radius || hx >= this.gameBoard.width - this.radius)
				// this.angle = (180 - this.angle) % 360;
			if (hy <= this.radius || hy >= this.gameBoard.height - this.radius)
				this.angle = (-this.angle) % 360;
	  	}
	
	}

	isCollidingPaddle(x:number, y:number ,paddle: Paddle) : boolean
	{
		if (x > this.radius + paddle.width)
			return false;
		if (y <= paddle.posy + paddle.height / 2 + this.radius && y >= paddle.posy - paddle.height / 2 - this.radius)
			return true;
		return false;
	}

	reset()
	{
		this.speed = 12;
		this.posx = this.gameBoard.width / 2;
		this.posy = this.gameBoard.height / 2;
		this.angle = Math.random() * 360;
	}

	draw()
	{
		this.context.beginPath();
		this.context.arc(this.posx, this.posy, this.radius, 0, Math.PI * 2, false);
		this.context.fillStyle = 'blue';
		this.context.fill();
		this.context.closePath();
	}

	calculateReflectionAngle(ballY: number, paddleHeight: number): number {
		// Define angle range for mapping (e.g., -45 degrees to 45 degrees)
		const minAngle = -45;  // Angle at the bottom of the paddle
		const maxAngle = 45;   // Angle at the top of the paddle
		const relativePosition = ballY / paddleHeight;
		const newAngle = minAngle + (maxAngle - minAngle) * relativePosition;
	  
		console.log(newAngle + '\n');
		return newAngle;
	}
}
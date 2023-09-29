import { GameBoardComponent } from "../game-board/game-board.component";

export class Paddle{
	speed!: number;
	height: number = 150;
	width: number = 25;
	posx!: number;
	posy!: number;
	score: number = 0;
	constructor(public currentUser: boolean, public context: CanvasRenderingContext2D, public gameBoard: GameBoardComponent)
	{
		if (!currentUser)
			this.posx = this.gameBoard.width - this.width;
		else
			this.posx = 0;
	}

	draw(){
		this.context.fillStyle = 'red';
		if(!this.currentUser)
			this.context.fillRect(this.posx, this.posy - this.height/2, this.width, this.height);
		this.context.fillRect(this.posx, this.posy - this.height/2, this.width, this.height);
	}

	reset()
	{
		this.speed = 60;
		this.posy = this.gameBoard.height / 2;
	}

	updateScore()
	{
		this.score++;
		if (this.currentUser)
			console.log("Left: " + this.score + "\n");
		else
			console.log("Right: " + this.score + "\n");
	}
}

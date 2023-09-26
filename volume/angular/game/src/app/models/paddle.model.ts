import { GameBoardComponent } from "../game-board/game-board.component";

export class Paddle{
	speed: number = 50;
	height: number = 100;
	width: number = 25;
	posx!: number;
	posy: number = 320;
	constructor(public currentUser: boolean, public context: CanvasRenderingContext2D, public gameBoard: GameBoardComponent)
	{
		if (!currentUser)
			this.posx = 975;
		else
			this.posx = 0;
	}

	draw(){
		this.context.fillStyle = 'red';
		if(!this.currentUser)
			this.context.fillRect(this.posx, this.posy, this.width, this.height);
		this.context.fillRect(this.posx, this.posy, this.width, this.height);
	}
}

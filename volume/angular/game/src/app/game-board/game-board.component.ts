import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Paddle } from '../models/paddle.model';
import { Ball } from '../models/ball.model';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})

export class GameBoardComponent implements OnInit{

	width: number = 1000;
	height: number = 640;
	@ViewChild('canvas', {static: true}) gameCanvas!: ElementRef;
	context!: CanvasRenderingContext2D;
	paddleLeft!: Paddle;
	paddleRight!: Paddle;
	private isGameRunning: boolean = false;
	ball!: Ball;

	ngOnInit(): void {
		const canvas: HTMLCanvasElement = this.gameCanvas.nativeElement;
		const ctx = canvas.getContext('2d');
		if (!ctx)
			return;
		this.context = ctx;
		this.context?.fillRect(0,0 , this.width, this.height);
		this.paddleLeft = new Paddle(true, this.context, this);
		this.paddleRight = new Paddle(false, this.context, this);
		this.ball = new Ball(90, this.context)
		this.gameLoop = this.gameLoop.bind(this);
		requestAnimationFrame(this.gameLoop);
	}
	draw()
	{
		this.context.fillStyle = 'black';
		this.context.clearRect(0, 0, this.width, this.height);
		this.context?.fillRect(0,0 , this.width, this.height);
		this.ball.draw();
		this.paddleLeft.draw();
		this.paddleRight.draw();
	}

	moreSpeed() {
		this.paddleLeft.speed *= 1.5;
		this.paddleRight.speed *= 1.5;
	}

	reset() {
		this.stopGame();
		this.paddleLeft.posy = this.height / 2;
		this.paddleRight.posy = this.height / 2;
		this.ball.posx = this.width / 2;
		this.ball.posy = this.height / 2;
		this.ball.angle = 180;
		this.draw();
		
	}

	startGame() {
		if (this.isGameRunning)
			return;
		this.isGameRunning = true;
		this.gameLoop();  // Start the game loop
	}

	stopGame() {
		this.isGameRunning = false;
	}

	gameLoop()
	{
		if(!this.isGameRunning)
			return;
		this.ball.updatePosition();
		this.draw()
		// this.ball.updatePosition();
		requestAnimationFrame(this.gameLoop);
	}
}

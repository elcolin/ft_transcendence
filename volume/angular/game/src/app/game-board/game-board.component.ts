import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Paddle } from '../models/paddle.model';
import { Ball } from '../models/ball.model';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})

export class GameBoardComponent implements OnInit{

	width: number = 500;
	height: number = 320;
	@ViewChild('canvas', {static: true}) gameCanvas!: ElementRef;
	context!: CanvasRenderingContext2D;
	paddleLeft!: Paddle;
	paddleRight!: Paddle;
	private isGameRunning: boolean = true;
	ball!: Ball;

	ngOnInit(): void {
		const canvas: HTMLCanvasElement = this.gameCanvas.nativeElement;
		const ctx = canvas.getContext('2d');
		if (!ctx)
			return;
		this.context = ctx;
		this.context?.fillRect(0,0 , this.width, this.height);
		this.paddleLeft = new Paddle(30, true, this.context);
		// this.paddleRight = new Paddle(50, false, this.context);
		this.ball = new Ball(100, 50, 90, this.context)
		this.gameLoop = this.gameLoop.bind(this);
		requestAnimationFrame(this.gameLoop);
	}
	draw()
	{
		this.context.clearRect(0, 0, this.width, this.height);
		this.context.fillStyle = 'black';
		this.context?.fillRect(0,0 , this.width, this.height);
		this.paddleLeft.draw();
		this.ball.draw();
	}

	moreSpeed() {
		this.paddleLeft.speed *= 1.5;
		this.paddleRight.speed *= 1.5;
	}

	reset() {
		this.stopGame();
		this.paddleLeft.posy = 50;
		this.ball.posx = 100;
		this.ball.posy = 50;
		this.ball.angle = 90;
		this.draw();
		
	}

	startGame() {
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
		// this.ball.updatePosition();
		this.draw()
		this.ball.updatePosition();
		requestAnimationFrame(this.gameLoop);
	}
}

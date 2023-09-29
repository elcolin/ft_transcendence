import { Component, OnInit, ViewChild, ElementRef, HostListener} from '@angular/core';
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
		this.context = this.gameCanvas.nativeElement.getContext('2d');
		this.context?.fillRect(0,0 , this.width, this.height);
		this.paddleLeft = new Paddle(true, this.context, this);
		this.paddleRight = new Paddle(false, this.context, this);
		this.ball = new Ball(this.context, this);
		this.reset();
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
		this.ball.speed *= 1.5;
	}

	reset() {
		this.stopGame();
		this.paddleLeft.reset();
		this.paddleRight.reset();
		this.ball.reset();
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
		requestAnimationFrame(this.gameLoop);
	}

	@HostListener('document:keydown', ['$event'])
	handleKeyboardEvent(event: KeyboardEvent)
	{
		//a corriger
		this.startGame();
		if(this.paddleLeft && this.paddleLeft.posy < this.height - this.paddleLeft.height/2 && (event.key == 'ArrowDown' || event.key == 's'))
			this.paddleLeft.posy += this.paddleLeft.speed;
		if(this.paddleLeft && this.paddleLeft.posy > this.paddleLeft.height/2 && (event.key == 'ArrowUp' || event.key == 'w'))
			this.paddleLeft.posy -= this.paddleLeft.speed;
	}
}


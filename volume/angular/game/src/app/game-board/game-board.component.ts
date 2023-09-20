import { Component, OnInit, ViewChild} from '@angular/core';
import { Paddle } from '../models/paddle.model';
import { Ball } from '../models/ball.model';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})

export class GameBoardComponent implements OnInit{

	paddleLeft!: Paddle;
	paddleRight!: Paddle;
	private isGameRunning: boolean = true;
	ball!: Ball;

	ngOnInit(): void {
		this.paddleLeft = {
			posy: 50,
			currentUser: true,
			speed: 1
		}
		this.paddleRight = {
			posy: 50,
			currentUser: false,
			speed: 1
		};
		this.ball = new Ball(50, 50, 90)
		
	}

	moreSpeed() {
		this.paddleLeft.speed *= 1.5;
		this.paddleRight.speed *= 1.5;
	}

	reset() {
		this.paddleLeft.speed = 1;
		this.paddleRight.speed = 1;
		this.paddleLeft.posy = 50;
		this.paddleRight.posy = 50;
		this.ball.posx = 50;
		this.ball.posy = 50;
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

	}
}

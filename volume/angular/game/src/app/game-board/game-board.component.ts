import { Component, OnInit } from '@angular/core';
import { Paddle } from '../models/paddle.model';
import { Ball } from '../models/ball.model';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit{

	width: number = 65;
	height: number = 40;
	paddleLeft!: Paddle;
	paddleRight!: Paddle;
	ball!: Ball;
	ngOnInit(): void {
		this.paddleLeft = {
			bottom: 50,
			currentUser: true,
			speed: 1
		}
		this.paddleRight = {
			bottom: 50,
			currentUser: false,
			speed: 1
		};
		this.ball = { radius: 10

		}
	}

	MoreSpeed() {
		this.paddleLeft.speed *= 1.5;
		this.paddleRight.speed *= 1.5;
	}

	ResetSpeed() {
		this.paddleLeft.speed = 1;
		this.paddleRight.speed = 1;
	}
}

import { Component, OnInit } from '@angular/core';
import { Paddle } from '../models/paddle.model';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit{

	paddleLeft!: Paddle;
	paddleRight!: Paddle;
	ngOnInit(): void {
		this.paddleLeft = {
			bottom: 50,
			currentUser: true
		}
		this.paddleRight = {
			bottom: 50,
			currentUser: false
		};
	}
}

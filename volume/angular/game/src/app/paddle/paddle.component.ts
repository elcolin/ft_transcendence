import { Component, Input, HostListener, OnInit } from '@angular/core';
import { Paddle } from '../models/paddle.model';

@Component({
  selector: 'app-paddle',
  templateUrl: './paddle.component.html',
  styleUrls: ['./paddle.component.scss']
})
export class PaddleComponent implements OnInit{
	@Input() paddle!: Paddle;

	ngOnInit(): void {
		this.paddle.draw();
	}
	@HostListener('document:keydown', ['$event'])
	handleKeyboardEvent(event: KeyboardEvent)
	{
		this.paddle.gameBoard.startGame();
		if(this.paddle.currentUser && this.paddle.posy > this.paddle.height/2 && (event.key == 'ArrowDown' || event.key == 's'))
			this.paddle.posy += this.paddle.speed;
		if(this.paddle.currentUser && this.paddle.posy < 640 && (event.key == 'ArrowUp' || event.key == 'w'))
			this.paddle.posy -= this.paddle.speed;
	}
}

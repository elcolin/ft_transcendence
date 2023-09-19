import { Component, Input, HostListener } from '@angular/core';
import { Paddle } from '../models/paddle.model';

@Component({
  selector: 'app-paddle',
  templateUrl: './paddle.component.html',
  styleUrls: ['./paddle.component.scss']
})
export class PaddleComponent{
	@Input() paddle!: Paddle;

	@HostListener('document:keydown', ['$event'])
	handleKeyboardEvent(event: KeyboardEvent)
	{
		if(this.paddle.currentUser && this.paddle.bottom > 10 && (event.key == 'ArrowDown' || event.key == 's'))
		{
			if (this.paddle.bottom - this.paddle.speed < 10)
				this.paddle.bottom = 10;
			else
				this.paddle.bottom -= this.paddle.speed;
		}
		if(this.paddle.currentUser && this.paddle.bottom < 90 && (event.key == 'ArrowUp' || event.key == 'w'))
		{
			if (this.paddle.bottom + this.paddle.speed > 90)
				this.paddle.bottom = 90;
			else
				this.paddle.bottom += this.paddle.speed;
		}
	}
}

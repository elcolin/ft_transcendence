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
		if(this.paddle.currentUser && this.paddle.posy > 10 && (event.key == 'ArrowDown' || event.key == 's'))
		{
			if (this.paddle.posy - this.paddle.speed < 10)
				this.paddle.posy = 10;
			else
				this.paddle.posy -= this.paddle.speed;
		}
		if(this.paddle.currentUser && this.paddle.posy < 90 && (event.key == 'ArrowUp' || event.key == 'w'))
		{
			if (this.paddle.posy + this.paddle.speed > 90)
				this.paddle.posy = 90;
			else
				this.paddle.posy += this.paddle.speed;
		}
	}
}

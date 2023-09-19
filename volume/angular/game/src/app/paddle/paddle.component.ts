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
		if(this.paddle.currentUser && event.key == 'ArrowDown')
			this.paddle.bottom--;
		if(this.paddle.currentUser && event.key == 'ArrowUp')
			this.paddle.bottom++;
	}
}

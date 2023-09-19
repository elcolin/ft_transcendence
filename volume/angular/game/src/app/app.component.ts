import { Component, OnInit} from '@angular/core';
import { Paddle } from './models/paddle.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

	// paddleLeft!: Paddle;
	// paddleRight!: Paddle;
	// ngOnInit(): void {
	// 	this.paddleLeft = new Paddle(true, 50);
	// 	this.paddleRight = new Paddle(false, 50);
	// }
}

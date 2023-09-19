import { Component, Input } from '@angular/core';
import { Ball } from '../models/ball.model';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss']
})
export class BallComponent {
	@Input() ball!: Ball;
}

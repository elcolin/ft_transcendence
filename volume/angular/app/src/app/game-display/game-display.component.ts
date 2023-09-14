import { Component, Input } from '@angular/core';
import { GameDisplay } from '../models/game-display.model';

@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.css']
})
export class GameDisplayComponent {

	@Input() gameDisplay!: GameDisplay; 
	playerName!: string;
	currentDate!: Date;
	width!: number;
	height!: number;
}

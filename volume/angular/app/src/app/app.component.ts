import { Component, OnInit } from '@angular/core';
import { GameDisplay } from './models/game-display.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

	currentGame!: GameDisplay; 
	otherGame!: GameDisplay;
	ngOnInit(): void {
		// this.currentGame = new GameDisplay('ColorGama', new Date(),640, 480, '');
		this.currentGame = {
			playerName: "ColorGama",
			currentDate: new Date(),
			height: 480,
			width: 640,
			screen: '../../assets/background_explosion.jpg'
		};
		this.otherGame = {
			playerName: "Test",
			currentDate: new Date(),
			height: 480,
			width: 640,

		};
	}
}

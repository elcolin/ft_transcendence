import { Component, OnInit } from '@angular/core';
import { GameDisplay } from './models/game-display.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

	currentGame!: GameDisplay; 
	ngOnInit(): void {
		this.currentGame = new GameDisplay('ColorGama', 640, 480);
	}
}

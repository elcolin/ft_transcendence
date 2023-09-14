export class GameDisplay{
	playerName: string;
	currentDate: Date;
	width: number;
	height: number;

	constructor(playerName: string, width: number, height: number)
	{
		this.playerName = playerName;
		this.currentDate = new Date();
		this.width = width;
		this.height = height;
	}
}
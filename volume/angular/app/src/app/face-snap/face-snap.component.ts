import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css']
})
export class FaceSnapComponent implements OnInit{
	title!: string;
	description!: string;
	createdDate!: Date;
	snaps!: number;
	imageUrl!: string;
	buttonText!: string;

	ngOnInit() {
		this.title = 'Archibald';
		this.description = 'Mon meilleur ami depuis tout petit !';
		this.createdDate = new Date();
		this.snaps = 6;
		this.imageUrl = '../assets/background_explosion.jpg';
		this.buttonText = 'Oh Snap!';
	  }
	
	  onAddSnap()
	  {
		if (this.buttonText == 'Oh Snap!') {
			this.snaps++;
			this.buttonText = 'Oops, unSnap!';
		  } else {
			this.snaps--;
			this.buttonText = 'Oh Snap!';
		  }
	  }
}

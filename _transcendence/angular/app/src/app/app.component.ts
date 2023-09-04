import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testranscendence';
  result= 'test';
  checkAge(age: number): void {

    if (age >= 18) {
      this.result = "You're an adult.";
    } else {
      this.result = "You're a minor.";
    }
  }

  reset(): void {
    this.result = '';
  }
}

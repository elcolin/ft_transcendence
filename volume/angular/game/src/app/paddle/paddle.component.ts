import { Component, Input, OnInit } from '@angular/core';
import { Paddle } from '../models/paddle.model';

@Component({
  selector: 'app-paddle',
  templateUrl: './paddle.component.html',
  styleUrls: ['./paddle.component.scss']
})
export class PaddleComponent{

	@Input() paddle!: Paddle;
}

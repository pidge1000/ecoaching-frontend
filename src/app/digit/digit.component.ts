import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
	selector: 'app-digit',
	templateUrl: './digit.component.html',
	styles: [`
		.numberClass {
 			width: 100px;
 			height: 50px;
 			margin-left: 20px;
 			margin-top: 10px;
 		}
	`]
})
export class DigitComponent implements OnInit {

	public MathF: Math = Math;
	public numberArray: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

	@Output() numberClicked: EventEmitter<any> = new EventEmitter<any>();

	constructor() { }

	ngOnInit() {
		
  	}

  	numberClickEvent(value: number) {
		this.numberClicked.emit(value)
	}

}

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-calculator',
	templateUrl: './calculator.component.html',
  	styles: [`

 		.operationClass {
 			width: 100px;
 			height: 50px;
 			margin-left: 20px;
 			margin-top: 10px;
 			top: 350px;
 		}

 		.stringClass {
 			margin-left: 20px;
 		}

 		.textClass {
 			margin-left: 100px;
 		}

 		.equalClass {
 			width: 100px;
 			height: 50px;
 			margin-left: 20px;
 			margin-top: 10px;
 			top: 0px;
 		}

 	`]
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

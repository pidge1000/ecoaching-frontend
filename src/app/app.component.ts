import { Component } from '@angular/core';

@Component({
 	selector: 'app-root',
 	templateUrl: './app.component.html',
 	styles: [`

 		.numberClass {
 			width: 100px;
 			height: 50px;
 			margin-left: 20px;
 			margin-top: 10px;
 		}

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

export class AppComponent {

	public numb: any = 0
	public operator: number = 0
	public totalValue: number = 0
	public charString: any = ""
	public storeValue: Array<String> = []
	public finalArray: Array<number> = []

	public MathF: Math = Math;
 	public title: String = 'ecoaching-frontend';
  	public numberArray: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  	public operationArray: Array<{value: number, sign: String}> = [{value: 1, sign: "+"}, {value: 2, sign: "-"}, {value: 3, sign: "*"}, {value: 4, sign: "/"}]

  	numberClick(value) {

  		let num: number = 0
  		let count: number = 0
	  	this.storeValue.push(value)
	  	
	  	for (let i = this.storeValue.length-1; i >= 0; i--) {
	  		num = num + this.storeValue[i]*this.MathF.pow(10, count)
	  		count++;
	  	}
	  	
	  	this.numb = num;
	  	this.charString = this.charString + value
  	}

  	operationClick(key) {

  		this.storeValue = []
	  	this.operator = key.value
	  	this.finalArray.push(this.numb)
	  	this.charString = this.charString + ' ' + key.sign + ' '
  	}

  	equalClick() {

	  	let total: number = 0
	  	this.finalArray.push(this.numb)

	  	if (this.operator == 1) total = this.finalArray[0] + this.finalArray[1]
	    else if (this.operator == 2) total = this.finalArray[0] - this.finalArray[1]
		else if (this.operator == 3) total = this.finalArray[0] * this.finalArray[1]
		else if (this.operator == 4) total = this.finalArray[0] / this.finalArray[1]

		this.finalArray = []
		this.numb = total
		this.totalValue = total
		this.charString = total
		
	}
}

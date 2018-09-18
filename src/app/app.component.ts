import { Component, OnInit } from '@angular/core';
import { DigitComponent } from './digit/digit.component';
import { CalculatorComponent } from './calculator/calculator.component';

import { HttpService } from './http.service';
import { LoginService } from './services/login.service';


@Component({
 	selector: 'app-root',
 	templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

	public apiTesting: String = '';

	constructor(private _HttpService: HttpService, private _LoginService: LoginService) { }

	ngOnInit() {
    	this.getApiTesting()
    	//this.postApiTesting()
  	}

  	getApiTesting() {
  		this._HttpService.getApiTesting().subscribe(
  			data => { this.apiTesting = data.Tutorial },
  			err => console.error(err),
  			() => console.log('Done Loading API')
		);
	}

	/*postApiTesting() {
  		this._HttpService.postApiTesting().subscribe(
  			(data) => {
  				console.log(data.token)
  				console.log("POST")
  			}
		);
	}*/
	
}

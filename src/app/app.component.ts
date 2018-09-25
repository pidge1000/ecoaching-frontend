import { Component, OnInit } from '@angular/core';

import { HttpService } from './services/http.service';

@Component({
 	selector: 'app-root',
 	templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

	public apiTesting: String = '';
	constructor(private _HttpService: HttpService) { }

	ngOnInit() {
    	//this.getApiTesting()
  	}

  	getApiTesting() {
  		this._HttpService.getApiTesting().subscribe(
  			(data: any) => { this.apiTesting = data.Tutorial },
  			err => console.error(err),
  			() => console.log('Done Loading API')
		);
	}

}

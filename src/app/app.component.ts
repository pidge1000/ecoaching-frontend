import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from './services/http.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

	public apiTesting: String = ''
	public tokenVerify: boolean = false
	constructor(private _HttpService: HttpService, private _Router : Router) { 
		this.changeOfRoutes();
	}

	changeOfRoutes() {
        this._HttpService.getTokenVerify().subscribe(
            (data: any) => { 
            	if(data.status == 200) 
            		this.tokenVerify = true 
            	else
            		this._Router.navigate(['/login', 'token-expire']);
            },
            err => console.error(err),
            () => console.log('Done Loading API'))
	}

	ngOnInit() {

	}

}

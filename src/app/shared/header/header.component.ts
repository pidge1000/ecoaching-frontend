import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
  	templateUrl: './header.component.html',
  	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	public headerStatus: boolean = false
  	constructor(private _Router : Router) { }

  	ngOnInit() {

  		this._Router.events.subscribe((url) => {
  			if (localStorage.getItem('token')) {
  				this.headerStatus = true	
  			}
		});
  	
  	}

}

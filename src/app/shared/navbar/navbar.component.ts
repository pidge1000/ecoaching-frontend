import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  	selector: 'app-navbar',
  	templateUrl: './navbar.component.html',
  	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	public navbarStatus: boolean = false
  	constructor(private _Router : Router) { }

  	ngOnInit() {

  		this._Router.events.subscribe((url) => {
  			if (localStorage.getItem('token')) {
  				this.navbarStatus = true	
  			}
		})
  	}

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  	selector: 'app-footer',
  	templateUrl: './footer.component.html',
  	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	public footerStatus: boolean = false
  	constructor(private _Router : Router) { }

  	ngOnInit() {

  		this._Router.events.subscribe((url) => {
  			if (localStorage.getItem('token')) {
  				this.footerStatus = true
  			}
		})

  	}

}

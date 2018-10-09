import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  	selector: 'app-footer',
  	templateUrl: './footer.component.html',
  	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	@Input() tokenVerifyNav: boolean
    constructor(private _Router : Router) { }

    ngOnInit() {

    }

}

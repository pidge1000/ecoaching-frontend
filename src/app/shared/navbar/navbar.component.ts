import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '../../services/http.service';

@Component({
  	selector: 'app-navbar',
  	templateUrl: './navbar.component.html',
  	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    @Input() tokenVerifyNav: boolean
  	constructor() { }

  	ngOnInit() {

  	}

}

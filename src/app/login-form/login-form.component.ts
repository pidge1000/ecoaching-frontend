import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';

import { Login } from './login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    public modelLogin = new Login('', '');
	public submitted: boolean = false

 	constructor( private _LoginService: LoginService ) { }

  	ngOnInit() { 
  	}

  	onSubmit(loginForm: NgForm) {

  		const loginFormValue = JSON.stringify(loginForm.value)
  		this._LoginService.loginApi(loginFormValue).subscribe(
  			(data) => {
                localStorage.setItem('token', data.token);
  				this.submitted = true
  			}
		)

  	}

  	

}

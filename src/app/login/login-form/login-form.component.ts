import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Login } from './login';
import { LoginService } from '../../services/login.service';

@Component({
	selector: 'app-login-form',
  	templateUrl: './login-form.component.html',
  	styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

	public modelLogin = new Login('', '');
	public submitted: boolean = false

 	constructor( private _LoginService: LoginService, private _Router: Router) { }

  	ngOnInit() { 
  	}

  	onSubmit(loginForm: NgForm) {

  		const loginFormValue = JSON.stringify(loginForm.value)
  		this._LoginService.loginApi(loginFormValue).subscribe(
  			(data: any) => {
                this.submitted = true
                localStorage.setItem('token', data.token)
                this._Router.navigate(['/home'])
  			}
		)

  	}

}

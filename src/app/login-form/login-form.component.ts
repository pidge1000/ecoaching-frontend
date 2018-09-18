import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

	public submitted: boolean = false

 	constructor( private _LoginService: LoginService ) { }

  	ngOnInit() { 
  	}

  	onSubmit(loginForm) {

  		console.log(loginForm.value)
  		/*this._LoginService.postApiTesting().subscribe(
  			(data) => {
  				console.log(data.token)
  				console.log("POST")
  				this.submitted = true
  			}
		)*/

  	}

  	

}

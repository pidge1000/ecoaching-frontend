import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class LoginService {

  	constructor(private _http: HttpClient) { }

	loginApi() {
		return this._http.post('https://api-ecoaching-guru.herokuapp.com/login/signin', , httpOptions)
  	}
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	public APIEndpoint = environment.APIEndpoint
  	constructor(private _Http: HttpClient) { }

	loginApi(value) {
		return this._Http.post(this.APIEndpoint + '/login/signin', JSON.parse(value), httpOptions)
  	}
}

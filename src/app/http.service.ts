import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
 	providedIn: 'root'
})
export class HttpService {

	constructor(private _http:HttpClient) {}

	getApiTesting() {
		//return forkJoin(
		//	this.http.get('https://api-ecoaching-guru.herokuapp.com/checking')
		//)
		return this._http.get('https://api-ecoaching-guru.herokuapp.com/checking')
	}

	postApiTesting() {
		//return forkJoin(
		//	this.http.get('https://api-ecoaching-guru.herokuapp.com/checking')
		//)
		return this._http.post('https://api-ecoaching-guru.herokuapp.com/login/signin', { email: 'a@gmail.com', password: '123456'}, httpOptions)
	}
}

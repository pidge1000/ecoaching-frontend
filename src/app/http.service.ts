import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';

import { Observable } from "rxjs";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
 	providedIn: 'root'
})
export class HttpService {


	public APIEndpoint = environment.APIEndpoint
	constructor(private _Http:HttpClient) {}

	getApiTesting(): Observable<any> {
		//return forkJoin(
		//	this.http.get('https://api-ecoaching-guru.herokuapp.com/checking')
		//)
		return this._Http.get<any>(this.APIEndpoint + '/checking')
	}

}

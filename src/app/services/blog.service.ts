import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class BlogService {

	public APIEndpoint = environment.APIEndpoint

	constructor(private _Http: HttpClient) { }

	getBlogApi(): Observable<any> {

		const httpOptions = {
    		headers: new HttpHeaders({ 
    					'Content-Type':  'application/json',
    					'Authorization': 'Bearer ' + localStorage.getItem('token')
    				})
		}

		return this._Http.get<any>(this.APIEndpoint + '/promise/blog', httpOptions)
	}

	getBlogDetailApi(id): Observable<any> {

		const httpOptions = {
    		headers: new HttpHeaders({ 
    					'Content-Type':  'application/json',
    					'Authorization': 'Bearer ' + localStorage.getItem('token')
    				})
		}

		return this._Http.get<any>(this.APIEndpoint + '/promise/blog/' + id, httpOptions)
	}
}

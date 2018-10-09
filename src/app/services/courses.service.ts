import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
	providedIn: 'root'
})
export class CoursesService {

	public APIEndpoint = environment.APIEndpoint
	constructor(private _Http: HttpClient) { }

	getCoursesListApi(): Observable<any> {

		const httpOptions = {
    		headers: new HttpHeaders({ 
    					'Content-Type':  'application/json',
    					'Authorization': 'Bearer ' + localStorage.getItem('token')
    				})
		}

		return this._Http.get<any>(this.APIEndpoint + '/courses', httpOptions)
	}

	getCoursesDropdownApi(): Observable<any> {

		const httpOptions = {
    		headers: new HttpHeaders({ 
    					'Content-Type':  'application/json',
    					'Authorization': 'Bearer ' + localStorage.getItem('token')
    				})
		}

		return this._Http.get<any>(this.APIEndpoint + '/subCategory/5bb04c475b8f773c63344b26', httpOptions)
	}
}

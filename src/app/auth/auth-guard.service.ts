import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

	constructor(private _AuthService: AuthService, private _Router: Router) { }

	canActivate(): boolean {
    	if (!this._AuthService.isAuthenticated()) {
      		this._Router.navigate(['/login']);
      		return false;
    	}
    	return true;
  	}
}

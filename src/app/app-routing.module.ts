import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginFormComponent }   from './login-form/login-form.component';
import { BlogListComponent }   from './blog-list/blog-list.component';
import { BlogDetailComponent }   from './blog-detail/blog-detail.component';

const _Routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
  	{ path: 'login', component: LoginFormComponent },
  	{ path: 'calculator', component: CalculatorComponent },
  	{ path: 'bloglist', component: BlogListComponent, canActivate: [AuthGuard] },
  	{ path: 'blogdetail/:id', component: BlogDetailComponent, canActivate: [AuthGuard] },
  	{ path: '**', component: AppComponent }
];

@NgModule({
  	imports: [
    	RouterModule.forRoot(
      		_Routes,
      		{ enableTracing: true } // <-- debugging purposes only
    	)
  	],
  	exports: [
    	RouterModule
  	]
})

export class AppRoutingModule { }
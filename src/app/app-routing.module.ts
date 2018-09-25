import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';

import { AppComponent } from './app.component';
import { HomeComponent }   from './home/home.component';
import { LoginFormComponent }   from './login/login-form/login-form.component';

import { CoursesComponent } from './courses/courses.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CourseAddComponent } from './courses/course-add/course-add.component';
import { CourseEditComponent } from './courses/course-edit/course-edit.component';
import { CourseDeleteComponent } from './courses/course-delete/course-delete.component';


import { CalculatorComponent } from './calculator/calculator.component';
import { BlogListComponent }   from './blog-list/blog-list.component';
import { BlogDetailComponent }   from './blog-detail/blog-detail.component';

const _Routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
  	{ path: 'login', component: LoginFormComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'courses-list', component: CoursesListComponent, canActivate: [AuthGuard] },
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
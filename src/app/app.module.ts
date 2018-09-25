import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth/auth.service';
import { HttpService } from './services/http.service';
import { BlogService } from './services/blog.service';
import { LoginService } from './services/login.service';
import { AuthGuardService } from './auth/auth-guard.service';

import { AppComponent } from './app.component';
import { DigitComponent } from './digit/digit.component';
import { CalculatorComponent } from './calculator/calculator.component';

import { CoursesComponent } from './courses/courses.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CourseAddComponent } from './courses/course-add/course-add.component';
import { CourseEditComponent } from './courses/course-edit/course-edit.component';
import { CourseDeleteComponent } from './courses/course-delete/course-delete.component';

import { LoginFormComponent } from './login/login-form/login-form.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignUPFormComponent } from './login/sign-upform/sign-upform.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';



@NgModule({
    declarations: [
        AppComponent,
        DigitComponent,
        LoginComponent,
        FooterComponent,
        HeaderComponent,
        CalculatorComponent,
        LoginFormComponent,
        BlogListComponent,
        BlogDetailComponent,
        SignUPFormComponent,
        HomeComponent,
        NavbarComponent,
        CoursesComponent,
        CoursesListComponent,
        CourseAddComponent,
        CourseEditComponent,
        CourseDeleteComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [HttpService, LoginService, BlogService, AuthService, AuthGuardService],
    bootstrap: [AppComponent]
})
export class AppModule { }

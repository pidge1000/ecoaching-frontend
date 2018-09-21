import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DigitComponent } from './digit/digit.component';
import { CalculatorComponent } from './calculator/calculator.component';

import { HttpService } from './http.service';
import { LoginService } from './services/login.service';
import { BlogService } from './services/blog.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';


@NgModule({
    declarations: [
        AppComponent,
        DigitComponent,
        CalculatorComponent,
        LoginFormComponent,
        BlogListComponent,
        BlogDetailComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [HttpService, LoginService, BlogService],
    bootstrap: [AppComponent]
})
export class AppModule { }

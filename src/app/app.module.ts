import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DigitComponent } from './digit/digit.component';
import { CalculatorComponent } from './calculator/calculator.component';

import { HttpService } from './http.service';
import { LoginService } from './services/login.service';
import { LoginFormComponent } from './login-form/login-form.component';



@NgModule({
    declarations: [
        AppComponent,
        DigitComponent,
        CalculatorComponent,
        LoginFormComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [HttpService, LoginService],
    bootstrap: [AppComponent]
})
export class AppModule { }

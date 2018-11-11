import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InfoComponent } from './components/info/info.component';
import { PasswordComponent } from './components/password/password.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { UpdateInfoUserComponent } from './components/update-info-user/update-info-user.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'info', component: InfoComponent },
  { path: 'password', component: PasswordComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InfoComponent,
    PasswordComponent,
    InfoUserComponent,
    UpdateInfoUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

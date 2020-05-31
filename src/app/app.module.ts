import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';

import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";


import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes = [
  {path: "registration", component: RegistrationComponent},
  {path: "login", component: LoginComponent},
  {path: "", component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

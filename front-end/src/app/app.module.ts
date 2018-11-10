import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { HeaderComponent } from './onepage/header/header.component';
import { HistoireComponent } from './onepage/histoire/histoire.component';
import { LocaliserComponent } from './onepage/localiser/localiser.component';
import { ContactComponent } from './onepage/contact/contact.component';
import { CreateAccountComponent } from './compte/create-account/create-account.component';
import { LoginComponent } from './compte/login/login.component';
import { MapModule } from './onepage/localiser/map/map.module';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: HeaderComponent},
    {path: 'Accueil', component: HeaderComponent},
    {path: 'APropos', component: HistoireComponent},
    {path: 'Localiser', component: LocaliserComponent},
    {path: 'Contact', component: ContactComponent},
    {path: 'Create', component: CreateAccountComponent},
    {path: 'Login', component: LoginComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    HistoireComponent,
    ContactComponent,
    CreateAccountComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

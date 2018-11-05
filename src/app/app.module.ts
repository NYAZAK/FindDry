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


const Routes: Routes = [
    {path: '', pathMatch: 'full', component: HeaderComponent},
    {path: 'Accueil', component: HeaderComponent},
    {path: 'APropos', component: HistoireComponent},
    {path: 'Localiser', component: LocaliserComponent},
    {path: 'Contact', component: ContactComponent}
    // {path:  'connexion', component: ConnexionComponent},
    // {path:  'creerCompte', component: CreateAccountComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    HistoireComponent,
    LocaliserComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

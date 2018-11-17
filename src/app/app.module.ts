// imports des modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// Firebase 
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// imports des services
import {AuthServiceService} from './compte/auth-service.service';
import { AngularFireAuth } from 'angularfire2/auth';
// imports des composants
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './onepage/header/header.component';
import { HistoireComponent } from './onepage/histoire/histoire.component';
import { LocaliserComponent } from './onepage/localiser/localiser.component';
import { ContactComponent } from './onepage/contact/contact.component';
import { CreateAccountComponent } from './compte/create-account/create-account.component';
import { ConnexionComponent } from './compte/connexion/connexion.component';
import { ContactService } from './onepage/contact.service';
import { ProfilComponent } from './profils/profil/profil.component';
import { ProfilsComponent } from './profils/profils.component';
import { BackEndProfilComponent } from './profils/back-end-profil/back-end-profil.component';
const routes: Routes = [
    {path: '', pathMatch: 'full', component: HeaderComponent},
    {path: 'Accueil', component: HeaderComponent},
    {path: 'APropos', component: HistoireComponent},
    {path: 'Localiser', component: LocaliserComponent},
    {path: 'Contact', component: ContactComponent},
    {path: 'Create', component: CreateAccountComponent},
    {path: 'Connexion', component: ConnexionComponent},
    {path: 'ProfilUser', component: ProfilsComponent}
];


const CONFIG_FIREBASE: FirebaseAppConfig =  {
  apiKey: "AIzaSyApg1GngnF8omtw2VvgS56uUbuuLSs8m2w",
  authDomain: "finddry-1541587447936.firebaseapp.com",
  databaseURL: "https://finddry-1541587447936.firebaseio.com",
  projectId: "finddry-1541587447936",
  storageBucket: "finddry-1541587447936.appspot.com",
  messagingSenderId: "239948140752"
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    HistoireComponent,
    LocaliserComponent,
    ContactComponent,
    CreateAccountComponent,
    ConnexionComponent,
    ProfilComponent,
    ProfilsComponent,
    BackEndProfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(CONFIG_FIREBASE),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthServiceService, AngularFireAuth, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }

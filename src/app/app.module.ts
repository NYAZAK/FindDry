// imports des modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './profilUser/material.module';
// import { MaterialadModule } from './admin/materialad.module';
// Firebase 
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// imports des services
import { AuthServiceService } from './compte/auth-service.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthGuardServiceService } from '../app/navigation/auth-guard-service.service';
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
import { UserFormComponent } from './profilUser/user-form/user-form.component';
import { UserProfilComponent } from './profilUser/user-profil/user-profil.component';
import { ReservationsComponent } from './reservation/reservations/reservations.component';
import { ReservationFormComponent } from './reservation/reservation-form/reservation-form.component';
import { AdminConnexionComponent } from './admin/admin-connexion/admin-connexion.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminviewComponent } from './admin/adminview.component';
import { ProfiluserComponent } from './profilUser/profiluser.component';
import { PrixComponent } from './onepage/prix/prix.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  
  { path: 'Accueil', component: HeaderComponent },
  { path: 'APropos', component: HistoireComponent },
  { path: 'Localiser', component: LocaliserComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Create', component: CreateAccountComponent },
  { path: 'Connexion', component: ConnexionComponent },
  { path: 'Prix', component: PrixComponent },
  { path: 'ProfilUser', canActivate: [AuthGuardServiceService], component: ProfiluserComponent }, // /:userid/:id
  { path: 'Adminconnect', component: AdminConnexionComponent },
  { path: 'Adminview', canActivate: [AuthGuardServiceService], component: AdminviewComponent },
  { path: '', pathMatch: 'full', component: HeaderComponent },
  { path: '**', redirectTo: 'Accueil' }
];

const CONFIG_FIREBASE: FirebaseAppConfig = {
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
    UserFormComponent,
    UserProfilComponent,
    ReservationsComponent,
    ReservationFormComponent,
    AdminConnexionComponent,
    AdminDashboardComponent,
    AdminviewComponent,
    ProfiluserComponent,
    PrixComponent,
    FooterComponent,
    // StripeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(CONFIG_FIREBASE),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    NgbModule,
    MaterialModule,
    BrowserAnimationsModule,
    // MaterialadModule
  ],
  providers: [
    AuthServiceService,
    AuthGuardServiceService,
    AngularFireAuth,
    ContactService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

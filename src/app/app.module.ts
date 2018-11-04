import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './onepage/header/header.component';
import { HistoireComponent } from './onepage/histoire/histoire.component';
import { LocaliserComponent } from './onepage/localiser/localiser.component';
import { ContactComponent } from './onepage/contact/contact.component';
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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

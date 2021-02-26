import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeAbonneComponent } from './liste-abonne/liste-abonne.component';
import {HttpClientModule} from '@angular/common/http';
import { ListeemployeComponent } from './listeemploye/listeemploye.component';
import { ListeBusPleinComponent } from './liste-bus-plein/liste-bus-plein.component';
import { AjouterEmployerComponent } from './ajouter-employer/ajouter-employer.component';
import { FormsModule }   from '@angular/forms';

const appRoutes: Routes = [
  { path: 'listeabonne', component: ListeAbonneComponent},
  { path: 'listeemployee', component: ListeemployeComponent},
  { path: 'listebusplein', component: ListeBusPleinComponent},
  { path: 'ajouteremployer', component: AjouterEmployerComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    ListeAbonneComponent,
    ListeemployeComponent,
    ListeBusPleinComponent,
    AjouterEmployerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

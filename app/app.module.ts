import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import {HeroesComponent}  from './heroes.component';
import {HeroDetailsComponent} from "./hero-details.component";
import {HeroService} from "./hero.service";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboardComponent";
import {AppRoutingModule} from "./app-routing.module";
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
   ],
  declarations: [AppComponent, HeroesComponent, HeroDetailsComponent, DashboardComponent],
  bootstrap: [AppComponent],
  providers: [HeroService]
})

export class AppModule {
}

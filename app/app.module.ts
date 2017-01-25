import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import {HeroesComponent}  from './heroes.component';
import {HeroDetailsComponent} from "./hero-details.component";
import {HeroService} from "./hero.service";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboardComponent";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
   ],
  declarations: [AppComponent, HeroesComponent, HeroDetailsComponent, DashboardComponent],
  bootstrap: [AppComponent],
  providers: [HeroService]
})

export class AppModule {
}

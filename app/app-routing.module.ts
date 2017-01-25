/**
 * Created by heleneshaikh on 25/01/2017.
 */

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HeroesComponent} from "./heroes.component";
import {DashboardComponent} from "./dashboardComponent";
import {HeroDetailsComponent} from "./hero-details.component";

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: HeroDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

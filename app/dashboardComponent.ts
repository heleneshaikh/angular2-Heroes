/**
 * Created by heleneshaikh on 25/01/2017.
 */

import {Component, OnInit} from "@angular/core";
import {HeroService} from "./hero.service";
import {Hero} from "./heroes.component";

@Component({
  moduleId : module.id,
  selector: 'dashboard',
  template: `
             <h3>Top Heroes</h3>
              <a *ngFor="let hero of heroes" [routerLink]="['/detail', hero.id]" class="col-1-4">
                  <div class="module hero">
                    <h4>{{hero.name}}</h4>
                   </div>
               </a>
                `,
  styleUrls: ['./dashboard.component.css']

})

export class DashboardComponent implements OnInit{
  heroes: Hero[];

  constructor(private heroService:HeroService){}

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0, 4));
  }

}

import {Component, OnInit} from '@angular/core';
import {HeroService} from "./hero.service";
import {Routes, Router} from "@angular/router";

export class Hero {
  id: number;
  name: string;
}

@Component({
  moduleId: module.id,
  selector: 'heroes',
  template: `
            <ul class="heroes">
                <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="selectHero(hero)">
                    <span class="badge">{{hero.id}}</span> {{hero.name}}
                </li>
            </ul>
            <!--<hero-details [selectedHero]="selectedHero"></hero-details>-->
            <div *ngIf="selectedHero">
                <h2>
                  {{selectedHero.name | uppercase}} is my hero
                </h2>
                <button (click)="gotoDetail()">View Details</button>
            </div>`,
  styleUrls:['heroes.component.css']
})


export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService:HeroService, private router:Router) {
  }

  ngOnInit():void { //called when component gets activated
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail():void {
    this.router.navigate(['/detail', this.selectedHero.id]);
}

}

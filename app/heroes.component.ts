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
                    <button class="delete" (click)="delete(hero); $event.stopPropagation()">X</button>
                </li>
            </ul>
            <!--<hero-details [selectedHero]="selectedHero"></hero-details>-->
            <div *ngIf="selectedHero">
                <h2>
                  {{selectedHero.name | uppercase}} is my hero
                </h2>
                <button (click)="gotoDetail()">View Details</button>
            </div>
            <div>
                <label>Hero name:</label><input #heroName/>
                <button (click)="addHero(heroName.value); heroName.value=''">Add</button>
            </div>`,

  styleUrls: ['heroes.component.css']
})


export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {
  }

  ngOnInit(): void { //called when component gets activated
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  addHero(name:string): void {
    name = name.trim();
    if(!name) {
      return
    }
    this.heroService.create(name).then(hero=> {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
  }

  delete(hero:Hero):void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

}

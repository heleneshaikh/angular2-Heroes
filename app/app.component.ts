import {Component, OnInit} from '@angular/core';
import {HeroService} from "./hero.service";

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
            <ul *ngFor="let hero of heroes" class="heroes" (click)="selectHero(hero)">
                <li>{{hero.id}}</li>
                <li>{{hero.name}}</li>
            </ul>
            <hero-details [selectedHero]="selectedHero"></hero-details>
`,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
  providers: [
    HeroService
  ]
})



export class AppComponent implements OnInit {
  title = 'Heroes';
  hero: Hero = {
    id: 1,
    name: 'rabbit'
  };

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService:HeroService) {
  }

  ngOnInit():void { //called when component gets activated
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

}

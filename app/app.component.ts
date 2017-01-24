import {Component} from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES : Hero[] = [
  {id: 2, name:'Dean'},
  {id: 3, name:'Pixie'},
  {id: 4, name:'Sammy'},
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];


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
`]
})

export class AppComponent {
  title = 'Heroes';
  hero: Hero = {
    id: 1,
    name: 'rabbit'
  };

  heroes = HEROES;
  selectedHero : Hero;

  selectHero(hero:Hero): void {
    this.selectedHero = hero;
  }

}

/**
 * Created by heleneshaikh on 24/01/2017.
 */

import {Component, Input, OnInit} from "@angular/core";
import {Hero} from "./heroes.component";
import {HeroService} from "./hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
  moduleId: module.id,
  selector: 'hero-details',
  template: ` <div *ngIf="hero">
                  <h2>{{hero.name}}Details</h2>
                  <div>
                       <label> id: </label> {{hero.id}}
                   </div>
                  <div>
                       <label> name: </label> 
                       <input [(ngModel)]="hero.name">
                  </div>
                  <button (click)="goBack()">Back</button>
                  <button (click)="save()">Save</button>
               </div> 
`,
  styleUrls: ['hero-details.component.css']
})

export class HeroDetailsComponent implements OnInit {
  hero: Hero;

  constructor(private heroService: HeroService, private location: Location, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id'])).subscribe(hero => this.hero = hero);
  }

  // @Input() //input property because data flows from the binding expression into the directive
  // selectedHero: Hero;

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero).then(()=>this.goBack());
  }
}

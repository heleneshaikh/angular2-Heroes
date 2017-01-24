/**
 * Created by heleneshaikh on 24/01/2017.
 */

import {Component, Input} from "@angular/core";
import {Hero} from "./app.component";


@Component({
  selector: 'hero-details',
  template:   ` <h2>Details</h2>
               <div *ngIf="selectedHero">
                   <div>
                       <label> id: </label> {{selectedHero.id}}
                   </div>
                    <div>
                       <label> name: </label> 
                       <input [(ngModel)]="selectedHero.name">
                     </div>
               </div> 
`
})

export class HeroDetailsComponent {
  @Input() //input property because data flows from the binding expression into the directive
  selectedHero: Hero;
}

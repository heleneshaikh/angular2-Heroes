/**
 * Created by heleneshaikh on 25/01/2017.
 */


import {Component} from "@angular/core";
@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
            <nav>
                <a routerLink="/dashboard" routerLinkActive="true">dashboard</a>
                <a routerLink="/heroes" routerLinkActive="true">heroes</a>
            </nav>
            <router-outlet></router-outlet>
`,
  styleUrls:['app.component.css']
})

export class AppComponent {
  title = 'Heroes';
}

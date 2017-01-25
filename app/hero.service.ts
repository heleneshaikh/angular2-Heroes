import {Injectable} from "@angular/core";
import {Hero} from "./heroes.component";
import {HEROES} from "./heroes";
/**
 * Created by heleneshaikh on 24/01/2017.
 */

@Injectable()
export class HeroService {
  getHeroes():Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id:number):Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }
}

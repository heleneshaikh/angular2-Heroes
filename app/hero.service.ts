import {Injectable} from "@angular/core";
import {Hero} from "./app.component";
import {HEROES} from "./heroes";
/**
 * Created by heleneshaikh on 24/01/2017.
 */

@Injectable()
export class HeroService {
  getHeroes():Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}

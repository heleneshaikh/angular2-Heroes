import {Injectable} from "@angular/core";
import {Hero} from "./heroes.component";
import {HEROES} from "./heroes";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

/**
 * Created by heleneshaikh on 24/01/2017.
 */

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl) //returns observable
      .toPromise() //convert to a promise
      .then(response => response.json().data as Hero[]) //data property holds the array of heroes + return it as the resolved Promise value.
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error); //return a user friendly form of the error to the caller in a rejected promise so that the caller can display a proper error message to the user.
  }

  getHero(id:number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise() //http.get() returns an observable
      .then(response => response.json().data as Hero) //single Hero
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers}) //converts a JavaScript value to a JSON string
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name:string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // getHeroes():Promise<Hero[]> {
  //   return Promise.resolve(HEROES);
  // }

  // getHero(id:number):Promise<Hero> {
  //   return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  // }
}

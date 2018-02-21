import { Injectable } from '@angular/core';
import { Hero } from '../data/hero';
//import { HEROES } from '../mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from '../messages/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';


@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Heroes Fetched');
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);

    const url = `${this.heroesUrl}/${id}`

    return this.http.get<Hero>(url)
      .pipe(
      tap( data => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError(<any>('updateHero')))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post(this.heroesUrl, hero, httpOptions ).pipe(
      tap((hero:Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('add Hero'))
    );

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation}, failed ${error.message} `);
      return of(result as T);
    }
  }

  private log(message: string) {
    this.messageService.add('HeroService: '+ message);
  }
}

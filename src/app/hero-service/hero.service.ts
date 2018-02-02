import { Injectable } from '@angular/core';
import { Hero } from '../data/hero';
import { HEROES } from '../mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from '../messages/message.service';


@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add('HeroService: Heroes Fetched');
    return of(HEROES);
  }
}
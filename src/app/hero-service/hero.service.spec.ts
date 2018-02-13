import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { Hero } from '../data/hero';
import { MessageService } from '../messages/message.service';

describe('HeroService', () => {

  let service: HeroService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService, MessageService]
    });
    service = TestBed.get(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the heroes', () => {
    service.getHeroes().
      subscribe((heroes) => expect(heroes.length).toEqual(10));
  });

  it('shoudl return the hero for the given id',() => {
    expect(service.getHero(12)).not.toBeNull();
  });
});

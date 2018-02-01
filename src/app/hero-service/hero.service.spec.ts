import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { Hero } from '../data/hero';

describe('HeroService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));

  it('should return the heroes', inject([HeroService], (service:HeroService) => {
    service.getHeroes().
      subscribe((heroes) => expect(heroes.length).toEqual(10));
  }));
});

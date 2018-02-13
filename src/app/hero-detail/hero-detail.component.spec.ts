import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../hero-service/hero.service';
import { MessageService } from '../messages/message.service';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailComponent ],
      providers: [HeroService, MessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch hero for the given hero id in the the path', () => {

    //(component.getHero()).not.toBeNull();
  });


});

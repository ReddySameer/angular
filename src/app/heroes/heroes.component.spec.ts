import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroService } from '../hero-service/hero.service';
import { MessageService } from '../messages/message.service';
import { HEROES } from '../mock-heroes';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      imports: [RouterTestingModule],
      providers: [HeroService, MessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call Hero Constructor', () => {

      component.onSelect(HEROES[0]);
      expect(component.selectedHero.id).toEqual(11);
    });
});

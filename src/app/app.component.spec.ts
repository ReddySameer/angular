import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './messages/message.service';
describe('AppComponent', () => {
 let fixture = null;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeroesComponent,
        MessagesComponent
      ],
      imports: [RouterTestingModule],
      providers: [MessageService]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);

  }));
  it('should create the app', async(() => {

    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Tour of Heroes');
  }));
  it('should have title "Tour of Heroes"', async(()=> {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tour of Heroes')
  }))
});

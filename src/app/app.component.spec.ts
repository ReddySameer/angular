import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
 let fixture = null;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
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
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Tour of Heroes!');
  }));
  it('should have title "Tour of Heroes"', async(()=> {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tour of Heroes')
  }))
});

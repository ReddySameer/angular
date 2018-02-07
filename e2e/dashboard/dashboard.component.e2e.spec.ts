import { DashboardComponent } from '../../src/app/dashboard/dashboard.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { async } from 'q';
import { AppPage } from '../app.po';
import { DashboardPage } from './dashboard.component.po';
describe('DashboardComponent', () => {
  let page: AppPage,
    dashboardPage: DashboardPage,
    component: DashboardComponent,
    fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(()=> {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have a list of heroes', () => {
    page.navigateTo();
    expect(dashboardPage.getAllHeroesFromDashboardList().count()).toBe(5);
  })
});

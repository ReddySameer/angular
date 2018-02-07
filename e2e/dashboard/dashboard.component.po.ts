import { by, element } from 'protractor';
export class DashboardPage {
  getAllHeroesFromDashboardList() {
    return element.all(by.css('.dashbpard-heroes'));
  }
}

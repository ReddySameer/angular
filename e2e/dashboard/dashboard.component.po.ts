import { by, element } from 'protractor';
export class DashboardPage {
  getAllHeroesFromDashboardList() {
    return element.all(by.css('.dashboard-heroes'));
  }

  getHeroesDashboardLink() {
    return element.all(by.css('.heroesRouterLink'));
  }

  getDashboardLink() {
    return element.all(by.css('.dashboardRouterLink'));
  }
}

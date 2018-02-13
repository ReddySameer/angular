import { HeroDetailComponent } from '../../src/app/hero-detail/hero-detail.component';
import { AppPage } from '../app.po';
import { HeroDetailPage } from '../hero-detail/hero-detail.component.po';
import { HeroesPage } from './heroes.component.po';
import { Hero } from '../../src/app/data/hero';
import { DashboardPage } from '../dashboard/dashboard.component.po';
import { browser, protractor } from 'protractor';
describe('hero-detail component tests', () => {
  let page: AppPage,
    heroesDetailPage: HeroDetailPage,
    heroesPage: HeroesPage,
    dashboardPage: DashboardPage;

  beforeEach(() => {
    page = new AppPage();
    heroesDetailPage = new HeroDetailPage();
    heroesPage = new HeroesPage();
    dashboardPage= new DashboardPage();
  });

  xit('should display selected-hero name in uppercase', () => {
    page.navigateTo();

    heroesPage.getHerosListItem(4).click().then((data) => {
      expect(heroesDetailPage.getHeroesDetailTitle().getText()).toEqual('CELERITAS Details');
    });
  });

  xit('should display selected hero id', () => {
    page.navigateTo();
    heroesPage.getHerosListItem(4).click().then((data) => {});
    expect(heroesDetailPage.getHeroesDetailId().getText()).toEqual('Id: 14');
  });

  xit('should display selected hero name in  input field', () => {
    page.navigateTo();
    heroesPage.getHerosListItem(4).click().then((data) => {});
    expect(heroesDetailPage.getHeroesDetailInput().getAttribute('value')).toEqual('Celeritas');
  });

  it('should display hero detail when the hero id is in the path', () => {

    page.navigateTo();
    dashboardPage.getHeroesDashboardLink().click();
    var oldUrl = browser.getCurrentUrl().then(function(url){
      console.log('oldUrl:', url);
      return url;
    });
    var ec = protractor.ExpectedConditions;
    var anchorLink = heroesPage.getAnchorHeroDetailElement(12);
    anchorLink.click().then( function() {
      browser.wait( function() {
        return browser.getCurrentUrl().then(function(url){
          /*if(url ==! oldUrl) {
           return true;
           }*/

          console.log('newUrl:', url);
        });
      }, 1000, 'url has not changed');

      expect(heroesDetailPage.getHero()).not.toBeNull();
      //expect(heroesDetailPage.getHero())

    });
  });

});

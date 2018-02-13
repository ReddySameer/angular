import { AppPage } from '../app.po';
import { HeroesPage } from './heroes.component.po';
import { browser, protractor } from 'protractor';
import { DashboardPage } from '../dashboard/dashboard.component.po';

describe('heroes component tests', () => {
  let page: AppPage,
    heroesPage: HeroesPage,
      dashboardPage: DashboardPage;


  beforeEach(() => {
    page = new AppPage();
    heroesPage = new HeroesPage();
    dashboardPage = new DashboardPage();
  });
  xit('should display heroes object', () => {
    page.navigateTo();
    expect(heroesPage.getHeroesH2Text()).toEqual('WINDSTORM Details');
  });

  xit('should display heroes id', () => {
    page.navigateTo();
    expect(heroesPage.getHeroesIdText()).toEqual('Id:');
  });

  xit('should display input field', () => {
    page.navigateTo();
    expect(heroesPage.getHeroesNameInputField().isPresent()).toBeTruthy()
  });

  xit('should test for two way binding', () => {
    page.navigateTo();
    expect(heroesPage.getHeroesNameInputField().getAttribute('value')).toEqual('Windstorm');
    heroesPage.getHeroesNameInputField().clear();
    heroesPage.getHeroesNameInputField().sendKeys("Windstorm Changed");
    expect(heroesPage.getHeroesNameInputField().getAttribute('value')).toEqual('Windstorm Changed');
  });

  it('has list of items', () => {
    page.navigateTo();
    dashboardPage.getHeroesDashboardLink().click();
    expect(heroesPage.getAllFromHeroList().count()).toEqual(10);
  });

  xit('should test for list item', () => {
    page.navigateTo();
    //browser.navigateTo("/")
    dashboardPage.getHeroesDashboardLink().click();
    expect(heroesPage.getHeroNameFromList(3).getText()).toEqual([ 'Bombasto' ]);
  });

  it('should go to hero-detail when anchor is clicked', () => {
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
    });
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49154/detail/12')
  });

});

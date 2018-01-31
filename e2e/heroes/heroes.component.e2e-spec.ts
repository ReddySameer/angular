import { AppPage } from '../app.po';
import { HeroesPage } from './heroes.component.po';
import { protractor } from 'protractor';

describe('heroes component tests', () => {
  let page: AppPage,
    heroesPage: HeroesPage;

  beforeEach(() => {
    page = new AppPage();
    heroesPage = new HeroesPage();
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

    expect(heroesPage.getAllFromHeroList().count()).toEqual(10);
  });

  it('should test for list item', () => {
    page.navigateTo();
    expect(heroesPage.getHeroNameFromList(3).getText()).toEqual([ 'Bombasto' ]);
  });

});

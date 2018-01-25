import { AppPage } from '../app.po';
import { HeroesPage } from './heroes.component.po';
import { protractor } from 'protractor';

fdescribe('heroes component tests', () => {
  let page: AppPage,
    heroesPage: HeroesPage;

  beforeEach(() => {
    page = new AppPage();
    heroesPage = new HeroesPage();
  });
  it('should display heroes object', () => {
    page.navigateTo();
    expect(heroesPage.getHeroesH2Text()).toEqual('WINDSTORM Details');
  });

  it('should display heroes id', () => {
    page.navigateTo();
    expect(heroesPage.getHeroesIdText()).toEqual('Id:');
  });

  it('should display input field', () => {
    page.navigateTo();
    expect(heroesPage.getHeroesNameInputField().isPresent()).toBeTruthy()
  });

  it('should test for two way binding', () => {
    page.navigateTo();
    expect(heroesPage.getHeroesNameInputField().getAttribute('value')).toEqual('Windstorm');
    heroesPage.getHeroesNameInputField().clear();
    heroesPage.getHeroesNameInputField().sendKeys("Windstorm Changed");
    expect(heroesPage.getHeroesNameInputField().getAttribute('value')).toEqual('Windstorm Changed');
  });
});

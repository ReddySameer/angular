import { HeroDetailComponent } from '../../src/app/hero-detail/hero-detail.component';
import { AppPage } from '../app.po';
import { HeroDetailPage } from '../hero-detail/hero-detail.component.po';
import { HeroesPage } from './heroes.component.po';
import { Hero } from '../../src/app/data/hero';
fdescribe('hero-detail component tests', () => {
  let page: AppPage,
    heroesDetailPage: HeroDetailPage,
    heroesPage: HeroesPage;

  beforeEach(() => {
    page = new AppPage();
    heroesDetailPage = new HeroDetailPage();
    heroesPage = new HeroesPage();
  });

  it('should display selected-hero name in uppercase', () => {
    page.navigateTo();
    heroesPage.getHerosListItem(4).click().then((data) => {
      expect(heroesDetailPage.getHeroesDetailTitle().getText()).toEqual('CELERITAS Details');
    });
  });

  it('should display selected hero id', () => {
    page.navigateTo();
    heroesPage.getHerosListItem(4).click().then((data) => {});
    expect(heroesDetailPage.getHeroesDetailId().getText()).toEqual('Id: 14');
  });

  it('should display selected hero name in  input field', () => {
    page.navigateTo();
    heroesPage.getHerosListItem(4).click().then((data) => {});
    expect(heroesDetailPage.getHeroesDetailInput().getAttribute('value')).toEqual('Celeritas');
  });

});

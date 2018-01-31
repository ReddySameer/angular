import { by, element } from 'protractor';
export class HeroDetailPage {
  getHeroesDetailTitle() {
    return element(by.css('.heroes-title'));
  }

  getHeroesDetailId() {
    return element(by.css('.hero-id'));
  }

  getHeroesDetailInput() {
    return element(by.css('.hero-name-input'));
  }
}

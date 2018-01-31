import { browser, by, element } from 'protractor';

export class HeroesPage {

  getHeroesH2Text() {
    return element(by.css('app-root h2.heroes-title')).getText();
  }

  getHeroesIdText() {
    return element(by.css('app-root .hero-id span')).getText();
  }

  getHeroesNameInputField() {
    return element(by.css('app-root .hero-name-input'));
  }

  getHerosListItem(id) {
    return element.all(by.css(`.heroes li:nth-child(${id})`))
  }

  getHeroNameFromList(id) {
    return element.all(by.css(`.heroes li:nth-child(${id}) span.hero-name`));
  }

  getAllFromHeroList() {
    return element.all(by.css('.heroes-list'));
  }


}

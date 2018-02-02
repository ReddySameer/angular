import { by, element } from 'protractor';

/**
 * Created by sxb3342 on 2/2/18.
 */
export class MessagesSection {
  getMessagesList() {
    return element.all(by.css('.messages-list'));
  }
}

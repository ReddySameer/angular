import { AppPage } from '../app.po';
import { MessagesSection } from './messages.section.po';

/**
 * Created by sxb3342 on 2/2/18.
 */
describe('messages section tests', () => {
  let page: AppPage,
  messagesSection: MessagesSection;

  beforeEach(() => {
    page = new AppPage();
    messagesSection = new MessagesSection();
  });

  it('will display list of messages', () => {
    page.navigateTo();
    expect(messagesSection.getMessagesList().count()).toEqual(1);
  });
});

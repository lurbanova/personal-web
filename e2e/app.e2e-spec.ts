import { PersonalWebPage } from './app.po';

describe('personal-web App', () => {
  let page: PersonalWebPage;

  beforeEach(() => {
    page = new PersonalWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

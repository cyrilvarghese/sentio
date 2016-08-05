import { SentioAppPage } from './app.po';

describe('sentio-app App', function() {
  let page: SentioAppPage;

  beforeEach(() => {
    page = new SentioAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

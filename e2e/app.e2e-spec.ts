import { SASSSYPage } from './app.po';

describe('sasssy App', () => {
  let page: SASSSYPage;

  beforeEach(() => {
    page = new SASSSYPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

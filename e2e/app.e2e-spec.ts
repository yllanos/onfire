import { KevayaPage } from './app.po';

describe('kevaya App', () => {
  let page: KevayaPage;

  beforeEach(() => {
    page = new KevayaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { PuxbitPage } from './app.po';

describe('puxbit App', function() {
  let page: PuxbitPage;

  beforeEach(() => {
    page = new PuxbitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

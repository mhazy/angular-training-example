import { LoyaltyOnePage } from './app.po';

describe('loyalty-one App', function() {
  let page: LoyaltyOnePage;

  beforeEach(() => {
    page = new LoyaltyOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

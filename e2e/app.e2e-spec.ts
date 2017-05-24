import { NgBitrisePage } from './app.po';

describe('ng-bitrise App', () => {
  let page: NgBitrisePage;

  beforeEach(() => {
    page = new NgBitrisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

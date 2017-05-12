import { MsgBoardPage } from './app.po';

describe('msg-board App', () => {
  let page: MsgBoardPage;

  beforeEach(() => {
    page = new MsgBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

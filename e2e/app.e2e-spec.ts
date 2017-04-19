import { NotebookPage } from './app.po';

describe('notebook App', () => {
  let page: NotebookPage;

  beforeEach(() => {
    page = new NotebookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('note works!');
  });
});

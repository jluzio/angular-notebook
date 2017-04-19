import { browser, element, by } from 'protractor';

export class NotebookPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('note-root h1')).getText();
  }
}

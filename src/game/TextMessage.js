import utils from '../utils';

export default class TextMessage {
  constructor({ text, onComplete }) {
    this.text = text;
    this.onComplete = onComplete;
  }

  done() {
    this.onComplete();
  }

  init(event) {
    utils.emitEvent('TextMessage', { text: event.text });

    document.addEventListener('TextMessageDone', () => {
      this.done();
    });
  }
}

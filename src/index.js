const readline = require('readline');

class ConsoleConnector {
  constructor(settings = {}) {
    this.settings = settings;
    this.onHear = this.settings.onHear;
  }

  initialize() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false,
    });
    this.rl.on('line', line => this.hear(line));
  }

  say(message) {
    let text =
      typeof message === 'string' ? message : message.answer || message.message;
    if (!text) {
      text = '(No text)';
    }
    const botName = this.settings.botName || 'bot';
    if (this.settings.debug && message.intent) {
      text += ` (${message.intent} - ${message.score})`;
    }
    console.log(`${botName}> ${text}`);
  }

  async hear(line) {
    const input = {
      message: line,
      channel: 'console',
    };
    if (this.onHear) {
      this.onHear(this, input);
    } else if (this.container) {
      const nlp = this.container.get('nlp');
      if (nlp) {
        const result = await nlp.process(input);
        this.say(result);
      }
    }
  }

  close() {
    this.rl.close();
  }

  destroy() {
    this.close();
  }

  exit() {
    process.exit();
  }
}

module.exports = ConsoleConnector;

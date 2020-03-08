const ConsoleConnector = require('../src');

function onHear(connector, input) {
  if (input.message.toLowerCase() === 'quit') {
    connector.destroy();
  } else {
    connector.say(input.message.split('').reverse().join(''));
  }
}

const connector = new ConsoleConnector({ onHear });
connector.initialize();
connector.say('Say something, I will reverse it! Say "quit" to end the conversation');
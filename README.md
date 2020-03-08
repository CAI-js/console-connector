# @caijs/console-connector

A console connector to build console based chatbots.

## Installation

In your project folder run:

```bash
$ npm install @caijs/console-connector
```

## Example of use

```javascript
const ConsoleConnector = require('@caijs/console-connector');

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
```

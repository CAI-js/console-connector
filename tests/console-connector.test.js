const ConsoleConnector = require('../src');

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};

describe('Console Connector', () => {
  describe('Constructor', () => {
    test('Constructor', () => {
      const connector = new ConsoleConnector();
      expect(connector).toBeDefined();
    });
  });

  describe('Say', () => {
    test('It should say an string', () => {
      console.log = jest.fn();
      const connector = new ConsoleConnector();
      connector.say('Hello world');
      expect(console.log).toHaveBeenCalledWith('bot> Hello world');
    });
  });
});

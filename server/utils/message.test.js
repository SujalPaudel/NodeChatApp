var expect = require('expect');

var {generateMessage} = require('./message')


describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Bishal';
    var text = 'This is test from Mocha';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});
  });
});
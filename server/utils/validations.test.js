const expect = require('expect');
var {isRealString} = require('./validations');

describe('isRealString', () => {
  it('should reject non-string value', () => {
    var str = 123;

    var result = isRealString(str);
    expect(result).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var str = ('       ');
    var result = isRealString(str);

    expect(result).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var str = '    Sujal     ';
    var result = isRealString(str);

    expect(result).toBe(true);
  })
});
const helpers = require('./project-1');

// start testing!
// test('Jest runs', () => {});

test('Multiply by 10', () => {
  expect(helpers.multiplyByTen(5)).toBe(50);
});

test('subtract five', () => {
  expect(helpers.subtractFive(9)).toBe(4);
});

test('same length', () => {
  expect(helpers.areSameLength('cat', 'fox')).toBe(true);
  expect(helpers.areSameLength('weather', 'water')).toBe(false);
});

test('are equal', () => {
  expect(helpers.areEqual(7, 2)).toBe(false);
  expect(helpers.areEqual('water', 'water')).toBe(true);
});

test('less than 90', () => {
  expect(helpers.lessThanNinety(42)).toBe(true);
  expect(helpers.lessThanNinety(90)).toBe(false);
  expect(helpers.lessThanNinety(256)).toBe(false);
});

test('greater than 50', () => {
  expect(helpers.greaterThanFifty(18)).toBe(false);
  expect(helpers.greaterThanFifty(50)).toBe(false);
  expect(helpers.greaterThanFifty(99)).toBe(true);
});

test('add', () => {
  expect(helpers.add(3, 5)).toBe(8);
  expect(helpers.add(3, -4)).toBe(-1);
});

test('subtract', () => {
  expect(helpers.subtract(7, 10)).toBe(-3);
  expect(helpers.subtract(10, 7)).toBe(3);
  expect(helpers.subtract(42, 9)).toBe(33);
});

test('divide', () => {
  expect(helpers.divide(9, 3)).toBe(3);
  expect(helpers.divide(5, 2)).toBe(2.5);
});

test('multipy', () => {
  expect(helpers.multiply(7, 10)).toBe(70);
  expect(helpers.multiply(1, 1)).toBe(1);
});

test('getRemainder', () => {
  expect(helpers.getRemainder(10, 7)).toBe(3);
  expect(helpers.getRemainder(40, 10)).toBe(0);
});

test('isEven', () => {
  expect(helpers.isEven(5)).toBe(false);
  expect(helpers.isEven(6)).toBe(true);
});

test('isOdd', () => {
  expect(helpers.isOdd(5)).toBe(true);
  expect(helpers.isOdd(4)).toBe(false);
});

test('square', () => {
  expect(helpers.square(5)).toBe(25);
});

test('cube', () => {
  expect(helpers.cube(5)).toBe(125);
});

test('raise to power', () => {
  expect(helpers.raiseToPower(3, 5)).toBe(243);
});

test('round number', () => {
  expect(helpers.roundNumber(3.5)).toBe(4);  
  expect(helpers.roundNumber(3.2)).toBe(3);  
});

test('round number up', () => {
  expect(helpers.roundUp(3.7)).toBe(4);
  expect(helpers.roundUp(3.2)).toBe(4);
});

test('add exclamation point', () => {
  expect(helpers.addExclamationPoint('wow')).toBe('wow!');
});

test('combine names', () => {
  expect(helpers.combineNames('wow', '!')).toBe('wow !');
  expect(helpers.combineNames('steve', 'smodish')).toBe('steve smodish');
});

test('get greeting', () => {
  expect(helpers.getGreeting('tim')).toBe('Hello tim!');
});

test('get rectangle area', () => {
  expect(helpers.getRectangleArea(3, 10)).toBe(30);
});

test('get triangle area', () => {
  expect(helpers.getTriangleArea(3, 10)).toBe(15);
});

test('get circle area', () => {
  expect(helpers.getCircleArea(10)).toBeCloseTo(314.159);
});

test('get rectangular prism volume', () => {
  expect(helpers.getRectangularPrismVolume(3, 10, 5)).toBe(150);
});
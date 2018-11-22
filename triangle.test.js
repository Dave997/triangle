const evaluate = require('./triangle').evaluate;

test('Testing equilateral triangle: 5 5 5', () => {
    expect(evaluate(5, 5, 5)).toBe('equilateral');
});

test('Testing isosceles triangle: 4 4 5', () => {
    expect(evaluate(4, 4, 5)).toBe('isosceles');
});
test('Testing isosceles triangle: 5 4 4', () => {
    expect(evaluate(5, 4, 4)).toBe('isosceles');
});
test('Testing isosceles triangle: 4 5 4', () => {
    expect(evaluate(4, 5, 4)).toBe('isosceles');
});

test('Testing scalene triangle: 5 4 3', () => {
    expect(evaluate(5, 4, 3)).toBe('scalene');
});
test('Testing scalene triangle: 3 5 4', () => {
    expect(evaluate(3, 5, 4)).toBe('scalene');
});
test('Testing scalene triangle: 4 3 5', () => {
    expect(evaluate(4, 3, 5)).toBe('scalene');
});

test('Testing too few parameters: 5 5', () => {
    expect(evaluate(5, 5)).toBe('err: bad_parameters');
});
test('Testing too many parameters: 5 5 5 5', () => {
    expect(evaluate(5, 5, 5, 5)).toBe('err: bad_parameters');
});
test('Testing no parameters', () => {
    expect(evaluate()).toBe('err: bad_parameters');
});

test('Testing wrong numbers: 1 1 9', () => {
    expect(evaluate(1, 1, 9)).toBe('err: not_triangle');
});
test('Testing wrong numbers: 9 1 1', () => {
    expect(evaluate(9, 1, 1)).toBe('err: not_triangle');
});
test('Testing wrong numbers: 1 0 9', () => {
    expect(evaluate(1, 0, 9)).toBe('err: not_triangle');
});
test('Testing wrong numbers: 0 0 0', () => {
    expect(evaluate(0, 0, 0)).toBe('err: not_triangle');
});

test('Testing wrong parameters: a a a', () => {
    expect(evaluate('a', 'a', 'a')).toBe('err: bad_parameters');
});
test('Testing wrong parameters: a', () => {
    expect(evaluate('a')).toBe('err: bad_parameters');
});
test('Testing wrong parameters: "1" "1" "1"', () => {
    expect(evaluate('1', '1', '1')).toBe('err: bad_parameters');
});
test('Testing wrong parameters: 1 1 a', () => {
    expect(evaluate(1, 1, 'a')).toBe('err: bad_parameters');
});
test('Testing wrong parameters: test', () => {
    expect(evaluate('test')).toBe('err: bad_parameters');
});
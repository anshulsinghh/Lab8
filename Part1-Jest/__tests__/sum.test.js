test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

const sum = require('../assets/scripts/sum')
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});
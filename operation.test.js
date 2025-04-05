const {add } = require('./operation');

test('Somma di 2 e 2 deve essere 4', () => {
    expect(add(2, 2)).toBe(4);
});

test('Somma di 3 e 5 deve essere 7', () => {
    expect(add(3, 5)).toBe(7);
});
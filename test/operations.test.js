const operations = require('./operation');

test('Addizione corretta di 2 + 2 = 4', () => {
    const result = operations.add(2, 2);
    expect(result).toBe(4);
});

test('Sottrazione corretta di 5 - 3 = 2', () => {
    const result = operations.subtract(5, 3);
    expect(result).toBe(2);
});

test('Moltiplicazione corretta di 3 * 4 = 12', () => {
    const result = operations.multiply(3, 4);
    expect(result).toBe(12);
});

test('Divisione corretta di 8 / 2 = 4', () => {
    const result = operations.divide(8, 2);
    expect(result).toBe(4);
});

test('Divisione per zero genera errore', () => {
    expect(() => {
        operations.divide(8, 0);
    }).toThrow("Impossibile divire per zero");
});

test('Potenza corretta di 2 ^ 3 = 8', () => {
    const result = operations.power(2, 3);
    expect(result).toBe(8);
});
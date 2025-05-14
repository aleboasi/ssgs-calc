const operations = require('../src/operation');

test('Addizione corretta di numeri positivi', () => {
    const result = operations.add(2, 2);
    expect(result).toBe(4);
});

test('Addizione corretta di numeri negativi', () => {
    const result = operations.add(-2, -3);
    expect(result).toBe(-5);
});

test('Addizione corretta di un numero positivo e uno negativo', () => {
    const result = operations.add(5, -3);
    expect(result).toBe(2);
});

test('Addizione corretta con zero', () => {
    const result = operations.add(0, 5);
    const result2 = operations.add(-5, 0);
    expect(result).toBe(5);
    expect(result2).toBe(-5);
});

test('Sottrazione corretta di numeri positivi', () => {
    const result = operations.subtract(5, 3);
    expect(result).toBe(2);
});

test('Sottrazione corretta di numeri negativi', () => { 
    const result = operations.subtract(-5, -3);
    expect(result).toBe(-2);
});

test('Sottrazione corretta di un numero positivo e uno negativo', () => {
    const result = operations.subtract(5, -3);
    expect(result).toBe(8);
});

test('Sottrazione corretta con zero', () => {
    const result = operations.subtract(0, 5);
    const result2 = operations.subtract(-5, 0);
    expect(result).toBe(-5);
    expect(result2).toBe(-5);
});


test('Moltiplicazione corretta con numeri positivi', () => {
    const result = operations.multiply(3, 4);
    expect(result).toBe(12);
});

test('Moltiplicazione corretta con numeri negativi', () => {
    const result = operations.multiply(-3, -4);
    expect(result).toBe(12);
});
test('Moltiplicazione corretta con un numero positivo e uno negativo', () => {
    const result = operations.multiply(3, -4);
    expect(result).toBe(-12);
});

test('Moltiplicazione corretta con zero', () => {
    const result = operations.multiply(0, 5);
    const result2 = operations.multiply(-5, 0);
    expect(result).toBe(0);
    expect(result2).toBe(-0);
});

test('Divisione corretta di numeri positivi', () => {
    const result = operations.divide(8, 2);
    expect(result).toBe(4);
});

test('Divisione corretta di numeri negativi', () => {
    const result = operations.divide(-8, -2);
    expect(result).toBe(4);
});

test('Divisione corretta di un numero positivo e uno negativo', () => {
    const result = operations.divide(8, -2);
    expect(result).toBe(-4);
});

test('Divisione per zero genera errore', () => {
    expect(() => {
        operations.divide(8, 0);
    }).toThrow("Impossibile divire per zero");
});

test('Potenza corretta di base ed esponenti positivi', () => {
    const result = operations.power(2, 3);
    expect(result).toBe(8);
});

test('Potenza corretta di base ed esponenti negativi', () => {
    const result = operations.power(-2, -3);
    expect(result).toBe(-0.125);
});

test('Potenza corretta di base positiva ed esponente negativo', () => {
    const result = operations.power(2, -3);
    expect(result).toBe(0.125);
});

test('Potenza corretta di base negativa ed esponente positivo', () => {
    const result = operations.power(-2, 3);
    expect(result).toBe(-8);
});

test('Potenza corretta con zero come base ed esponente positivo', () => {
    const result = operations.power(0, 3);
    expect(result).toBe(0);
});
const readline = require('readline');
const operations = require('./operation');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Benvenuto della calcolatrice!");
console.log("Scegli un'operazione:");
console.log("1. Somma");
console.log("2. Sottrazione");
console.log("3. Moltiplicazione");
console.log("4. Divisione");
console.log("5. Potenza");

rl.question("Seleziona un'operazione (1-5): ", (operation) => {
    if (!['1', '2', '3', '4', '5'].includes(operation)) {
        console.log("Operazione non valida. Riprova.");
        rl.close();
        return;
    }
    
    rl.question("Inserisci il primo numero: ", (num1) => {
        rl.question("Inserisci il secondo numero: ", (num2) => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        let result;
    
        switch (operation) {
            case '1':
            result = operations.add(a, b);
            break;
            case '2':
            result = operations.subtract(a, b);
            break;
            case '3':
            result = operations.multiply(a, b);
            break;
            case '4':
            result = operations.divide(a, b);
            break;
            case '5':
            result = operations.power(a, b);
            break;
        }
    
        console.log(`Il risultato è: ${result}`);
        rl.close();
        });
    });
});
const readline = require('readline');
const {add, subtract, multiply, divide} = require('./operation');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Benvenuto nella calcolatrice!");
console.log("Scegli un'operazione tra '+', '-', '*', '/'");

rl.question("Inserisci un'opzione: ", (operation) => {
    rl.question("Inserisci il primo numero: ", (num1) => {
        rl.question("Inserisci il secondo numero: ", (num2) => {

            const a = parseFloat(num1);
            const b = parseFloat(num2);

            if(isNaN(a) || isNaN(b)) {
                console.log("Input non valido, riprova");
                rl.close();
                return;
            }

            let result;
            try {
                switch(operation) {
                    case '+':
                        result = add(a, b);
                        break;
                    case '-':
                        result = subtract(a, b);
                        break;
                    case '*':
                        result = multiply(a, b);
                        break;
                    case '/':
                        result = divide(a, b);
                        break;
                    default:
                        console.log("Operazione non valida, riprova");
                        rl.close();
                        return;
                }

                console.log(`Risultato: ${result}`);
            } catch(e) {
                console.log(e.message);
            }

            rl.close();

        });
    });
});
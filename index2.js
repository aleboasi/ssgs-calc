const readline = require('readline');
const {add, subtract, multiply, divide} = require('./operation');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askOperation() {
    rl.question("Inserisci operazione (+, -, *, /): ", (operation) => {
        if (!['+', '-', '*', '/'].includes(operation)) {
            console.log("Operazione non valida, riprova");
            askOperation();
            return;
        }
    askNumbers(operation);
    });
}

function askNumbers(operation) {
    rl.question("Inserisci il primo numero: ", (num1) => {
        rl.question("Inserisci il secondo numero: ", (num2) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);

            if(isNaN(a) || isNaN(b)) {
                console.log("Input non valido, riprova");
                askNumbers(operation);
                return;
            }
            let result;
            try{
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
                }
                console.log(`Risultato: ${result}`);
                rl.close();
            } catch(e) {
                console.log(e.message);
                askNumbers(operation);
            }
        });
    });
}

console.log("Benvenuto nella calcolatrice!");
askOperation();
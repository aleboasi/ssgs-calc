## Calcolatrice JS

è un applicazione di calcolo che fornisce operazione matematiche di base.
Include una serie di test automatizzati e una pipeline CI trammite GitHub Actions.

### Funzionalità
- *operazioni di base*:
  - somma
  - sottrazzione
  - moltiplicazione
  - divisione
  - potenza

- *test automatizzati*: utilizzando Jest per la verifica delle operazioni.
- *integrazione continua*: la pipeline CI esegue automaticamente i test su ogni commit tramite GitHub Actions
  
### Prerequisiti
- Node.js
- npm (Node Package Manager)

### Installazione
  1. Clonazione della repository
     git clone https://github.com/aleboasi/ssgs-calc.git
  2. Cambio di directory del progetto
     cd ssgs-calc
  3. Installazione dipendenze
     npm install
     
### Utilizzo
- *per avviare l'applicazione è necessario scrivere a terminale*
    node index.js

### Test
- *per eseguire i test serve scrivere a terminale*
  npm test

- *per verificare la copertura del codice invece*
  npm test -- --coverage

- *l'obbiettivo finale è la coverage al 100%*

### Integrazione Continua
La pipeline CI è configurata tramite GitHub Actions:
  - *trigger: automatici ad ogni commit*
  - *file di configurazione: ./github/workflow/ci.yml*
  - risultati: i risultati dei test saranno visibili nelle Actions*

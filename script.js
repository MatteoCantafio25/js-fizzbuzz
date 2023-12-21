//---------------------------------//
// MI ASSICURO CHE IL FOGLIO JS COMUNICHI CON IL FOGLIO HTML

console.log("JS OK");

//---------------------------------//
// USO UN FOR PER STAMPARE QUANTI NUMERI VOGLIO

for (let i = 1; i <= 100; i++) {
    //----------------//
    // ASSEGNO UNA VARIABILE 
    let content = i;

    //----------------//
    // USO UN IF PER FAR SCRIVERE FIZZBUZZ COME CONTENT QUANTO UN NUMERO E' DIVISIBILE SIA PER 3 CHE PER 5

    if (i % 15 === 0) {
        content = "fizzbuzz";
    }

    //----------------//
    // USO UN IF ELSE PER FAR SCRIVERE FIZZ COME CONTENT QUANTO UN NUMERO E' DIVISIBILE PER 3 
    else if (i % 3 === 0) {
        content = "fizz";
    }

    //----------------//
    // USO UN IF ELSE PER FAR SCRIVERE BUZZ COME CONTENT QUANTO UN NUMERO E' DIVISIBILE PER 5 
    else if (i % 5 === 0) {
        content = "buzz";
    }

    //----------------//
    // FACCIO UN CONSOLE LOG PER STAMPARE IL CONTENUTO
    console.log(content);
}
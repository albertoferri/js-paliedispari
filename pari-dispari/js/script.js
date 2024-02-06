// Pari e Dispari
// L’utente sceglie pari o dispari.
// Inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}


// inposto funzione per capire se un numero è pari o dispari
function pariODispari(numero) {
    if (numero % 2 == 0) {
    return 'pari';
    } else {
    return 'dispari';
    }
}

document.getElementById("start").addEventListener("click", 
    function() {
        // inposto variabili degli elementi di input
        let sceltaUtenteInput = document.getElementById("sceltaUtenteInput").value;
        let numeroUtenteInput = Number(document.getElementById("numeroUtenteInput").value);
        console.log("il tuo numero è: " + numeroUtenteInput)
    
        // Genera un numero casuale per il computer
        let numeroComputer = randomNumber();
        console.log("il n° random del computer è: " + numeroComputer)

        // Sommiamo i due numeri
        let somma = numeroUtenteInput + numeroComputer;

        // Determina se la somma è pari o dispari
        let risultato = pariODispari(somma);
        console.log("la somma dei numeri è: " + somma + " quindi " + risultato)

        // setto la variabile risposta vuota per poi inserire il testo in base alla vincita
        let risposta = "";
        if (risultato === sceltaUtenteInput) {
        risposta = "Hai vinto! Il risultato è " + risultato + ". <br> Il tuo numero: " + numeroUtenteInput + " <br> Il numero del computer: " + numeroComputer + " <br> La somma: " + somma;
        } else {
        risposta = "Hai perso! Il risultato è " + risultato + ". <br> Il tuo numero: " + numeroUtenteInput + " <br> Il numero del computer: " + numeroComputer + " <br> La somma: " + somma;
        }
    
        // stampo in pagina la risposta
        document.getElementById("risultato").innerHTML = risposta;
    }
);

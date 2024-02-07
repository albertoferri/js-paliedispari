// Palidroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma
// (ad esempio, questa funzione potrebbe funzionare così: passandole la parola come parametro, 
// farà i suoi calcoli per capire se è palindroma o meno e ci restituirà true o false in base all'esito)


// Chiedi all'utente di inserire una parola
let userInput = prompt("Inserisci una parola:");


// Creare una funzione per capire se la parola inserita è palindroma
function isPalindrome(parola) {
    // Ottieni la lunghezza della parola
    let char = parola.length;

    // divido la parola in metà per capire se è palindroma
    for (let i = 0; i < char / 2; i++) {
        
        // l'istruzione "lenght - 1 - i" serve per confrontare il carattere corrente con quello simmetrico nella seconda metà della parola
        if (parola[i] !== parola[char - 1 - i]) {
            // Se sono diversi, la parola non è palindroma
            return false;
        }
    }
    // Se il ciclo è terminato senza dare errore (=true), la parola è palindroma
    return true;
}

// Verifica se la parola inserita è palindroma in console
if (isPalindrome(userInput)) {
    document.getElementById("result").innerHTML = "Hai inserito la parola: " + userInput +  "<br>La parola inserita è palindroma!";
    console.log("La parola inserita è palindroma.");
} else {
    document.getElementById("result").innerHTML = "Hai inserito la parola: " + userInput +  "<br>La parola inserita NON è palindroma!";;
    console.log("La parola inserita non è palindroma.");
}
document.querySelector("h1").innerText = "PAROLE PALINDROME";
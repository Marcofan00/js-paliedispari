/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
Dare l’output relativo. */

// chiedo all'utente di inserire una parola
const wordUser = prompt("Inserisci una parola");
// se sono uguli è palindroma
if(wordUser === invertOrder(wordUser)){
    console.log("la parola è palindroma");
//altrimenti non lo è
} else {
    console.log("la parola non è palindroma");
}
console.log(invertOrder(wordUser));
 
function invertOrder(word) {
    return word.split("").reverse().join(""); 
}
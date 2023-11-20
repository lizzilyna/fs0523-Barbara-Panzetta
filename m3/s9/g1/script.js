function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function determinaVincitore(giocatore1, giocatore2, numeroCasuale) {
    var sceltaGiocatore1 = Math.abs(numeroCasuale - giocatore1);
    var sceltaGiocatore2 = Math.abs(numeroCasuale - giocatore2);
    if (giocatore1 === numeroCasuale && giocatore2 === numeroCasuale) {
        return "Entrambi i giocatori hanno indovinato ".concat(numeroCasuale, "!");
    }
    else if (giocatore1 === numeroCasuale) {
        return "Il giocatore 1 ha indovinato ".concat(numeroCasuale, "!");
    }
    else if (giocatore2 === numeroCasuale) {
        return "Il giocatore 2 ha indovinato ".concat(numeroCasuale, "!");
    }
    else {
        if (sceltaGiocatore1 === sceltaGiocatore2) {
            return "Nessuno dei due ha azzeccato il numero, ma entrambi si sono avvicinati di uguale misura!";
        }
        else if (sceltaGiocatore1 < sceltaGiocatore2) {
            return "Nessuno dei due ha azzeccato il numero, ma il giocatore 1 si \u00E8 avvicinato di pi\u00F9.";
        }
        else {
            return "Nessuno dei due ha azzeccato il numero, ma il giocatore 2 si \u00E8 avvicinato di pi\u00F9.";
        }
    }
}
var giocatore1 = 5;
var giocatore2 = 10;
var numeroCasuale = generaNumeroCasuale(1, 100);
var risultato = determinaVincitore(giocatore1, giocatore2, numeroCasuale);
console.log(risultato);

"use strict";
class Smartphone {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        this.registroChiamate = [];
    }
    ricarica(euro) {
        this.carica += euro;
    }
    numero404() {
        return `Credito residuo: ${this.carica.toFixed(2)}`;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        const costoChiamata = min * this.costoMinuto;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            const dataOraChiamata = new Date().toLocaleString();
            this.registroChiamate.push({
                id: this.numeroChiamate,
                durata: min,
                dataOra: dataOraChiamata
            });
        }
        else {
            console.log("Credito insufficiente.");
        }
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        this.registroChiamate = [];
    }
}
const telefonino = new Smartphone();
telefonino.ricarica(20);
console.log (telefonino.numero404());
telefonino.chiamata(3);
console.log (telefonino.getNumeroChiamate())
console.log (telefonino.azzeraChiamate())
console.log (telefonino.getNumeroChiamate());
console.log(telefonino.chiamata(5));
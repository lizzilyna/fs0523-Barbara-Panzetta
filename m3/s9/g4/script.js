"use strict";
class CapoDiAbbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    //ora i metodi riferiti alle proprietà inizializzate con this
    getsaldocapo() {
        return this.saldo;
    }
    getacquistocapo() {
        return this.prezzoivainclusa - this.getsaldocapo();
    }
    ottieniDatiDaApi() {
        const apiUrl = 'http://localhost:4000/abbigliamento';
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
            console.log(data);
        });
    }
}
const CapoDiAbbigliamento1 = new CapoDiAbbigliamento(1, 2522, 'Possession', 'Giuditta', 2902, 85, 'rosso', 120, 125, 'sì', 50);
console.log(CapoDiAbbigliamento1.getacquistocapo());
console.log(CapoDiAbbigliamento1.getsaldocapo());
;
;

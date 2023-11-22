"use strict";
class LavoratoreAutonomo {
    //all'interno della classe astratta creo il costruttore, sorta di libretto di instruzioni per creare le classi concrete. contiene tra parentesi tonde i PARAMETRI: le proprietà (e come d'uopo in ts tipo di valore) della classe. Tra parentesi graffa invece this, che indica l'oggetto specifico (ancora non usato). 
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
}
//Ora fuori creo la classe concreta ("class"), che non è ancora il lavoratore vero e proprio, e che implementa i metodi astratti con la logica. LavoratoreAutonomoImp1 estende la classe astratta.
class LavoratoreAutonomoImp1 extends LavoratoreAutonomo {
    getUtileTasse() {
        return this.tasseinps + this.tasseirpef;
    }
    getTasseInps() {
        return this.tasseinps;
    }
    getTasseIrpef() {
        return this.tasseirpef;
    }
    getRedditoAnnuoNetto() {
        return this.redditoannuolordo - this.getUtileTasse();
    }
}
//Finalmente il lavoratore vero e proprio, ISTANZA della classe concreta. Qui inseriamo i 4 parametri dichiarati all'inizio, nella classe astratta.
const Mario = new LavoratoreAutonomoImp1(1, 50000, 5000, 7000);
//il programmino restituisce tutti i dettagli, anche il reddito netto:
console.log(`Codice Reddito: ${Mario.codredd}`);
console.log(`Reddito annuo lordo: ${Mario.redditoannuolordo}`);
console.log(`Tasse INPS: ${Mario.getTasseInps()}`); //in realtà penso che qui non ci fosse bisogno del metodo ma ok
console.log(`Tasse Irpef: ${Mario.getTasseIrpef()}`); //idem cs
console.log(`Reddito Annuo Netto: ${Mario.getRedditoAnnuoNetto()}`);

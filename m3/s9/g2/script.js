"use strict";
//costruisco le due classi. La prima contiene una proprietà, il saldo, e due metodi: prelievo e deposito. La seconda, che estende la prima, ne eredita proprietà e metodi ma contiene un ulteriore metodo: il calcolo dell'interesse (10%)
class SonAccount {
    constructor() {
        this.balance = 0;
    }
    oneDeposit(amount) {
        this.balance += amount;
        console.log(this.balance);
        //metodo per versare. Amount è il parametro, il number fuori parentesi è il tipo di valore restituito
    }
    oneWithdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("credito insufficiente", amount);
        }
    }
}
class MotherAccount extends SonAccount {
    addInterest() {
        const interest = this.balance * 0.01;
        this.balance *= interest;
    }
}
const sonAccount = new SonAccount(); //creo un nuovo oggetto di tipo SonAccount, lo chiamo sonAccount.
sonAccount.oneDeposit(100);

const motherAccount = new MotherAccount();
motherAccount.oneDeposit(200);
motherAccount.oneWithdraw(50);
motherAccount.addInterest();
console.log("Saldo:", motherAccount.balance);

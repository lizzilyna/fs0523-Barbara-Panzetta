//costruisco le due classi. La prima contiene una proprietà, il saldo, e due metodi: prelievo e deposito. La seconda, che estende la prima, ne eredita proprietà e metodi ma contiene un ulteriore metodo: il calcolo dell'interesse (10%)

class SonAccount { //creo la classe che ha la proprietà di tipo numero balance, valore 0
    balance: number=0;
    oneDeposit(amount: number): void {
        this.balance+=amount;
        console.log(this.balance);
         
        //metodo per versare. Amount è il parametro, il number fuori parentesi è il tipo di valore restituito
    }
     
    oneWithdraw(amount: number): void {//metodo per prelevare
    if (amount<=this.balance) {
    this.balance-=amount;
    }else {
        console.log("credito insufficiente", amount);
     
    }
}
}

class MotherAccount extends SonAccount {
    addInterest(): void {
        const interest: number=this.balance *0.1;
        this.balance*=interest;
}
}

const sonAccount=new SonAccount();//creo un nuovo oggetto di tipo SonAccount, lo chiamo sonAccount.
sonAccount.oneDeposit(100);

const motherAccount=new MotherAccount();
motherAccount.oneDeposit(200);
motherAccount.oneWithdraw(50);
motherAccount.addInterest();
console.log("Saldo:", motherAccount.balance);


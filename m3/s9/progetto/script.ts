interface SIM {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;
    registroChiamate: {
        id: number;
        durata: number;
        dataOra: Date;
    } [];

    ricarica (euro: number): void;
    numero404 (): string;
    getNumeroChiamate (): number;
    chiamata (min: number):void;
    azzeraChiamate (): void;
    mostraRegistroChiamate ():void;
}


class Smartphone implements SIM {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;
    registroChiamate: {
        id: number;
        durata: number;
        dataOra: Date;
    } [];
    

constructor () {
    this.carica = 0;
    this.numeroChiamate = 0;
    this.costoMinuto = 0.20;
    this.registroChiamate = []
}

ricarica(euro: number): void {
    this.carica +=euro;
}

numero404(): string {
    return `Credito residuo: ${this.carica.toFixed(2)} euro`;
}

getNumeroChiamate(): number {
return this.numeroChiamate;
}

chiamata(min: number): void {
    
    const costoChiamata=min*this.costoMinuto;
    if (this.carica >= costoChiamata) {
        this.carica-=costoChiamata;
        this.numeroChiamate++;
    
        const dataOraChiamata = new Date();

            this.registroChiamate.push({
            id: this.numeroChiamate,
            durata:min,
            dataOra: dataOraChiamata

        });
    }else{
        console.log("Credito insufficiente.");
        
    }
    }

    azzeraChiamate(): void {
        this.numeroChiamate=0;
        this.registroChiamate= []
    }
    
    mostraRegistroChiamate(): void {
        console.log(`Registro chiamate:`);
         this.registroChiamate.forEach ((chiamata)=>{console.log(`ID:${chiamata.id}, durata: ${chiamata.durata.toFixed(1)} min, data e ora: ${chiamata.dataOra}`);
         })
    }
       
}

const telefonino=new Smartphone();

telefonino.ricarica (20);
telefonino.chiamata(5);
console.log(telefonino.numero404()); 
telefonino.chiamata(2);
console.log(telefonino.getNumeroChiamate());
console.log(telefonino.numero404());
telefonino.mostraRegistroChiamate()

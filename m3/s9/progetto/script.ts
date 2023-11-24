interface SmartphoneInterface {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;


    ricarica (euro: number): void;
    numero404 (): string;
    getNumeroChiamate (): number;
    chiamata (min: number):void;
    azzeraChiamate (): void;
}


class Smartphone implements SmartphoneInterface {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;

    registroChiamate: {
        id: number;
        durata: number;
        dataOra: string;
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
    return `Credito residuo: ${this.carica.toFixed(2)}`;
}

getNumeroChiamate(): number {
return this.numeroChiamate;
}

chiamata(min: number): void {
    
    const costoChiamata=min*this.costoMinuto;
    if (this.carica >= costoChiamata) {
        this.carica-=costoChiamata;
        this.numeroChiamate++;
    
        const dataOraChiamata = new Date().toLocaleString();
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
    
         
}


const telefonino=new Smartphone();

telefonino.ricarica (20);
telefonino.numero404();





abstract class LavoratoreAutonomo {
    codredd: number;
    redditoannuolordo: number;
    imponibile: number;


    constructor(codredd: number,redditoannuolordo:number, imponibile:number) 
    {
    this.codredd=codredd;
    this.redditoannuolordo=redditoannuolordo;
    this.imponibile=imponibile; //le categorie che dovremo utilizzare nella classe concreta dove implementiamo le funzioni.

    }

    abstract getTasseInps(): number;
    abstract getTasseIrpef(): number;
    abstract getRedditoAnnuoNetto(): number;
   
}

class LavoratoreAutonomoimp1 extends LavoratoreAutonomo {
    getTasseInps(): number {
        const aliquotaInps= 0.15;
        return this.imponibile*aliquotaInps
    }

    getTasseIrpef(): number {
        const aliquotaIrpef=0.20;
        return this.imponibile*aliquotaIrpef
    }

    getRedditoAnnuoNetto(): number {
        
        const tasseTotali=this.getTasseInps() +this.getTasseIrpef ()
        return this.redditoannuolordo-tasseTotali;

    }

}



const Gnagneo = new LavoratoreAutonomoimp1(1, 1000000, (1000000*0.8));
console.log(`Gnagneo fattura ${ Gnagneo.redditoannuolordo } di euro`);
console.log(`Gnagneo dà all'INPS ${ Gnagneo.getTasseInps() } euro`);
console.log(`Gnagneo paga ${ Gnagneo.getTasseIrpef() } euro di Irpef`);
console.log(`Per le sue spesucce, Gnagneo dispone di ${Gnagneo.getRedditoAnnuoNetto() } di euro l'anno`);



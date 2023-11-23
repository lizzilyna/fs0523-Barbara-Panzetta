class CapoDiAbbigliamento { //creaiamo la classe e poi all'interno il constructor che è prima di tutto UN METODO con tanto di parametri. La scrittura dei parametri  sintatticamente è uguale a quella delle classi solo che la parentesi non è graffa ma tonda e al posto dei punti e virgola c'è la virgola. Il "comando" delle funzione constructor si trova come sempre nelle graffe e inizializza le proprietà attraverso il "this." This.qualcosa = qualcosa è come dire assegna a this la proprietà "qualcosa" della classe che ho creato. In altre parole "guarda che il qualcosa di THIS è lo stesso qualcosa della classe"
    
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
    
        constructor(
        id: number, 
        codprod: number, 
        collezione: string,
        capo: string,
        modello: number,
        quantita: number,
        colore: string,
        prezzoivaesclusa: number,
        prezzoivainclusa: number,
        disponibile: string,
        saldo: number
        ) 
            {
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
            this.saldo = saldo
            }

            //ora i metodi riferiti alle proprietà inizializzate con this

            getsaldocapo(): number {
                return this.saldo;
            }

            getacquistocapo(): number {
                return this.prezzoivainclusa-this.getsaldocapo();


            }

            ottieniDatiDaApi() {
                const apiUrl ='http://localhost:4000/abbigliamento';
                fetch(apiUrl)
                    .then(response=>response.json())
                    .then (data=> {
                        console.log(data);
                        
                    })
                    }
    }

    const CapoDiAbbigliamento1 = new CapoDiAbbigliamento (1, 2522, 'Possession', 'Giuditta', 2902, 85, 'rosso', 120, 125, 'sì', 50)
    console.log(CapoDiAbbigliamento1.getacquistocapo())
    console.log(CapoDiAbbigliamento1.getsaldocapo());
    ;
    
        ;
    
function generaNumeroCasuale(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function determinaVincitore(giocatore1: number, giocatore2: number, numeroCasuale: number): string {
    
    const sceltaGiocatore1 = Math.abs(numeroCasuale - giocatore1);
    const sceltaGiocatore2 = Math.abs(numeroCasuale - giocatore2);
  
    if (giocatore1 === numeroCasuale && giocatore2 === numeroCasuale) {
      return `Entrambi i giocatori hanno indovinato ${numeroCasuale}!`;
    } else if (giocatore1 === numeroCasuale) {
      return `Il giocatore 1 ha indovinato ${numeroCasuale}!`;
    } else if (giocatore2 === numeroCasuale) {
      return `Il giocatore 2 ha indovinato ${numeroCasuale}!`;
    } else {
      if (sceltaGiocatore1 === sceltaGiocatore2) {
        return `Nessuno dei due ha azzeccato il numero, ma entrambi si sono avvicinati di uguale misura!`;
      } else if (sceltaGiocatore1 < sceltaGiocatore2) {
        return `Nessuno dei due ha azzeccato il numero, ma il giocatore 1 si è avvicinato di più.`;
      } else {
        return `Nessuno dei due ha azzeccato il numero, ma il giocatore 2 si è avvicinato di più.`;
      }
    }
  }
const giocatore1 = 5;
const giocatore2 = 10;


const numeroCasuale = generaNumeroCasuale(1, 100);


const risultato = determinaVincitore(giocatore1, giocatore2, numeroCasuale);


console.log(risultato);
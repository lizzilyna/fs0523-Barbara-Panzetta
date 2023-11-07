{class User {
   constructor (f,s,a,l){
    this.firstName = f;
    this.surname = s;
    this.age = a;
    this.location = l;
   }



ageConfronter (other) {
    if (this.age>other.age) {return 
   `${this.firstName} è più grande di ${other.firstName}`;}
   else {return `${other.firstName} è più grande di ${this.firstName}`;}     
}}

let Clara = new User ('Clara', 'Ciofi', 13, 'Casole')
let Barbara=new User ('Barbara', 'Panzetta', 47, 'Casole')

let confronto = Clara.ageConfronter (Barbara);
console.log(confronto);
}


{class Pet {
    constructor (pn, on, s, b) {
        this.petname = pn;
        this.ownername= on;
        this.species = s;
        this.breed=b;
    }
}}

ownerConfronter 

let Temple=new Pet ('Temple', 'Clara', 'gatto', 'Pugliese')
let Beato=new Pet ('Beato', 'Pino', 'gatto', 'Pugliese')
let Batto=new Pet ('Batto', 'Ciro', 'batto', 'leopard')
let Cassio=new Pet ('Cassio', 'Edoardo', 'gatto', 'Pugliese')


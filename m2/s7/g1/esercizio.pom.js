class User {
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



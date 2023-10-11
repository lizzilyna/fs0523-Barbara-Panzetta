
const elenco = document.getElementById("elenco");
const pulsante =document.getElementById("pulsante");
let elementoLista = document.createElement("li");
let checkbox = document.createElement("input");
checkbox.type = "checkbox";

pulsante.addEventListener("click", function() {
        
        const testo = document.createTextNode("Nuovo elemento");

        document.createElement("input");
        checkbox.type = "checkbox";
        
    
        
  elementoLista.appendChild(checkbox);
  elementoLista.appendChild(testo);
  elementoLista.classList.add("unchecked");
  elenco.appendChild(elementoLista);
  
});

checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        elementoLista.classList.remove("unchecked");
        elementoLista.classList.add("checked");
    } else {
        elementoLista.classList.remove("checked");
        elementoLista.classList.add("unchecked");
    }
});








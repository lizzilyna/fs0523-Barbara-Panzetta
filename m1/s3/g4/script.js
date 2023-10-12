const tabellone = document.querySelector('.tabellone');
for (let i = 1; i <= 76; i++) {
    const cella = 
    document.createElement('div');
    cella.textContent = i;
    cella.classList.add('cella');
    tabellone.appendChild(cella);
}



const estrazione = document.getElementById('estrazione');
estrazione.addEventListener('click', function () {
    const numeroEStratto=Math.floor(Math.random()*76)+1;
 

 const celle = document.querySelectorAll('.cella');
 celle[numeroEStratto-1].classList.add('evidenziato');

});


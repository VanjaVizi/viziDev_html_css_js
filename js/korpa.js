function prikaziKorpu() {

    const korpa = JSON.parse(localStorage.getItem('korpa')) || [];
    const teloTabele = document.querySelector('tbody');
    teloTabele.innerHTML = "";  

    korpa.forEach((proizvod, index) => {
        const red = document.createElement('tr');
        red.innerHTML = `            
            <td class="nazivproizvodacelija"><img src="${proizvod.slika}" alt="${proizvod.naziv}">${proizvod.naziv}</td>
            <td>${proizvod.novaCena} RSD</td>
            <td><input class="kolicna" data-index="${index}"  type="number" name="" id="" min="0" value="1"></td>
            <td class="ukupnaCena">${proizvod.novaCena} RSD</td>
           <td><button class="obrisi" data-index="${index}"><i class="fa-solid fa-trash"></i></button></td>
        `;
        teloTabele.appendChild(red);
    });
 
    document.querySelectorAll('.obrisi').forEach((dugme) => {
        dugme.addEventListener('click', () => {
            const index = dugme.getAttribute('data-index');
            obrisiIzKorpe(index);
        });
    }); 

    document.querySelectorAll('.kolicna').forEach((input) => {
        input.addEventListener('input', () => {
            const index = input.getAttribute('data-index');
            const kolicina = parseInt(input.value) || 0; // Ako je prazno, postavi na 0
            izracunajUkupnuCenu(index, kolicina);
        });
    });

}
function obrisiIzKorpe(index) {
    if(!confirm("Da li ste sigurni da želite da obrišete proizvod iz korpe?")) {
        return;  
    }
    const korpa = JSON.parse(localStorage.getItem('korpa')) || [];
    korpa.splice(index, 1); // Ukloni proizvod iz korpe
    localStorage.setItem('korpa', JSON.stringify(korpa)); // Ažuriraj lokalnu skladište
    prikaziKorpu(); // Ponovo prikaži korpu      
}
function izracunajUkupnuCenu(index, kolicina) {
    const korpa = JSON.parse(localStorage.getItem('korpa')) || [];
    const proizvod = korpa[index];
    const ukupnaCena = proizvod.novaCena * kolicina;
    const ukupneCeneElement = document.querySelectorAll('.ukupnaCena');
    const nasaCelija = ukupneCeneElement[index];
    nasaCelija.textContent = `${ukupnaCena} RSD`;

    //document.querySelectorAll('.ukupnaCena')[index].textContent = `${ukupnaCena} RSD`;
}

//prikaziKorpu();
window.addEventListener("DOMContentLoaded", prikaziKorpu);
const proizvodi = [
    {
        id:1,
        slika:"https://as1.ftcdn.net/v2/jpg/06/92/12/82/1000_F_692128216_xUPMfetAt5gmKPh6K0nXXkfmgtUffvTA.jpg",
        naziv: "Kugla sladoleda od cokolade",
        opis: "Kugla sladoleda od cokolade sa komadicima cokolade",
        staraCena: 150,
        novaCena: 120,
         
    },
    {
        id:2,
        slika:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhWcCJbUESapVgTJ6gM26zEg_Kx3UEDbYpg&s",
        naziv: "Kugla sladoleda od vanile",
        opis: "Kugla sladoleda od vanile sa komadicima cokolade",
        staraCena: 150,
        novaCena: 120,
         
    },
    {
        id:3,
        slika:"https://as1.ftcdn.net/v2/jpg/06/92/12/82/1000_F_692128216_xUPMfetAt5gmKPh6K0nXXkfmgtUffvTA.jpg",
        naziv: "Kugla sladoleda od jagode",
        opis: "Kugla sladoleda od cokolade sa komadicima cokolade",
        staraCena: 150,
        novaCena: 120,
         
    },
    {
        id:4,
        slika:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhWcCJbUESapVgTJ6gM26zEg_Kx3UEDbYpg&s",
        naziv: "Kugla sladoleda od karamele",
        opis: "Kugla sladoleda od vanile sa komadicima cokolade",
        staraCena: 150,
        novaCena: 120,
         
    },


];




function ucitajProizvode() {
    const sviProizvodiDiv= document.getElementById("sviproizvodi");
    sviProizvodiDiv.innerHTML = ""; // Očistimo div pre nego što dodamo nove proizvode

    proizvodi.forEach(proizvod => {
        const proizvodDiv = document.createElement("div");
        proizvodDiv.classList.add("proizvod");

        proizvodDiv.innerHTML = `
              <div class="proizvodheder">
                <img src="${proizvod.slika}" alt="${proizvod.naziv}">
             </div>
            <p class="nazivproizvoda"> <strong>${proizvod.naziv} </strong></p>
            <p>${proizvod.opis}</p>
            <i class="fa-solid fa-tag"></i>
            <span class="staracena">Stara cena: ${proizvod.staraCena} RSD</span>
            <span class="novacena">Nova cena: ${proizvod.novaCena} RSD</span>
            <button class="dodaj"> <i class="fa-solid fa-cart-plus"></i>  Dodaj u korpu</button>
        `;

        sviProizvodiDiv.appendChild(proizvodDiv);
    });




}


window.addEventListener("DOMContentLoaded", ucitajProizvode);











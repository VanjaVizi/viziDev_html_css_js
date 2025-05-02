/////// 10- cokolada

/// 1010
/// 1020
//  1030


////20
//2010
//2020


const proizvodi = [
    {
        id:10,
        slika:"https://as1.ftcdn.net/v2/jpg/06/92/12/82/1000_F_692128216_xUPMfetAt5gmKPh6K0nXXkfmgtUffvTA.jpg",
        naziv: "Kugla sladoleda od cokolade",
        opis: "Kugla sladoleda od cokolade sa komadicima cokolade",
        staraCena: 150,
        novaCena: 120,
         
    },
    {
        id:20,
        slika:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhWcCJbUESapVgTJ6gM26zEg_Kx3UEDbYpg&s",
        naziv: "Kugla sladoleda od vanile",
        opis: "Kugla sladoleda od vanile sa komadicima cokolade",
        staraCena: 150,
        novaCena: 120,
         
    },
    {
        id:30,
        slika:"https://as1.ftcdn.net/v2/jpg/06/92/12/82/1000_F_692128216_xUPMfetAt5gmKPh6K0nXXkfmgtUffvTA.jpg",
        naziv: "Kugla sladoleda od jagode",
        opis: "Kugla sladoleda od cokolade sa komadicima cokolade",
        staraCena: 150,
        novaCena: 120,
         
    },
    {
        id:40,
        slika:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhWcCJbUESapVgTJ6gM26zEg_Kx3UEDbYpg&s",
        naziv: "Kugla sladoleda od karamele",
        opis: "Kugla sladoleda od vanile sa komadicima cokolade",
        staraCena: 150,
        novaCena: 120,
         
    },


];

function dodajUkorpu(index) {

    let korpa = JSON.parse(localStorage.getItem("korpa")) || [];
    korpa.push(proizvodi[index]);

    localStorage.setItem("korpa", JSON.stringify(korpa));
    alert("Proizvod je dodat u korpu!");

}
function ucitajProizvode() {
    const sviProizvodiDiv= document.getElementById("sviproizvodi");
    sviProizvodiDiv.innerHTML = ""; // Očistimo div pre nego što dodamo nove proizvode

    proizvodi.forEach((proizvod,index) => {
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
            <button class="dodaj" data-id= ${index}> <i class="fa-solid fa-cart-plus"></i>  Dodaj u korpu</button>
        `;

        sviProizvodiDiv.appendChild(proizvodDiv);
    });

    const dugmici = document.querySelectorAll(".dodaj");
    dugmici.forEach((dugme) => {
        dugme.addEventListener("click", () => {
            const index =  dugme.getAttribute("data-id");
           dodajUkorpu(index);
        });
    });


}


window.addEventListener("DOMContentLoaded", ucitajProizvode);











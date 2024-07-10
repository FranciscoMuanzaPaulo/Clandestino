const map = L.map('map').setView([-8.82714, 13.24387], 13); // Ajuste o zoom para 13 ou outro valor adequado

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18, // Você pode ajustar o maxZoom para 18
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const coords = [[-8.83523, 13.23311], 
                [-8.8117, 13.2426], 
                [-8.81456, 13.23517], 
                [-8.80368, 13.24228], 
                [-8.81609, 13.2346],
                [-8.81801, 13.23014],
                [-8.91612, 13.19661],
                [-8.81958, 13.21696],
                [-8.81539, 13.23698],
                [-8.80412, 13.24306],
                [-8.85814, 13.3201]];

const rent = ['280.000 Kz ', '347.000 Kz ', '347.500 Kz', '287.000 Kz', '241.000 Kz ', '170.000 kz', '338.778 Kz', '320.655 Kz', '322.581 Kz ', '200.000 Kz', '2.500 Kz'];

// Areas
const areas = ["30m", "20m", "20m", "20m", "20m", "20m", "20m", "20m", "20m", "20m", "10m"];

// Quartos
const quartos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Outside
const images = [
    "Hotel Alvaladea/283181181.jpg", 
    "Hotel Alvaladea/intercont.jpg", 
    "Hotel Alvaladea/epic.jpg" ,
    "Hotel Alvaladea/presidente.jpg", 
    "Hotel Alvaladea/skyna.jpg", 
    "Hotel Alvaladea/continental.jpg",
    "Hotel Alvaladea/hcta.jpg", 
    "Hotel Alvaladea/baia.jpg" , 
    "Hotel Alvaladea/tropico.jpg", 
    "Hotel Alvaladea/diamante.jpg",
    "Hotel Alvaladea/boa-entrada.jpg"
];

var apart1 = document.querySelector('#apart1');
var apart2 = document.querySelector('#apart2');
var apart3 = document.querySelector('#apart3');
var apart4 = document.querySelector('#apart4');
var apart5 = document.querySelector('#apart5');
var apart6 = document.querySelector('#apart6');
var apart7 = document.querySelector('#apart7');
var apart8 = document.querySelector('#apart8');
var apart9 = document.querySelector('#apart9');
var apart10 = document.querySelector('#apart10');
var apart11 = document.querySelector('#apart11');

var apartamentos = [apart1, apart2, apart3, apart4, apart5, apart6, apart7, apart8, apart9, apart10, apart11];

for (let i = 0; i < coords.length; i++) {
    // Marcadores
    let marker = L.marker(coords[i]).addTo(map);

    // Labels
    let tooltip = L.tooltip({
        permanent: true,
    }).setContent(rent[i]);
    marker.bindTooltip(tooltip);

    // Popups
    let popupContent = `
        <h4>Area: ${areas[i]} <br> quartos: ${quartos[i]}</h4>
        <img src="${images[i]}" style="height: 100px;">
    `;
    let popup = L.popup({
        closeOnClick: true
    }).setContent(popupContent);
    marker.bindPopup(popup);

    // Zoom in fly / fly to
    apartamentos[i].addEventListener("mouseover", () => {
        map.flyTo(coords[i], 15);
    });
}

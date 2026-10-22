const API_URL = 'https://api-generator.retool.com/8HaOQy/data'

async function init() {
    const response = await fetch(API_URL);
    console.log('Header-ok letoltve');

    const data = await response.json();

    const main = document.getElementById('table-body');
    for(const kocsi of data){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${kocsi.Modell}</td>
            <td>${kocsi.Szin}</td>
            <td>${kocsi.Evjarat}</td>
        `;
        main.appendChild(row);

        if(kocsi.Szin === 'Piros'){
            row.style.backgroundColor = 'lightcoral';
        }
        else if(kocsi.Szin === 'Kek'){
            row.style.backgroundColor = 'lightblue';
        }
        else {
            row.style.backgroundColor = 'lightgreen';
        }
    }
    console.log('Tartalom letoltve');
}
init()
console.log('Betoltott');
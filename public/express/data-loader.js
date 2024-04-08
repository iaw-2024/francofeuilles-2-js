var datos = [
    { criptomoneda: "Bitcoin", precio: "$70,000", cantidad: 0.5, direccion: "1AbcdeFgHijKlmnOpQrStUvWxYz" },
    { criptomoneda: "Ethereum", precio: "$3,500", cantidad: 2, direccion: "3AbcdeFgHijKlmnOpQrStUvWxYz" },
    { criptomoneda: "BNB", precio: "$500", cantidad: 2.5, direccion: "4AbcdeFhHijKJmnOpQrStUvWxYz" },
    { criptomoneda: "Ethereum", precio: "$3,200", cantidad: 5, direccion: "3AbcdeFgHijKlmnOpQrStUvWxYz" },
    { criptomoneda: "Litecoin", precio: "$150", cantidad: 3, direccion: "5AbcdeFgHijKlmnOpQrStUvWxYz" },
    { criptomoneda: "Ripple", precio: "$1.50", cantidad: 100, direccion: "6AbcdeFgHijKlmnOpQrStUvWxYz" },
    { criptomoneda: "Cardano", precio: "$2.00", cantidad: 50, direccion: "7AbcdeFgHijKlmnOpQrStUvWxYz" }
];

function cargarDatos() {
    var tbody = document.querySelector('#cryptoTable tbody');

    datos.forEach(function(item) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.criptomoneda}</td>
            <td>${item.precio}</td>
            <td>${item.cantidad}</td>
            <td>${item.direccion}</td>
        `;
        tbody.appendChild(row);
    });
}

window.onload = cargarDatos;

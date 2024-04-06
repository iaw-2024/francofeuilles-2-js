// Arreglo de datos
var datos = [
    { criptomoneda: "Bitcoin", precio: "$70,000", cantidad: 0.5, direccion: "1AbcdeFgHijKlmnOpQrStUvWxYz" },
    { criptomoneda: "Ethereum", precio: "$3,500", cantidad: 2, direccion: "3AbcdeFgHijKlmnOpQrStUvWxYz" },
    { criptomoneda: "BNB", precio: "$500", cantidad: 2.5, direccion: "4AbcdeFhHijKJmnOpQrStUvWxYz" },
    { criptomoneda: "Ethereum", precio: "$3,200", cantidad: 5, direccion: "3AbcdeFgHijKlmnOpQrStUvWxYz" }
];

// Función para cargar los datos en la tabla
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

// Llamamos a la función para cargar los datos al cargar la página
window.onload = cargarDatos;

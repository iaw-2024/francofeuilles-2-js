function cargarDatosEnTabla(compras) {
    var tbody = document.querySelector('#cryptoTable tbody');
    limpiarTabla(tbody); // Limpiar la tabla antes de agregar nuevos datos
    compras.forEach(compra => agregarCompraATabla(compra, tbody));
}

function agregarCompraATabla(compra, tbody) {
    var newRow = document.createElement('tr');
    agregarCelda(newRow, compra.criptomoneda);
    agregarCelda(newRow, "$" + compra.precio);
    agregarCelda(newRow, compra.cantidad);
    agregarCelda(newRow, compra.direccion);
    tbody.appendChild(newRow);
}

function agregarCelda(fila, contenido) {
    var cell = document.createElement('td');
    cell.textContent = contenido;
    cell.classList.add("p-3", "text-center", "align-middle");
    fila.appendChild(cell);
}

function limpiarTabla(tbody) {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    fetch('/cliente_servidor/data')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudieron obtener los datos.');
            }
            return response.json();
        })
        .then(compras => {
            if (Array.isArray(compras)) {
                cargarDatosEnTabla(compras);
            } else {
                throw new Error('Los datos recibidos no son válidos.');
            }
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
});

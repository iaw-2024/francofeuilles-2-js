function cargarDatosEnTabla(compras) {
    // Obtener la tabla
    var cryptoTable = document.getElementById('cryptoTable');
    var tbody = cryptoTable.getElementsByTagName('tbody')[0];
    
    iterarCompras(compras, tbody);
}

function iterarCompras(compras, tbody) {
    compras.forEach(function(compra) {
        agregarCompraATabla(compra, tbody);
    });
}

function agregarCompraATabla(compra, tbody) {
    // Crear una nueva fila de tabla
    var newRow = document.createElement('tr');
    
    // Agregar celdas para cada propiedad
    agregarCelda(newRow, compra.criptomoneda);
    agregarCelda(newRow, "$" + compra.precio);
    agregarCelda(newRow, compra.cantidad);
    agregarCelda(newRow, compra.direccion);
    
    // Agregar la fila a la tabla
    tbody.appendChild(newRow);
}

function agregarCelda(fila, contenido) {
    var cell = document.createElement('td');
    cell.textContent = contenido;
    cell.classList.add("p-3", "text-center", "align-middle");
    fila.appendChild(cell);
}

// Esperar a que el documento esté cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    // Verificar si el arreglo 'compras' está definido en el contexto global
    if (typeof compras !== 'undefined') {
        cargarDatosEnTabla(compras);
    } else {
        console.error("El arreglo 'compras' no está definido en el contexto global.");
    }
});

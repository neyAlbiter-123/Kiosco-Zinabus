// ========================================
// CONTADORES DE PASAJEROS
// ========================================

let pasajeros = {
    adulto: 0,
    inapam: 0,
    nino: 0
};


function cambiarCantidad(tipo, cambio) {

    // Aumentar o disminuir la cantidad
    pasajeros[tipo] += cambio;


    // Evitar números negativos
    if (pasajeros[tipo] < 0) {
        pasajeros[tipo] = 0;
    }


    // Actualizar el número que aparece en pantalla
    document.getElementById(`cant-${tipo}`).textContent = pasajeros[tipo];

}
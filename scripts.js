// Lista de slots de equipo que queremos mostrar
const gearSlots = ["Casco", "Pechera", "Guantes", "Arma", "Collar", "Anillo 1", "Botas", "Arma Der"];

document.addEventListener('DOMContentLoaded', () => {
    inicializarEquipo();
});

function inicializarEquipo() {
    const container = document.getElementById('gear-slots');
    container.innerHTML = ''; // Limpiar contenedor

    gearSlots.forEach(slotName => {
        const div = document.createElement('div');
        div.className = 'slot';
        div.id = 'slot-' + slotName.toLowerCase().replace(' ', '');
        div.innerText = slotName;
        div.onclick = () => abrirSelector(slotName);
        container.appendChild(div);
    });
}

function abrirSelector(slotName) {
    console.log("Abriendo selector para: " + slotName);
    document.getElementById('modal-overlay').classList.remove('hidden');
}

function cerrarSelector() {
    document.getElementById('modal-overlay').classList.add('hidden');
}

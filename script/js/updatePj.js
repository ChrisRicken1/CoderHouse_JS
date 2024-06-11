//Funcion de transformar la primer letra en mayuscula
function capitalizeFirstLetter(string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}


//Funcion repetida del script
function getCharacter() {
    // Obtener el JSON del localStorage
    const characterJSON = localStorage.getItem('character');
    // Verificar si hay algo almacenado bajo la clave 'character'
    if (characterJSON) {
        // Convertir el JSON a un objeto JavaScript
        const character = JSON.parse(characterJSON);
        return character;
    } else {
        // Si no hay nada almacenado bajo la clave 'character'
        return null;
    }
}

function updatePJ() {
    const character = getCharacter();
    if (character) {
        const characterNick = character.nombre;
        const characterClass = character.clase;
        //Seteo las estadisticas y nombres del personaje segun la clase
        const characterNickElement = document.getElementById('nick');
        const characterClassElement = document.getElementById('clase');
        document.getElementById('vitalidad').textContent = character.stats.vitalidad;
        document.getElementById('mana').textContent = character.stats.mana;
        document.getElementById('fuerza').textContent = character.stats.fuerza;
        document.getElementById('agilidad').textContent = character.stats.agilidad;
        document.getElementById('inteligencia').textContent = character.stats.inteligencia;
        document.getElementById('suerte').textContent = character.stats.suerte;
        document.getElementById('puntosDisponibles').textContent = character.skillpoints;
        characterNickElement.textContent = characterNick;
        characterClassElement.textContent = capitalizeFirstLetter(characterClass);
        
    }
}

function main(){
    document.addEventListener('DOMContentLoaded', function() {
        updatePJ();
    });    
}

main();
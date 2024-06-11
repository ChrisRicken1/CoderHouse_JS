function characterCreation() {
    //document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('createCharacterForm');
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío del formulario
            const character = {
                nombre: document.getElementById('characterName').value,
                clase: document.getElementById('characterClass').value,
                level: 1,
                stats: {},
                skillpoints: 10,
            }
            // Asignar estadísticas basadas en la clase del personaje
            if (character.clase === 'guerrero') {
                character.stats = {
                    vitalidad: 15,
                    mana: 5,
                    fuerza: 10,
                    agilidad: 10,
                    inteligencia: 5,
                    suerte: 5,
                };
            } else if (character.clase === 'arquero') {
                character.stats = {
                    vitalidad: 10,
                    mana: 10,
                    fuerza: 5,
                    agilidad: 10,
                    inteligencia: 10,
                    suerte: 5,
                };
            } else if (character.clase === 'mago') {
                character.stats = {
                    vitalidad: 5,
                    mana: 15,
                    fuerza: 5,
                    agilidad: 5,
                    inteligencia: 15,
                    suerte: 5,
                };
            }
            // Almacenar el personaje en localStorage
            setCharacter(character);
            
            localStorage.setItem('redirected', 'true');

            window.location.href = 'D:/CoderHouse_JS/html/personaje1.html';
            });
    //});
}

function getCharacter() {
    // Obtener el JSON del localStorage
    const characterJSON = localStorage.getItem('character');

    // Verificar si hay algo almacenado bajo la clave 'character'
    if (characterJSON) {
        // Convertir el JSON a un objeto JavaScript
        const character = JSON.parse(characterJSON);
        return character;
    } else {
        return null;
    }
}

function setCharacter(character){
    localStorage.setItem('character', JSON.stringify(character));
}


function main() {
    document.addEventListener('DOMContentLoaded', function() {
        characterCreation();
    });
}

main();

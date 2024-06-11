//Actualizar la vista de las estadisticas
function updateStats(character){
    for (const stat in character.stats){
        document.getElementById(stat).textContent = character.stats[stat];
    }
    document.getElementById('puntosDisponibles').textContent = character.skillpoints;
}

//Incrementar una estadistica
function increment(stat){
    let character = getCharacter();
    if(character.skillpoints > 0){
        character.stats[stat]++;
        character.skillpoints--;
        setCharacter(character);
        updateStats(character);
    }
}


//Decrementar una estadistica
function decrement(stat){
    let character = getCharacter();
    if(character.stats[stat] > 0){
        character.stats[stat]--;
        character.skillpoints++;
        setCharacter(character);
        updateStats(character);
    }
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

function main(){
    document.addEventListener('DOMContentLoaded', function() {
        let character = getCharacter();
        if(character){
            updateStats(character);
        }
    });    
}

main();
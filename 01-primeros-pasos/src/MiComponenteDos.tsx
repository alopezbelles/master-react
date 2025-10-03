// import React from 'react';

function MiComponenteDos({nombre, edad}) {

    let mascotas = {
        perro: "Leyre",
        gato: "Troya"
    }
    return (
        <div>
            <p>Me llamo {nombre} y tengo {edad}</p>
            <p>Mi perro se llama {mascotas.perro} y mi gato {mascotas.gato}</p>
        </div>
    );
}

export default MiComponenteDos;

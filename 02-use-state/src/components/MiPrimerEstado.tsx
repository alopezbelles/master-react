
import { useState } from "react";

function MiPrimerEstado() {

    // PROBLEMA: ESTO NO FUNCIONA 👇
    // let nombre = "Alejandro López";
    // const cambiarNombre = e => {
    //     nombre = "Otro nombre";
    // }

    // SOLUCIÓN: ESTO SÍ FUNCIONA 👇
    const [nombre, setNombre] = useState("Alejandro López");

    const cambiarNombre = (e: React.ChangeEvent<HTMLInputElement>, nombreFijo: string) => {
        setNombre(nombreFijo);
    }

    return (
        <div>
            <h3>Componente: Mi primer estado</h3>
            <strong>{nombre}</strong>
            <button onClick={() => {setNombre("Francisco Peña")}}>Cambiar</button>
            <hr />
            <input type="text" onChange={e => cambiarNombre(e, e.target.value)} placeholder="Cambia el nombre" value={nombre}/>
            
        </div>
    );
}

export default MiPrimerEstado;
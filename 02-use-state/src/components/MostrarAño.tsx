
import { useState } from "react";

interface Props {
    año: number;
}

function MostrarAño({ año }: Props) {
    const [añoActual, setAñoActual] = useState(año);
    
    const sumarAño = () => {
        setAñoActual(añoActual + 1);
    }

    const restarAño = () => {
        setAñoActual(añoActual - 1);
    }

    const cambiarAño = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAñoActual(parseInt(e.target.value) || 0);
    }
    
    return (
        <div>
            <h2>Estamos en el año: {añoActual}</h2>
            <button onClick={sumarAño}>Sumar año</button>
            <br />
            <button onClick={restarAño}>Restar año</button>
            <br />
            <input type="text" onChange={cambiarAño} placeholder="Introduce el año manualmente" />
        </div>
    );
}

export default MostrarAño;
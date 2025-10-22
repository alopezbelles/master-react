import { useEffect } from "react";

function AvisoComponent() {

    useEffect(() => {
        alert("El componente Aviso Component está cargado");

        return () => {
            alert("El componente Aviso Component se ha desmontado");
        }
    }, []);

    return (
        <div>
            <h3>¡Saludos, Victor!</h3>
            {/* <button>Mostrar alerta</button> */}
        </div>
    );
}

export default AvisoComponent;
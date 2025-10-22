import { useEffect, useState } from "react";
import AvisoComponent from "./AvisoComponent";

function PruebasComponent() {
  const [usuario, setUsuario] = useState("Alejandro López");
  const [contador, setContador] = useState(0);

  const modUsuario = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario(e.target.value);
  };

//   Solo se ejecuta una vez, por el []
  useEffect(() => {
    console.log("El componente se ha cargado por primera vez");
  }, []);

//   Solo se ejecuta cada vez que usuario cambia
  useEffect(() => {
    console.log("El componente se ha cargado porque ha habido un cambio en usuario");
    setContador(contador + 1);
  }, [usuario]);

  return (
    <div>
      <h1>El efecto - useEffect</h1>
      <h2>{usuario}</h2>
      <h3>{contador}</h3>
      <p>
        <input
          type="text"
          onChange={modUsuario}
          placeholder="Cambia el nombre"
        />
      </p>
      { usuario == "Victor" && <AvisoComponent />}
    </div>
  );
}

export default PruebasComponent;

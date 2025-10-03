import React from 'react';

interface Ficha {
  altura: number;
  peso: number;
}

interface MiComponenteCuatroProps {
  nombre: string;
  apellidos?: string;
  ficha: Ficha;
}

function MiComponenteCuatro({ nombre, apellidos, ficha }: MiComponenteCuatroProps) {
  return (
    <div>
      <h1>Comunicación entre componentes:</h1>
      <ul>
        <li>{nombre}</li>
        <li>{apellidos}</li>
        <li>{ficha.altura}</li>
        <li>{ficha.peso}</li>
      </ul>
    </div>
  );
}

export default MiComponenteCuatro;
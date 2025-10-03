// import React from 'react';

function MiComponenteTres() {
  let libros = ["El Quijote", "1984", "Cien Años de Soledad"];
  return (
    <div>
      <p>Mis libros favoritos son:</p>
      {libros.length > 0 ? (
        <ul>
          {libros.map((libro, indice) => (
            <li key={indice}>{libro}</li>
          ))}
        </ul>
      ) : (
        <p>No hay libros favoritos.</p>
      )}
    </div>
  );
}
export default MiComponenteTres;

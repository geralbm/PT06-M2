import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
    <div>
       <input type="texto"/>
       <button onClick={() => onSearch ('Agregando ciudad...')}>Agregar</button>

    </div>
  )
};
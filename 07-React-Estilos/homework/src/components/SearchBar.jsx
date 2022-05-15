import React from 'react';
import s from './Search.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
    <div className={s.container}>
       <input type="texto" placeholder='Ingrese ciudad...'/>
       <button className={s.btnSearch} onClick={() => onSearch ('Agregando ciudad...')}>Agregar</button>

    </div>
  )
};
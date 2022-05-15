import React from 'react';
import s from  './OtroProduct.css';


function OtroProduct(props) {
  console.log('esto es s:', s);
  return (
    <div className={`${s.producto} ${s.hola}`}>
      <h3 className={s.hola}>{props.title}</h3>
      <p>{props.price}</p>
    </div>
  );
}
export default OtroProduct;
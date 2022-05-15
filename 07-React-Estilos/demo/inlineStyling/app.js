import React from 'react';
import { render } from 'react-dom';
//import './app.css'
import Producto from './src/components/Product.jsx';
import OtroProduct from './src/components/OtroProduct.jsx';

render(
<>
    <Producto title="Prueba" price={400}/>
    <OtroProduct title="Prueba" price={400}/>
</>
, document.getElementById('app'));

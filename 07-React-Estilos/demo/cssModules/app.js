import React from 'react';
import { render } from 'react-dom';
import Producto from './src/components/Product.jsx';
import OtroProduct from './src/components/OtroProduct.jsx';
import './src/global.gcss';

render(
 <>
    <Producto title="Prueba" price={400}/>
    <OtroProduct title="Prueba" price={400}/>
</>
, document.getElementById('app'));

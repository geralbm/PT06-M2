import React from 'react';

const divStyle = {
    margin: '40px',
    border: '5px solid green',
  };
  const pStyle = {
    fontSize: '45px',
    textAlign: 'center',
  };
  

function OtroProduct (props){
    return (
        <div style={divStyle}>
          <h1>H1</h1>
          <h3>{props.title}</h3>
          <p style={pStyle}>{props.price}</p>
        </div>
      );
}

export default OtroProduct;

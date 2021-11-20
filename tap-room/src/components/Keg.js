import React from "react";
import PropTypes from 'prop-types';

function Keg(props) {
  const kegCardStyle = {
    width: '275px',
    height: '250px',
    padding: '10px',
    margin: '10px',
    border: '1px grey solid',
    float: 'left'
  }
  return (
    <React.Fragment>
      <div style={kegCardStyle}>
        <h2>{props.name}</h2>
        <hr/>
        <p><strong>Brand:</strong> {props.brand}</p>
        <p><strong>Price:</strong> ${props.price}</p>
        <p><strong>Price per pint:</strong> ${props.pintPrice}</p>
        <p><strong>Alcohol Content:</strong> {props.alcoholContent}%</p>
      </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  pintPrice: PropTypes.number,
  alcoholContent: PropTypes.number
}

export default Keg;
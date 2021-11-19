import React from "react";
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <div>
        <h1>{props.name}</h1>
        <hr/>
        <p>{props.brand}</p>
        <p>{props.price}</p>
        <p>{props.pintPrice}</p>
        <p>{props.alcoholContent}</p>
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
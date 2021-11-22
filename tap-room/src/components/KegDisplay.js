import React from "react";
import PropTypes from 'prop-types';

function KegDisplay(props) {
  const kegDisplayStyle = {
    border: '1px solid black',
    display: 'inline-block',
    width: '100%',
    height: '700px'
  }

  const paragraphStyle = {
    fontSize: '40px'
  }
  
  const {keg} = props
  if (keg.pintsLeft === 0) {
    return (
      <React.Fragment>
        <div style={kegDisplayStyle}>
          <h1>{keg.name}</h1>
          <hr />
          <p style={paragraphStyle}><strong>Brand:</strong> {keg.brand}</p>
          <p style={paragraphStyle}><strong>Price:</strong> ${keg.price}</p>
          <p style={paragraphStyle}><strong>Price per pint:</strong> ${keg.pintPrice}</p>
          <p style={paragraphStyle}><strong>Alcohol Content:</strong> {keg.alcoholContent}%</p>
          <p style={paragraphStyle}><strong>Pints left:</strong> Out of Stock</p>
        </div>
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <div style={kegDisplayStyle}>
        <h1>{keg.name}</h1>
        <hr />
        <p style={paragraphStyle}><strong>Brand:</strong> {keg.brand}</p>
        <p style={paragraphStyle}><strong>Price:</strong> ${keg.price}</p>
        <p style={paragraphStyle}><strong>Price per pint:</strong> ${keg.pintPrice}</p>
        <p style={paragraphStyle}><strong>Alcohol Content:</strong> {keg.alcoholContent}%</p>
        <p style={paragraphStyle}><strong>Pints left:</strong> {keg.pintsLeft}</p>
        <button style={paragraphStyle} onClick={() => props.onSellPintClicked(keg.id)}>Sell Pint</button>
      </div>
    </React.Fragment>
  )
}

KegDisplay.propTypes = {
  keg: PropTypes.object,
  onSellPintClicked: PropTypes.func
}

export default KegDisplay;
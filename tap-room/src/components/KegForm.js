import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function KegForm(props) {

  function handleNewKegFromSubmission(e) {
    e.preventDefault();
    props.onNewKegCreation({name: e.target.name.value, brand: e.target.brand.value, price: e.target.price.value, pintPrice: e.target.pintPrice.value, alcoholContent: e.target.alcoholContent.value, pintsLeft: 124, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFromSubmission}>
        <input
        type='text'
        name='name'
        placeholder='Keg Name' />
        <br/>
        <br/>
        <input
        type='text'
        name='brand'
        placeholder='Brand Name' />
        <br/>
        <br/>
        <input
        type='number'
        name='price'
        placeholder='Keg Price'
        min='0' />
        <br/>
        <br/>
        <input
        type='number'
        name='pintPrice'
        placeholder='Price per pint'
        min='0' />
        <br/>
        <br/>
        <input
        type='number'
        name='alcoholContent'
        placeholder='Alcohol Content'
        min='0' />
        <br/>
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}

KegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default KegForm;
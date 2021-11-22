import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      <div>
        {props.kegList.map((keg) => 
          <Keg
          whenDetailsClicked={props.onIndividualKegClicked}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          pintPrice={keg.pintPrice}
          alcoholContent={keg.alcoholContent}
          key={keg.id}
          id={keg.id}
          />
        )}
      </div>
    </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onIndividualKegClicked: PropTypes.func
};

export default KegList;
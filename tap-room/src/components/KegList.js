import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      <div>
        {props.kegList.map((keg, index) => 
          <Keg
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          pintPrice={keg.pintPrice}
          alcoholContent={keg.alcoholContent}
          key={index}
          />
        )}
      </div>
    </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;
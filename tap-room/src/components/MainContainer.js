import React from "react";

function MainContainer(props) {
  const containerStyle = {
    margin: '2px',
    marginRight: '2px',
    position: 'static',
    display: 'block'
  }
  return (
    <React.Fragment>
      <div style={containerStyle}>
        <h1>{props.title}</h1>
        <hr />
        {props.contentView}
      </div>
    </React.Fragment>
  )
}

export default MainContainer;
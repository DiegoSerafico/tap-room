import React from "react";

function Header() {
  const myStyledHeaderStyles = {
    backgroundColor: 'azure',
    border: '1px solid black',
    textAlign: 'center',
    margin: '2px',
    borderRadius: '5px'
  }
  return (
    <div style={myStyledHeaderStyles}>
      <h1>Tap Room</h1>
    </div>
  );
}

export default Header;
import React from "react";
import '../css/NavBar.css'

function NavBar(props) {
  const navBarStyle = {
    width: '99%',
    padding: '3px',
    textAlign: 'center',
    boderRadius: '2px',
    background: 'grey'
  }

  return (
    <div style={navBarStyle}>
      <div>
        <button class='navBarButton' onClick={props.onMenuClick}>Menu</button>
      </div>
      <div>
        <button class='navBarButton' onClick={props.onAddKegClick}>Add Bracelet</button>
      </div>
    </div>
  )
}

export default NavBar;
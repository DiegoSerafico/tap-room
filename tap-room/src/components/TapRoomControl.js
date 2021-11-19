import React from "react";
import KegList from "./KegList";

class TapRoomControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listVisible: true,
      formVisible: false,
      selectedKeg: null,
      kegList: [
        {
          name: 'Corona Extra',
          brand: 'Cerveceria Modelo',
          price: 120,
          pintPrice: 13,
          alcoholContent: 4.6
        },
        {
          name: 'Modelo Especial',
          brand: 'Cerveceria Modelo',
          price: 160,
          pintPrice: 15,
          alcoholContent: 4.4
        },
        {
          name: 'Negra Modelo',
          brand: 'Cerveceria Modelo',
          price: 180,
          pintPrice: 16,
          alcoholContent: 5.4
        },
        {
          name: 'Heineken',
          brand: 'Heineken Company',
          price: 280,
          pintPrice: 16,
          alcoholContent: 5
        }
      ]
    }
  }

  render() {
    let currentlyVisibleState = null;
    currentlyVisibleState = <KegList kegList={this.state.kegList} />
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}

export default TapRoomControl;
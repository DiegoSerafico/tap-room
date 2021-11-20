import React from "react";
import NavBar from "./NavBar";
import KegForm from "./KegForm";
import KegList from "./KegList";
import MainContainer from "./MainContainer";

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
          alcoholContent: 4.6,
          id: 'keg1'
        },
        {
          name: 'Modelo Especial',
          brand: 'Cerveceria Modelo',
          price: 160,
          pintPrice: 15,
          alcoholContent: 4.4,
          id: 'keg2'
        },
        {
          name: 'Negra Modelo',
          brand: 'Cerveceria Modelo',
          price: 180,
          pintPrice: 16,
          alcoholContent: 5.4,
          id: 'keg3'
        },
        {
          name: 'Heineken',
          brand: 'Heineken Company',
          price: 280,
          pintPrice: 16,
          alcoholContent: 5,
          id: 'keg4'
        }
      ]
    }
  }

  handleAddingNewKeg = (newKeg) => {
    const newKegList = this.state.kegList.concat(newKeg);
    this.setState({
      kegList: newKegList,
      formVisible: false,
      listVisible: true
    });
  }

  handleMenuClick = () => {
    this.setState({listVisible: true, formVisible: false});
  }

  handleAddNewKegClick = () => {
    this.setState({listVisible: false, formVisible: true});
  }

  render() {
    let currentlyVisibleState = null;
    let mainContainerTitle = null;
    if (this.state.listVisible) {
      mainContainerTitle = "Menu";
      currentlyVisibleState = <KegList kegList={this.state.kegList} />
    }
    if (this.state.formVisible) {
      mainContainerTitle = "Add New Keg"
      currentlyVisibleState = <KegForm onNewKegCreation={this.handleAddingNewKeg} />;
    }
    return (
      <React.Fragment>
        <NavBar onMenuClick={this.handleMenuClick} onAddKegClick={this.handleAddNewKegClick} />
        <MainContainer title={mainContainerTitle} contentView=      {currentlyVisibleState}
         />
      </React.Fragment>
    )
  }
}

export default TapRoomControl;
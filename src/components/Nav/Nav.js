import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import "./style.css"

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="white" dark expand="md">
        <MDBNavbarBrand>
          <img className="growImg" src="https://i.imgur.com/gCIu3Wl.png"></img>
        </MDBNavbarBrand>
        
        
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;
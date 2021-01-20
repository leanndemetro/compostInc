import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import "./style.css"

class NavbarPage extends Component {
  

  render() {
    return (
      <Router>
        <MDBNavbar color="white" dark expand="md">
          <MDBNavbarBrand>
            <img className="growImg" src="https://i.imgur.com/gCIu3Wl.png"></img>
          </MDBNavbarBrand>
        </MDBNavbar>
        <img className="homeImg" src="https://www.groworlando.org/wp-content/uploads/2018/11/agriculture-backyard-blur-296230-e1543305529365.jpg"></img>
      </Router>


    );
  }
}

export default NavbarPage;
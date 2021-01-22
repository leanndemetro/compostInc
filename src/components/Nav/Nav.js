import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
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
          <div className="links"><MDBNav className="font-weight-bold">
      <MDBNavItem>
        <MDBNavLink className="black-text" active to="#!">CONTACT</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className="black-text" to="#!">ABOUT</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className="black-text" to="#!">DONATE</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className="black-text" to="#!">HELP</MDBNavLink>
      </MDBNavItem>
    </MDBNav>
    </div>
        </MDBNavbar>
        <img className="homeImg" src="https://www.groworlando.org/wp-content/uploads/2018/11/agriculture-backyard-blur-296230-e1543305529365.jpg"></img>
      </Router>


    );
  }
}

export default NavbarPage;
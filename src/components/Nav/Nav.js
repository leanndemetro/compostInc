import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNav, MDBNavItem, MDBNavLink,
  MDBIcon, MDBContainer, MDBCol
} from "mdbreact";
import "./style.css"

class NavbarPage extends Component {


  render() {
    return (
        <MDBNavbar dark expand="md">
          <MDBNavbarBrand>
            <a href="/"><img className="growImg" src="https://i.imgur.com/gCIu3Wl.png"></img></a>
          </MDBNavbarBrand>
          <MDBContainer>
            <MDBCol></MDBCol>
            <div className="links"><MDBNav>
              <MDBNavItem>
                <MDBNavLink className="black-text how" active to="/HowItWorks">WHAT WE DO</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
              <MDBNavLink className="black-text aboutUs" to="/About">ABOUT US</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
              <MDBNavLink className="black-text contact" to="/Contact">CONTACT</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
              <MDBNavLink className="black-text donate" to="/Donate">DONATE</MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            </div>
          </MDBContainer>
        </MDBNavbar>
    );
  }
}

export default NavbarPage;
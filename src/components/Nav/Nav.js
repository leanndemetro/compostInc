import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNav, MDBNavItem, MDBNavLink,
  MDBIcon, MDBContainer, MDBCol
} from "mdbreact";
import "./style.css"

class NavbarPage extends Component {


  render() {
    return (
        <MDBNavbar color="white" dark expand="md">
          <MDBNavbarBrand>
            <a href="/"><img className="growImg" src="https://i.imgur.com/nd70Zb3.jpg"></img></a>
          </MDBNavbarBrand>
          <MDBContainer>
            <MDBCol></MDBCol>
            <div className="links"><MDBNav className="font-weight-bold">
              <MDBNavItem>
                <MDBNavLink className="black-text how" active to="/HowItWorks">HOW IT WORKS</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="black-text shop" to="/Shop">SHOP</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
              <MDBNavLink className="black-text contact" to="/Contact">CONTACT</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
              <MDBNavLink className="black-text aboutUs" to="/About">ABOUT US</MDBNavLink>
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
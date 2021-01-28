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
                <MDBNavLink className="black-text" active to="/HowItWorks">HOW IT WORKS</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="black-text" to="/GetInvolved">GET INVOLVED</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
              <MDBNavLink className="black-text" to="/Donate">DONATE</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
              <MDBNavLink className="black-text" to="/Contact">CONTACT</MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            </div>
          </MDBContainer>
        </MDBNavbar>
    );
  }
}

export default NavbarPage;
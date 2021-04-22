import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNav, MDBNavItem, MDBNavLink,
  MDBIcon, MDBContainer, MDBCol, MDBAnimation
} from "mdbreact";
import "./style.css"

class NavbarPage extends Component {


  render() {
    return (
        <MDBNavbar dark expand="sm">
          <MDBNavbarBrand>
            <a href="/"><img className="growImg" src="https://i.imgur.com/gCIu3Wl.png"></img></a>
            <a href="/Contact"><MDBAnimation className="donateBounce" type="bounce" infinite>
            <p><MDBIcon icon="leaf" />  DONATE</p>
        </MDBAnimation></a>
          </MDBNavbarBrand>
          <MDBContainer>
            <MDBCol></MDBCol>
            <div className="links"><MDBNav>
              <MDBNavItem>
                <MDBNavLink className="black-text how" active to="/WhatWeDo">WHAT WE DO</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
              <MDBNavLink className="black-text aboutUs" to="/OurTeam">OUR TEAM</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
              <MDBNavLink className="black-text contact" to="/Contact">CONTACT</MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            </div>
          </MDBContainer>
        </MDBNavbar>
    );
  }
}

export default NavbarPage;
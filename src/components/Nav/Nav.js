import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNav, MDBNavItem, MDBNavLink,
  MDBIcon, MDBContainer, MDBCol
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import "./style.css"

class NavbarPage extends Component {


  render() {
    return (
      <Router>
        <MDBNavbar color="white" dark expand="md">
          <MDBNavbarBrand>
            <a href="/"><img className="growImg" src="https://i.imgur.com/nd70Zb3.jpg"></img></a>
          </MDBNavbarBrand>
          <MDBContainer>
            <MDBCol></MDBCol>
            <div className="links"><MDBNav className="font-weight-bold">
              <MDBNavItem>
                <MDBNavLink className="black-text" active to="/howItWorks">HOW IT WORKS</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="black-text" to="/getInvolved">GET INVOLVED</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="black-text" to="/Contact">CONTACT</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="black-text" to="/Donate">DONATE</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="black-text" to="/Ig"><MDBIcon fab icon="instagram" /></MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="black-text" to="https://www.facebook.com/GrowOrlandoInc/"><MDBIcon fab icon="facebook-square" /></MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            </div>
          </MDBContainer>
        </MDBNavbar>
      </Router>


    );
  }
}

export default NavbarPage;
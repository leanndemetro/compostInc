import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn
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
              <MDBNavLink className="black-text" active to="/Contact">CONTACT</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="black-text" to="/About">ABOUT</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="black-text" to="/Donate">DONATE</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="black-text" to="/Help">HELP</MDBNavLink>
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

        <MDBContainer className="body" style={{padding: "50px"}}>
          <MDBRow>
          <MDBCol>
      <MDBCard style={{ width: "100%", padding: "20px"}}>
        <MDBCardImage />
        <MDBCardBody>
        <div className="cardText">
          <MDBCardTitle>Using plants to grow teens.</MDBCardTitle>
          </div>
          <MDBCardText>
            Using plants to grow teens.
          </MDBCardText>
          <MDBBtn color="light-green" href="#">LEARN MORE</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
        <MDBCol>
      <MDBCard style={{ width: "500px", padding: "20px"}}>
        <MDBCardImage className="img-fluid" src="https://i.imgur.com/zzjyKfm.jpg" waves />
      
      </MDBCard>
      </MDBCol>
      </MDBRow>
      </MDBContainer>
     
    
          

      </Router>


    );
  }
}

export default NavbarPage;
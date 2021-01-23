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
          <img className="holdingPlant" src="https://i.imgur.com/vQ26RsH.jpg"></img>
        </MDBCol>
      </MDBRow>
          <MDBRow>
          <MDBCol>
      <MDBCard style={{ width: "100%", padding: "0.6px"}}>
        <MDBCardImage />
        <MDBCardBody>
        <div className="cardText">
          <MDBCardTitle>Using plants to grow teens</MDBCardTitle>
          <MDBCardText>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.

          </MDBCardText>
          <MDBBtn color="light-green" href="#">Learn more</MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
        <MDBCol>
      <MDBCard style={{ width: "500px", padding: "20px"}}>
        <MDBCardImage className="img-fluid" src="https://i.imgur.com/zzjyKfm.jpg" waves />
      
      </MDBCard>
      </MDBCol>
      </MDBRow>
      <br></br>
      <MDBRow>
        <MDBCol>
        <MDBCard style={{ width: "500px", padding: "20px"}}>
        <MDBCardImage className="img-fluid" src="https://i.imgur.com/0aEUTdF.jpg" waves />
      
      </MDBCard>
        </MDBCol>

        <MDBCol>
      <MDBCard style={{ width: "100%", padding: "0.6px"}}>
        <MDBCardImage />
        <MDBCardBody>
        <div className="cardText">
          <MDBCardTitle>Using plants to grow teens</MDBCardTitle>
          <MDBCardText>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
        </MDBCardText>
          <MDBBtn color="light-green" href="#">Learn more</MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
      </MDBRow>
      </MDBContainer>
     
    
          

      </Router>


    );
  }
}

export default NavbarPage;
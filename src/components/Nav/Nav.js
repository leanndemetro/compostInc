import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, img, MDBCardTitle, MDBCardText, MDBBtn
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

        <MDBContainer>
          <MDBCol>
            <MDBCard style={{ width: "100%" }}>
              <MDBCardBody>
              <br></br>
              <br></br>
                <MDBRow>
                  <MDBCol>
                    <div className="firstText">Here at Compost Inc.</div> swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard. Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko swiss chard wakame.
         </MDBCol>
                  <MDBCol>
                    Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify.
          </MDBCol>
                </MDBRow>
              </MDBCardBody>
              <br></br>
              <MDBRow>
                <MDBCol size="5"></MDBCol>
                <MDBCol size="2"><MDBBtn className="arrowBtn" color="light-green">Learn More <MDBIcon icon="angle-down" /></MDBBtn></MDBCol>
                <MDBCol size="5"></MDBCol>
              </MDBRow>
              <br></br>
              <br></br>
            </MDBCard>
          </MDBCol>
        </MDBContainer>

        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <MDBCard>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol>
                      <div className="cardTitle">
                        <img className="img-fluid" src="https://i.imgur.com/8MgS18n.jpg" waves />
                      </div>
                    </MDBCol>
                    <MDBCol>
                      <div className="linkImg">
                        <img className="img-fluid" src="https://i.imgur.com/alIHZq3.jpg" waves />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol>
                      <div className="linkImg">
                        <img className="img-fluid" src="https://images.unsplash.com/photo-1566040924976-f837330d1a5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" waves />
                      </div>
                    </MDBCol>
                    <MDBCol>
                      <div className="cardTitle">
                        <img className="img-fluid" src="https://i.imgur.com/VL664mF.jpg" waves />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol>
                      <div className="cardTitle">
                        <img className="img-fluid" src="https://i.imgur.com/yiSQ1o0.jpg" waves />
                      </div>
                    </MDBCol>
                    <MDBCol>
                      <div className="linkImg">
                        <img className="img-fluid" src="https://i.imgur.com/zzjyKfm.jpg" waves />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>


      </Router>


    );
  }
}

export default NavbarPage;
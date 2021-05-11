import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNav, MDBNavItem,
  MDBIcon, MDBContainer, MDBCol, MDBAnimation
} from "mdbreact";
import "./style.css"

class NavbarPage extends Component {


  render() {
    return (
        <div className="navBar">
          
            <a href="/"><img src="https://i.imgur.com/ktdgRmb.png?1" className="growImg"></img></a>
            <a href="/Contact"><MDBAnimation className="donateBounce" type="bounce" infinite>
            <p><MDBIcon icon="leaf" />  DONATE</p>
        </MDBAnimation></a>
            <div className="links">
                <a className="black-text how" active href="/WhatWeDo">ABOUT</a>
              <a className="black-text aboutUs" href="/OurTeam">OUR TEAM</a>
              <a className="black-text contact" href="/Contact">CONTACT</a>
            </div>
        
        </div>
    );
  }
}

export default NavbarPage;
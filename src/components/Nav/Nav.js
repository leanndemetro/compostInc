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
          
            <a href="/">
              <img src="https://i.imgur.com/ktdgRmb.png?1" className="growImgNav"></img></a>

            <div className="links">
                <a className="black-text how" active href="/WhatWeDo">ABOUT</a>
              <a className="black-text contact" href="/Contact">CONTACT</a>
              <a className="black-text how" active href="/WhatWeDo">OUR TEAM</a>
              <a className="black-text donate" href="/Donate">DONATE</a>
            </div>
        
        </div>
    );
  }
}

export default NavbarPage;
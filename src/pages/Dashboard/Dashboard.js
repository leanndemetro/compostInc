import React from "react";
import {
  MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn, MDBIcon, MDBAnimation
} from "mdbreact";
import "./style.css"



function Dashboard() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="4"></MDBCol>
      <MDBCol size="8" className="dashCard">
        <div className="centered">
              <h1 className="dashText">Help us use plants to grow the lives of local teens!</h1>
              <p className="dashTextTwo">Grow Orlando’s mission is to elevate life skills development by providing opportunities in urban agriculture.</p>
              <br></br>
              <MDBBtn className="learnMore" color="none"><a href="/WhatWeDo">learn more <MDBIcon className="arrowRight" icon="angle-double-right" /></a></MDBBtn>
              </div>
      </MDBCol>
      </MDBRow>
        </MDBContainer>

  );
}


export default Dashboard;
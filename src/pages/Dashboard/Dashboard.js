import React from "react";
import {
  MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn, MDBIcon, MDBAnimation
} from "mdbreact";
import "./style.css"



function Dashboard() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="3"></MDBCol>
      <MDBCol size="9" className="dashCard">
        <div className="centered">
              <h1 className="dashText">Help us use plants to grow the lives of local teens!</h1>
              <p className="dashTextTwo">Here at Grow Orlando it is our mission to connect students with the world around them. Through access to our permaculture based local gardens, and training programs, we aim to educate students with lifelong gardening or even job skills.</p>
              <br></br>
              <MDBBtn className="learnMore" color="none"><a href="/WhatWeDo">learn more <MDBIcon className="arrowRight" icon="angle-double-right" /></a></MDBBtn>
              </div>
      </MDBCol>
      </MDBRow>
        </MDBContainer>

  );
}


export default Dashboard;
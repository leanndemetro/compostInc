import React from "react";
import {
  MDBContainer, MDBRow, MDBCol, MDBIcon
} from "mdbreact";
import "./style.css"



function Dashboard() {
  return (
    <div className="dashCard">
      <MDBContainer>
        <MDBRow>
          <MDBCol><img className="dashImage" src="https://i.imgur.com/8J20kKp.jpg"></img></MDBCol>
          <MDBCol className="dashCol"> 
              <img className="growImgDash" src="https://i.imgur.com/gCIu3Wl.png"></img>
              <br></br>


              <hr></hr>
              <p className="lifeSkills">Using Plants to Grow Teens</p>

              <hr></hr>
              <p className="lifeSkillsText">We empower students to learn life skills through plant cultivation -  
              Instilling health, wealth, and work ethic through gainful employment in the agriculture industry. We believe sowing these seeds now will contribute to food and economic sovereignty for our households and communities for generations to come. </p>
              <hr></hr>
            <a href="/WhatWeDo" className="learnMore">learn more <MDBIcon icon="chevron-circle-right arrow" /></a>
              <hr></hr>
            </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <div className="dashBottomDiv"></div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>

  );
}


export default Dashboard;
import React from "react";
import {
  MDBContainer, MDBRow, MDBCol, MDBIcon
} from "mdbreact";
import "./style.css"



function Dashboard() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="12" className="dashCard">
          <MDBRow className="whiteRow">
            <MDBCol><img className="growImgDash" src="https://i.imgur.com/gCIu3Wl.png"></img>
              <br></br>
            </MDBCol>

          </MDBRow>
         

          <hr></hr>
          <p className="lifeSkills">Using Plants to Grow Teens</p>
                 
                 <hr></hr>
                 <p className="lifeSkillsText">We empower students to learn life skills through plant cultivation; Instilling health, wealth, and work ethic through gainful employment in the agriculture industry. We believe sowing these seeds now will contribute to food and economic sovereignty for our households and communities for generations to come. </p>
                 <hr></hr>
                 <a href="/WhatWeDo" className="learnMore">learn more <MDBIcon icon="chevron-circle-right arrow" /></a>
                <hr></hr>
        </MDBCol>
      </MDBRow>
      <MDBRow className="dashCardTwo" >
   
              <MDBCol size="4" className="health"><span className="dashHeaders">Health <MDBIcon icon="heartbeat" /></span></MDBCol>
              <MDBCol size="4" className="wealth"><span className="dashHeaders">Wealth<MDBIcon icon="hand-holding-usd" /></span>
              </MDBCol>
              <MDBCol className="community"><span className="dashHeaders">Community <MDBIcon icon="users" /></span></MDBCol>
             
            </MDBRow>

            
          <MDBRow>

        <MDBCol size="12" className="dashCardBottom">
          <MDBRow>
            <MDBCol>
              

              <p>Grow Orlando Inc.
            <br></br>
            (407) 283-1208
            <br></br>
            groworlando@gmail.com
            <br></br>
            © Grow Orlando Inc. All Rights Reserved.</p>
            </MDBCol>
          </MDBRow>



        </MDBCol>
      </MDBRow>
    </MDBContainer>

  );
}


export default Dashboard;
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
          <p className="lifeSkills">Teaching Life Skills Through Plant Cultivation</p>
                 
                 <hr></hr>
                 <p className="lifeSkillsText">We empower students by instilling life skills such as work ethic, financial literacy, health, self worth, and dignity through agricultural education. We believe sowing these seeds now will contribute to food and economic sovereignty for our households and communities for generations to come. </p>
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
            info@growOrlando.org
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
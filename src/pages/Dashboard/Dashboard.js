import React from "react";
import {
  MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn, MDBIcon, MDBAnimation
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
              <h3 className="dashTitle">Empowering Future Generations</h3>
              <p className="dashText">Making a difference through urban micro farming</p>
              <MDBIcon className="arrowRight" icon="angle-down" />
            
      </MDBCol>
      </MDBRow>
      <MDBRow>
      <MDBCol size="12" className="dashCardTwo">
              <MDBRow>
                <MDBCol>
                  <p className="lifeSkills">Teaching Life Skills Through Plant Cultivation</p>
                 
                  <hr></hr>
                  <p className="lifeSkillsText">We empower students by instilling life skills such as work ethic, financial literacy, health, self worth, and dignity through agricultural education. We believe sowing these seeds now will contribute to food and economic sovereignty for our households and communities for generations to come. </p>
                <p className="dashHeaders">  Health <MDBIcon icon="heartbeat" /></p>
                  <hr></hr>
                  <img className="health" src="https://i.imgur.com/FDpoI06.jpg?1"></img>
          </MDBCol>
          <MDBCol>
                  <p className="dashHeaders"> Wealth <MDBIcon icon="hand-holding-usd" /></p>
                <hr></hr>
                <img className="wealth" src="https://i.imgur.com/DZoSSkb.jpg"></img>
              <p className="dashHeaders"> Community <MDBIcon icon="users" /></p>
              <hr></hr>
              <img className="community" src="https://i.imgur.com/Yfk5eVG.png?2"></img>
              
              </MDBCol>
                
              </MDBRow>
             
            
      </MDBCol>
      </MDBRow>
      <MDBRow>
      <MDBCol size="12" className="dashCardBottom">
        <MDBRow>
          <MDBCol>
          <img className="dashImgs" src="https://i.imgur.com/x5sPnPO.jpg"></img>
          <img className="dashImgs" src="https://i.imgur.com/7rhz005.jpg"></img>
          <img className="dashImgs" src="https://i.imgur.com/ExifKjt.jpg"></img>
          <img className="dashImgs" src="https://i.imgur.com/RHbdstG.jpg"></img>
         <br></br>
         <br></br>
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
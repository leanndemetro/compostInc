import React from "react";
import {
  MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn, MDBIcon, MDBAnimation
} from "mdbreact";
import "./style.css"



function Dashboard() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="1"></MDBCol>
      <MDBCol size="10" className="dashCard">
              <MDBRow className="whiteRow">
                <MDBCol><img className="growImgDash" src="https://i.imgur.com/gCIu3Wl.png"></img>
                <br></br>
              </MDBCol>
                
              </MDBRow>
              <h3 className="dashTitle">Empowering Future Generations</h3>
              <h6 className="dashText">Making a difference through urban micro farming</h6>
              <MDBIcon className="arrowRight" icon="angle-down" />
            
      </MDBCol>
      <MDBCol size="1"></MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="1"></MDBCol>
      <MDBCol size="10" className="dashCardTwo">
              <MDBRow>
                <MDBCol className="dashTextFour">
                  <h1>We Teach Life Skills Through Plant Cultivation.</h1>
                  <br></br>
                  <h4>Building our youths’ knowledge and skills around urban agriculture, coupled with life skills such as work ethic, financial literacy, health, self worth, and dignity will contribute to food and economic sovereignty for our households and communities. </h4>
                  <br></br>
          </MDBCol>
          <MDBCol className="dashTextFour">
                  <h4>  Health <MDBIcon icon="heartbeat" /></h4>
                <br></br>
                <h4> Wealth <MDBIcon icon="hand-holding-usd" /></h4>
              <br></br>
              <h4> Community <MDBIcon icon="users" /></h4>
              </MDBCol>
                
              </MDBRow>
              <MDBRow>
                <MDBCol><a href="/whatWeDo"><button className="learnMore">Learn More</button></a></MDBCol>
                
              </MDBRow>
            
      </MDBCol>
      <MDBCol size="1">
        
      </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="1"></MDBCol>
      <MDBCol size="10" className="dashCardTwo">
        <MDBRow>
          <MDBCol>
            
          <img className="dashImgs" src="https://i.imgur.com/ExifKjt.jpg"></img>
          <img className="dashImgs" src="https://i.imgur.com/7rhz005.jpg"></img>
          <img className="dashImgs" src="https://i.imgur.com/RHbdstG.jpg"></img>
          <img className="dashImgs" src="https://i.imgur.com/cRqUbV4.jpg"></img>
         <br></br>
         <br></br>
            <p>Grow Orlando Inc.
            <br></br>
            Suite #90
            <br></br>
            449 Westpoint Garden Circle
            <br></br>
            Winter garden FL 34787
            <br></br>
            (407) 283-1208
            <br></br>
            info@growOrlando.org</p>
        </MDBCol>
        </MDBRow>
       
              
            
      </MDBCol>
      <MDBCol size="1">
        
      </MDBCol>
      </MDBRow>
        </MDBContainer>

  );
}


export default Dashboard;
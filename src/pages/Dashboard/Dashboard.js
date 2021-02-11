import React from "react";
import {
  MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn
} from "mdbreact";
import Carousel from "../../components/Carousel/Carousel";
import "./style.css"



function Dashboard() {
  return (
    <MDBContainer>
      <div className="dashCard">
      <MDBRow>
        <MDBCol>
      <div className="dash">
      <p>Here at <span className="compost">Compost Inc.</span></p>
      </div>
      </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <img className="textWrap" src="https://i.imgur.com/2cznLux.jpg?1"></img>
          <br></br>
          <p className="dashText">Our mission is to reduce food waste within our community using Eco-friendly methods and composting. This along with our passion for youth outreach and finding creative ways to change lives is what shapes our team here at Compost Inc.
          <br></br>
          <br></br>
          Upon purchasing one of our aneroboic digestors for your business or school you will recieve free installation, training, support, and complimentary waste removal. 
          </p>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol className="howBtn">
          <MDBBtn color="elegant"><a className="howBtn" href="/howItWorks">
            HOW IT WORKS</a></MDBBtn>
          </MDBCol>
        </MDBRow>
        </div>
            </MDBContainer>
  

  );
}


export default Dashboard;
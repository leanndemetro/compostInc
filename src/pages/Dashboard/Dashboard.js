import React from "react";
import {
  MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn
} from "mdbreact";
import Carousel from "../../components/Carousel/Carousel";
import "./style.css"



function Dashboard() {
  return (
    <MDBContainer className="dashCard">
      <MDBRow>
        <MDBCol>
      <div className="dash">
      <p>Here at Compost Inc.</p>
      </div>
      </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <img className="textWrap" src="https://i.imgur.com/2cznLux.jpg?1"></img>
          <br></br>
          <p className="dashText">Our mission is to reduce food waste within our community using Eco-friendly methods and composting. This along with our passion for youth outreach and how we can help change lives is what shapes our team here at Compost Inc.
          </p>
          <br></br>
          <MDBBtn color="elegant"><a  href="/HowItWorks">
                  <span className="dashHow"> HOW IT WORKS</span>
                   </a>
                  </MDBBtn>
          </MDBCol>
        </MDBRow>
            </MDBContainer>
                  
                



  );
}


export default Dashboard;
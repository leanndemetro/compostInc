import React from "react";
import {
  MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn, MDBIcon
} from "mdbreact";
import "./style.css"



function Dashboard() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="4"></MDBCol>
      <MDBCol size="8" className="dashCard">
        <div className="centered">
              <p className="dashText">Help us use plants to grow the lives of local teens!</p>
              <p className="dashTextTwo">Here at Grow Orlando it is our mission to connect students with the world aroud them. Through access to our permaculture based local gardens, and training programs, we aim to educate students with lifelong gardening or even job skills.</p>
              <br></br>
              <MDBBtn color="white">LEARN MORE</MDBBtn>
              </div>
      </MDBCol>
      </MDBRow>
        </MDBContainer>

  );
}


export default Dashboard;
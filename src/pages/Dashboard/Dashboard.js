import React from "react";
import {
  MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn, MDBIcon
} from "mdbreact";
import "./style.css"



function Dashboard() {
  return (
    <MDBContainer>
      <div className="dashCard">
        <MDBRow>
          <MDBCol>
          <a className="howBtn" href="/howItWorks">
            WHAT WE DO <MDBIcon icon="arrow-right" /></a>
          </MDBCol>
        </MDBRow>
        </div>
            </MDBContainer>
  

  );
}


export default Dashboard;
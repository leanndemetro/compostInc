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
          <MDBCol className="dashCard" size="8"></MDBCol>
        </MDBRow>
            </MDBContainer>
  

  );
}


export default Dashboard;
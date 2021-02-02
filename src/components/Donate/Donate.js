import React from "react";
import {
  MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn
} from "mdbreact";
import "./style.css"




function Donate() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBCard>
            <MDBCardBody>
              <MDBRow>
                <MDBCol>
                  <h1>DONATE</h1>
                  <hr></hr>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol className="donateText">
                <p>Thank you for donating!</p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol size="3"></MDBCol>
                <MDBCol size="6"className="cardBody">
                  <form method="POST" action="">
                    <div className="input">
                      <label className="label" for="name">Name: </label>
                      <br></br>
                      <input className="donateInput" id="name" type="text" name="name"></input>
                    </div>
                    <div className="input">
                      <label className="label" for="email">Email address: </label>
                      <br></br>
                      <input className="donateInput" id="email" type="email" name="email"></input>
                    </div>
                    <div className="input">
                      <label className="label" for="amount">Amount: </label>
                      <br></br>
                      <input className="donateInput" id="amount" type="number" name="amount"></input>
                    </div>
                    <div>
                      <br></br>
                      <MDBBtn className="nextBtn" type="submit" color="elegant">
                    Next
                  </MDBBtn>
                    </div>
                  </form>
                </MDBCol>
                <MDBCol size="3"></MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>




  );
}

export default Donate;
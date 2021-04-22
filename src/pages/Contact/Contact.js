import React from "react";
import "./style.css";
import {
  MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn, MDBIcon, MDBAnimation
} from "mdbreact";





function Contact() {
  return (
    <MDBContainer>
      <div className="contactDiv">
        <MDBRow>
          <MDBCol><img className="contactImg" src="https://i.imgur.com/dPRr5go.jpg"></img>
          </MDBCol>
          <MDBCol className="centerCol">
            <h1 className="contactHeader">Contact Us</h1>
            <br></br>
            <h3>groworlando@gmail.com</h3>
            <h4>(407) 555-5765</h4>
            <br></br>
            <img className="contactImgCenter" src="https://i.imgur.com/DJAsoOl.png"></img></MDBCol>
          <MDBCol><img className="contactImgBtm" src="https://i.imgur.com/wJdgRuU.jpg"></img></MDBCol>
        </MDBRow>
      </div>
    </MDBContainer>

  );
}

export default Contact;
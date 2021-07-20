import React from "react";
import "./style.css";
import {
  MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn, MDBIcon
} from "mdbreact";





function Contact() {
  return (
    <div className="contactDiv"> 
      <MDBContainer>
        <MDBRow>
          <MDBCol size="6"><img className="contactImg" src="https://i.imgur.com/R5UsYyw.jpg"></img></MDBCol>
          <MDBCol size="6"><p className="contactText">
          <hr></hr>
          <span className="contactHeader">
            CONTACT US
            </span>
          <hr></hr>
          Grow Orlando Inc.
          <br></br>
          Winder Garden, FL 34787
          <br></br>
          (407) 283-1208
          <br></br>
          groworlando@gmail.com
          <hr></hr> </p>
          </MDBCol>
        </MDBRow>
        <MDBRow>
       <MDBCol><img className="contactImgs" src="https://i.imgur.com/DFxtlOu.jpg"></img></MDBCol>
       <MDBCol><img className="contactImgs" src="https://i.imgur.com/sSQe6JO.jpg"></img></MDBCol>
     </MDBRow>
     <br></br>
     <MDBRow>
       <MDBCol><img className="contactImgs" src="https://i.imgur.com/jEaw389.jpg"></img></MDBCol>
       <MDBCol><img className="contactImgs" src="https://i.imgur.com/D4qNOZc.jpg"></img></MDBCol>
     </MDBRow>
        </MDBContainer>
         </div>
  );
}

export default Contact;
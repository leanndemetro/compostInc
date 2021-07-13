import React from "react";
import "./style.css";
import {
  MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn, MDBIcon
} from "mdbreact";





function Contact() {
  return (
    <MDBContainer>
      <MDBRow>
      <MDBCol>
      <div className="contactDivText">
        <p>CONTACT US</p>
        <hr></hr>
        <p>Grow Orlando Inc.
<br></br>
Winder Garden, FL 34787
<br></br>
(407) 283-1208
<br></br>
groworlando@gmail.com</p>
</div>
<div className="contactDivTwo">
<img className="contactImgTwo" src="https://i.imgur.com/UTiz7Vt.jpg"></img>
</div>
<div className="contactDivTwo">
<img className="contactImgTwo" src="https://i.imgur.com/EX3yYsy.jpg"></img>
      </div>
      </MDBCol>
      <MDBCol>
      <div className="contactDiv">
       <img className="contactImgOne" src="https://i.imgur.com/cRqUbV4.jpg"></img>
      </div>
      <div className="contactDiv">
       <img className="contactImgOne" src="https://i.imgur.com/DJAsoOl.png"></img>
      </div>
      <div className="contactDiv">
       <img className="contactImgOne" src="https://i.imgur.com/x5sPnPO.jpg"></img>
      </div>
      </MDBCol>
     </MDBRow>
    
       
    </MDBContainer>

  );
}

export default Contact;
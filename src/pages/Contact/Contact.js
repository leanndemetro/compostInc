import React from "react";
import "./style.css";
import {
  MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn, MDBIcon, MDBAnimation
} from "mdbreact";





function Contact() {
  return (
    <MDBContainer>
      <div className="contactDiv">
      <hr></hr>
        <img className="contactImgs" src="https://i.imgur.com/UrGKsQJ.jpg"></img>
        <img className="contactImgs" src="https://i.imgur.com/EqKq6Ko.jpg"></img>
        <img className="contactImgs" src="https://i.imgur.com/UTiz7Vt.jpg"></img>
        <br></br>
        <br></br>
        <p>Grow Orlando Inc.
<br></br>
Winder Garden, FL 34787
<br></br>
(407) 283-1208
<br></br>
groworlando@gmail.com</p>
        <br></br>
        <img className="contactImgs" src="https://i.imgur.com/ZZtZHfO.jpg"></img>
        <img className="contactImgs" src="https://i.imgur.com/73OuJKD.jpg?1"></img>
        <img className="contactImgs" src="https://i.imgur.com/dPRr5go.jpg"></img>

        <hr></hr>
      </div>
    </MDBContainer>

  );
}

export default Contact;
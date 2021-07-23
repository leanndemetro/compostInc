import React from "react";
import "./style.css";
import  { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput} from "mdbreact";
import {withRouter} from "react-router-dom";
import {CardElement, cardElement} from "@stripe/react-stripe-js";




function Donate() {
 const handleSubmit = async (e) => {
   e.preventDefault();
   console.log("hi");
 }

  return (
    <MDBContainer>
<MDBRow>
  <MDBCol size="2"></MDBCol>
  <MDBCol size="8">
    <div className="donateDiv">
   <h1>Donate Now</h1>
   <h3>When you donate to Grow Orlando you sow the seeds of potential in a chiild's life.</h3>
   <form className="paymentForm" id="payment-form" onSubmit={handleSubmit}>
   <label htmlFor="name-form">Name</label>
   <br></br>
    <input id="name-form" type="text"></input>
    <br></br>
    <br></br>
     <label htmlFor="card-element">Card</label>
     <CardElement id="card-element" />
     <br></br>
     <div className="buttonDiv">
     <hr></hr>
     <a href="/" className="payNow">pay now<MDBIcon icon="chevron-circle-right arrow" /></a>
     <hr></hr>
     <a target="__blank" href="https://stripe.com/"><MDBIcon className="stripeIcon" fab icon="stripe" /></a>
     </div>
   </form>
      </div> 
      </MDBCol>
      <MDBCol size="2"></MDBCol>
      </MDBRow> 
      </MDBContainer>
       
    
  );
}





export default Donate;
import React from "react";
import {
  MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBCard
} from "mdbreact";
import "./style.css";





function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
    
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    
  };

  function handleFormSubmit() {
    let formData = [name, email, subject, message]
    console.log(formData);
  }



  

  return (
    <MDBContainer>
        <div className="contactForm">
          <MDBRow>
          <MDBCol><p className="contactHead">CONTACT US</p>
                <br></br>
                <br></br>
                </MDBCol>
                </MDBRow>
              <MDBRow>
            <MDBCol size="2"></MDBCol>
            <MDBCol size="8">
              <form>
                <label htmlFor="defaultFormContactNameEx">
                  Your name
            </label>
                <input value={name} onChange={handleNameChange} type="text" id="defaultFormContactNameEx" className="form-control" />
                <br />
                <label htmlFor="defaultFormContactEmailEx">
                  Your email
            </label>
                <input value={email} onChange={handleEmailChange} type="email" id="defaultFormContactEmailEx" className="form-control" />
                <br />
                <label htmlFor="defaultFormContactSubjectEx">
                  Subject
            </label>
                <input value={subject} onChange={handleSubjectChange} type="text" id="defaultFormContactSubjectEx" className="form-control" />
                <br />
                <label htmlFor="defaultFormContactMessageEx">
                  Your message
            </label>
                <textarea value={message} onChange={handleMessageChange} type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
                <div className="text-center mt-4">
                  <MDBBtn onClick={(e) => {handleFormSubmit(name, email, subject, message)}} color="elegant">
                    Send
                        <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
            <MDBCol size="2"></MDBCol>
          </MDBRow>
        </div>
    </MDBContainer>

  );
}

export default Contact;
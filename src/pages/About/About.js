import React from "react";
import {
  MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn
} from "mdbreact";
import "./style.css"





function About ()  {
    return (
        <MDBContainer>
        <MDBRow>
          <MDBCol>
      <p className="about">OUR TEAM</p>
      <div className="aboutBody">
        <MDBRow>
          <MDBCol size="1"></MDBCol>
          <MDBCol>
            <p className="aboutBlurb">"Text blurb(s) here that gives a history and background/ mission statement. "Why the world needs changing and why we're gonna be the ones to use it a history and background/ mission statement. Why the world needs changing and why we're gonna be the ones to use it"</p>
          </MDBCol>
          <MDBCol size="1"></MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol>
              <img
                src="https://i.imgur.com/ctYdCVL.jpg"
                className="frankImg img-fluid"
                tag="img"
                alt="FrankBailey"
              />
              <h4 className="font-weight-bold frank">FRANK BAILEY</h4>
              <h6 className="font-weight-bold grey-text">
                Owner
              </h6>
              <p className="blurb">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
                eos id officiis hic tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>
              <a href="#!" className="p-2 fa-lg fb-ic">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="#!" className="p-2 fa-lg tw-ic">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="#!" className="p-2 fa-lg li-ic">
                <MDBIcon fab icon="linkedin-in" />
              </a>
              <a href="#!" className="p-2 fa-lg email-ic">
                <MDBIcon icon="envelope" />
              </a>
            </MDBCol>
            </MDBRow>
            <br></br>
            <br></br>
          <MDBRow>
            <MDBCol>
              <img
                src="https://i.imgur.com/Ys1LNXy.jpg"
                className="stuartImg img-fluid"
                tag="img"
                alt="StuartMcdaniel"
              />
            
              <h4 className="font-weight-bold mb-3 stuart">STUART MCDANIEL</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Mad Scientist
              </h6>
              <p className="blurb">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic.
              </p>
              <a href="#!" className="p-2 fa-lg fb-ic">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="#!" className="p-2 fa-lg tw-ic">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="#!" className="p-2 fa-lg li-ic">
                <MDBIcon fab icon="linkedin-in" />
              </a>
              <a href="#!" className="p-2 fa-lg email-ic">
                <MDBIcon icon="envelope" />
              </a>
            </MDBCol>
            </MDBRow> 
            </div>
              </MDBCol>
              </MDBRow>
              </MDBContainer>
    

      

    );
}

export default About;
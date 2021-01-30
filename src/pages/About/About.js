import React from "react";
import {
  MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon
} from "mdbreact";
import "./style.css"





function About ()  {
    return (
        <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBCard className="my-5 px-5 pb-1">
      <MDBCardBody>
      <p className="about">OUR TEAM</p>
      <hr></hr>
      <br></br>
      <br></br>
        <MDBRow className="text-md-left">
          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <img
                src="https://i.imgur.com/ctYdCVL.jpg"
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="FrankBaily"
              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">FRANK BAILEY</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Owner
              </h6>
              <p className="black-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>
              <a href="#!" className="p-2 fa-lg fb-ic">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="#!" className="p-2 fa-lg tw-ic">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="#!" className="p-2 fa-lg dribbble-ic">
                <MDBIcon fab icon="dribbble" />
              </a>
            </MDBCol>
          </MDBCol>

          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"
              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">MARIA KATE</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Photographer
              </h6>
              <p className="black-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>
              <a href="#!" className="p-2 fa-lg fb-ic">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="#!" className="p-2 fa-lg yt-ic">
                <MDBIcon fab icon="youtube" />
              </a>
              <a href="#!" className="p-2 fa-lg ins-ic">
                <MDBIcon fab icon="instagram" />
              </a>
            </MDBCol>
          </MDBCol>

          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"
              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">ANNA DEYNAH</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Web Developer
              </h6>
              <p className="black-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>
              <a href="#!" className="p-2 fa-lg fb-ic">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="#!" className="p-2 fa-lg tw-ic">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="#!" className="p-2 fa-lg github-ic">
                <MDBIcon fab icon="github" />
              </a>
            </MDBCol>
          </MDBCol>

          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(29).jpg"
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"
              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">SARAH MELYAH</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Front-end Developer
              </h6>
              <p className="black-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>
              <a href="#!" className="p-2 fa-lg gplus-ic">
                <MDBIcon fab icon="google-plus-g" />
              </a>
              <a href="#!" className="p-2 fa-lg li-ic">
                <MDBIcon fab icon="linkedin-in" />
              </a>
              <a href="#!" className="p-2 fa-lg email-ic">
                <MDBIcon icon="envelope" />
              </a>
            </MDBCol>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
              </MDBCard>
              </MDBCol>
              </MDBRow>
              </MDBContainer>
    

      

    );
}

export default About;
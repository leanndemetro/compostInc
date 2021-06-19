import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";
import "./style.css";





function About() {
  return (
    <MDBContainer>
    <div className="teamCard">
      <MDBRow className="text-md-left">

          <MDBCol md="3" lg="3" className="float-left">
            <img
              src="https://i.imgur.com/4GZOhUw.png"
              className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid frankImg"
              tag="img"
              alt="frankBailey"
            ></img>
          </MDBCol>
          <MDBCol md="9" lg="9" className="float-right">
            <h4 className="font-weight-bold mb-3">Frank Bailey</h4>
            <h6 className="font-weight-bold mb-3">
              Executive Director 
              </h6>
            <p>
              Frank M Bailey, Jr is the Executive Director and founder of Grow Orlando, Inc., an organization dedicated to teaching life, work, and financial literacy skills through plant cultivation. An Orlando-native, Frank grew up in Holden Heights and Metro West for the first half of his life, with the second half of his life residing in places like Gotha, Winter Park, and Winter Garden. Living and understanding the lives that live on ‘both sides of the tracks’, Frank has dedicated his life to using his ideas as a visionary to develop education and empowerment, creating activities and programs that fill the gap of opportunity and experience in places that need it.  He is also currently sitting as the Chairman of the Advisory Board for the Winter Garden Community Garden, is currently a CRAVE leader, and speaks at seminars, churches, conferences, support groups, clubs, and one on one with You!
              </p>
          </MDBCol>
        </MDBRow>
      <MDBRow className="text-md-left">

          <MDBCol md="3" lg="3" className="float-left">
            <img
              src="https://i.imgur.com/MHQ4BDf.jpg"
              className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid frankImg"
              tag="img"
              alt="ambarPayne"
            ></img>
          </MDBCol>
          <MDBCol md="9" lg="9" className="float-right">
            <br></br>
            <h4 className="font-weight-bold mb-3">Ambar Payne</h4>
            <h6 className="font-weight-bold mb-3">
              Board Member
              </h6>
            <p>
            Ambar has worked in nonprofits for 12 years, serving various communities from individuals with spina bifida to farmworker and immigrant populations. She has a demonstrated history working with development, specializing in grant writing, donor solicitations, and event fundraising. Her educational background includes a Master's in Library and Information Science from the University of South Florida. Ambar is currently Grow Orlando's Program Coordinator, managing their social media platforms, administration, and grant development.
              </p>
          </MDBCol>
        </MDBRow>
        </div>

        </MDBContainer>
        

       
    
  );
}





export default About;
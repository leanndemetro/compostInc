import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";
import "./style.css";





function About() {
  return (
    <MDBContainer>
    <div className="teamCard">
      <MDBRow>
        <MDBCol><p>We have a diverse team of grassroots organizers and doers dedicated to changing the landscape of Central Florida's nonprofit offerings through social enterprise; providing opportunity and experience for growth and development where it's needed most.</p></MDBCol>
      </MDBRow>
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
              Frank M Bailey, Jr is the Executive Director and founder of Grow Orlando Incorporated, an organization dedicated to teaching life, work, and financial literacy skills through plant cultivation. An Orlando-native, Frank grew up in Gotha for the first half of his life, and resided in Kissimmee for the second. Living and understanding the lives that exist on ‘both sides of the tracks,’ Frank has dedicated his life to using his ideas as a visionary to develop education and empowerment by creating activities and programs that fill the opportunity and experience gap in places that need it.  He is a former Chairman of the Advisory Board, and a current Board Member for the Winter Garden Community Garden. He is a CRAVE leader, a graduate of Rollins College, and a Polis Institute Propel Leadership Certification Holder. He speaks at seminars, churches, conferences, support groups, clubs, and one on one with you!
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
      <MDBRow className="text-md-left">

          <MDBCol md="3" lg="3" className="float-left">
            <img
              src="https://i.imgur.com/55Mc9vk.jpg"
              className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid frankImg"
              tag="img"
              alt="biancaEphram"
            ></img>
          </MDBCol>
          <MDBCol md="9" lg="9" className="float-right">
            <br></br>
            <h4 className="font-weight-bold mb-3">Bianca Ephram</h4>
            <h6 className="font-weight-bold mb-3">
              Farm Coordinator
              </h6>
            <p>
            Bianca Ephraim, an experienced plant cultivator, is the director of Grow Orlando’s farm development and planning. Bianca also worked with the City of Orlando’s youth program, The Garden, which provided youth with environmental education and strived to get students outdoors and develop connections with nature. As a volunteer at the Rock Lake Community Center, her recommendation led Orange County Public Schools to reevaluate their sustainable food waste program. As a lifetime avid grower, Bianca was able to turn her passion for plant cultivation into a career as a Team Lead and Senior Gardener at Sungold Gardens. As Team Lead, she designed, installed, and serviced advanced elevated organic gardens for residential and commercial properties. While at Sungold, Bianca was directly responsible for the maintenance of over 1,000 square feet of organic growspace covering various types of produce and plants within the central Florida community area throughout the year. Currently she is owner of Mother Rootz, LLC, a high quality greenspace consulting company. Her company provides full range and holistic architecture groundwork with sustainable design principles.
              </p>
          </MDBCol>
        </MDBRow>
        </div>

        </MDBContainer>
        

       
    
  );
}





export default About;
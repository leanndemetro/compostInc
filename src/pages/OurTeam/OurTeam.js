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
          <MDBCol>
            <p className="aboutBlurb">"Our mission is to create mindfulness around food waste and the recycling process via composting and soil education."</p>
          </MDBCol>
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
              Frank M Bailey, Jr is the Executive Director and founder of Grow Orlando, Inc., an organization dedicated to teaching life, work, and financial literacy skills through plant cultivation. An Orlando-native, Frank grew up in Holden Heights and Metro West for the first half of his life, with the second half of his life residing in places like Gotha, Winter Park, and Winter Garden. Living and understanding the lives that live on ‘both sides of the tracks’, Frank has dedicated his life to using his ideas as a visionary to develop education and empowerment, creating activities and programs that fill the gap of opportunity and experience in places that need it.  He is also currently sitting as the Chairman of the Advisory Board for the Winter Garden Community Garden, is currently a CRAVE leader, and speaks at seminars, churches, conferences, support groups, clubs, and one on one with You!
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
              Stuart grew up mucking around the mountains of the northeast, got a BA at Oberlin College, and then moved to Paraguay for a stint as a Peace Corps volunteer. He got turned on to moss biodiversity working at the New York State Museum with the late Norton Miller. Subsequently he went to Duke University for a PhD with Jon Shaw, followed by a NIH-NRSA postdoc fellowship at Washington University in St. Louis with Ralph Quatrano. In the fall of 2009 he joined the UF faculty in the Department of Biology.
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
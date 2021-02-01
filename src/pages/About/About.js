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
            <MDBCard>
      <MDBCardBody>
      <p className="about">ABOUT OUR TEAM</p>
      <hr></hr>
      <br></br>
      <br></br>
        <MDBRow>
            <MDBCol>
              <img
                src="https://i.imgur.com/ctYdCVL.jpg"
                className="teamImg img-fluid"
                tag="img"
                alt="FrankBailey"
              />
            </MDBCol>
            <MDBCol>
              <h4 className="font-weight-bold mb-3 frank">FRANK BAILEY</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Owner
              </h6>
              <p className="blurb">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
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
              <a href="#!" className="p-2 fa-lg dribbble-ic">
                <MDBIcon fab icon="dribbble" />
              </a>
            </MDBCol>
            </MDBRow>
            <br></br>
            <br></br>
          <MDBRow>
            <MDBCol>
              <img
                src="https://i.imgur.com/Ys1LNXy.jpg"
                className="teamImg img-fluid"
                tag="img"
                alt="StuartMcdaniel"
              />
            </MDBCol>
            <MDBCol>
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
              <a href="#!" className="p-2 fa-lg yt-ic">
                <MDBIcon fab icon="youtube" />
              </a>
              <a href="#!" className="p-2 fa-lg ins-ic">
                <MDBIcon fab icon="instagram" />
              </a>
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
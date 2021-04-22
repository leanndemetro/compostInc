import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import "./style.css";





function About ()  {
    return (
      <div className="teamCard">
        <h2 className="h1-responsive font-weight-bold my-5">
          Our Team
        </h2>
        <p className="w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
          error amet numquam iure provident voluptate esse quasi. 
        </p>
        <MDBRow className="text-md-left">
          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <img
                src="https://i.imgur.com/CFNY2Xr.jpg"
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="frankBailey"
              ></img>
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Frank Bailey</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Owner
              </h6>
              <p>
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
                src="https://i.imgur.com/zbV4a7m.jpg"
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"
              ></img>
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Maria Kate</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Photographer
              </h6>
              <p>
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
                src="https://i.imgur.com/IsETBEg.jpg?1"
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"
              ></img>
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Anna Deynah</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Web Developer
              </h6>
              <p>
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
                src="https://i.imgur.com/Athg0g9.jpg?1"
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"
              ></img>
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Sarah Melyah</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Front-end Developer
              </h6>
              <p>
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
        </div>
  );
}


      


export default About;
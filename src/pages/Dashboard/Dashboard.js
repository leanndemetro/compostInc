import React from "react";
import {
  MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn, MDBIcon, MDBAnimation
} from "mdbreact";
import "./style.css"



function Dashboard() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="1"></MDBCol>
      <MDBCol size="10" className="dashCard">
      <h1 className="dashTitle">Empowering Future Generations</h1>
              <p className="dashText">Making a difference through urban micro farming</p>
              <MDBRow className="whiteRow">
                <MDBCol><hr></hr><img className="growImgDash" src="https://i.imgur.com/gCIu3Wl.png"></img>
                <br></br>
                <MDBIcon className="arrowRight" icon="angle-down" /></MDBCol>
                
              </MDBRow>
              
            
      </MDBCol>
      <MDBCol size="1"></MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="1"></MDBCol>
      <MDBCol size="10" className="dashCardTwo">
              <h3 className="dashTextThree">
                <br></br>
                Welcome to Grow Orlando where we teach life, work and financial literacy skills through plant cultivation, and by providing jobs in urban farming to disadvantaged youth. </h3>
                <br></br>
                <br></br>
              <MDBRow>
                <MDBCol className="dashTextFour">
                  <h4><MDBIcon icon="align-justify" />  Eradicate Food Deserts</h4>
                  
              <p>Many underserved communities lack healthy and affordable food choices such as fresh fruits and vegetables, largely due to a lack of grocery stores, farmers’ markets, and healthy food providers.</p>
                <br></br>
                <h4><MDBIcon icon="users" /> Youth Personal and Professional Development</h4>
                <p>Youth who are prepared for adulthood are comfortable demonstrating fundamental life skills such as communication, cultural competence, conflict resolution, and self reliance.</p>
              <br></br>
              <h4><MDBIcon icon="tools" /> Economic Development</h4>
              <p>Building an economy happens when the residents and their neighbors get together to invest back into their community for growth and development. Grow Orlando places that investment directly into the individual and their growth so that they can help themselves, their family, and their neighbors.</p>
              </MDBCol>
                <MDBCol className="dashTextFour">
                  <h1>We Teach Life Skills Through Plant Cultivation.</h1>
                  <br></br>
                  <h4>Building our youths’ knowledge and skills around urban micro-farming, coupled with life skills such as decision-making, nutrition knowledge and financial literacy, can contribute to improved nutrition and food security for households and communities. Investing in our most at risk and disadvantaged teens is also an avenue to cultivating more participation in their families and communities.</h4>
                  <br></br>
                  <hr></hr>
          </MDBCol>
                
              </MDBRow>
              
            
      </MDBCol>
      <MDBCol size="1">
        
      </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="1"></MDBCol>
      <MDBCol size="10" className="dashCardTwo">
        <MDBRow>
          <MDBCol>
            
          <img className="dashImgs" src="https://i.imgur.com/ExifKjt.jpg"></img>
          <img className="dashImgs" src="https://i.imgur.com/7rhz005.jpg"></img>
          <img className="dashImgs" src="https://i.imgur.com/RHbdstG.jpg"></img>
          <img className="dashImgs" src="https://i.imgur.com/wJdgRuU.jpg"></img>
         <br></br>
         <br></br>
            <p>Grow Orlando Inc.
            <br></br>
            Suite #90
            <br></br>
            449 Westpoint Garden Circle
            <br></br>
            Winter garden FL 34787
            <br></br>
            (407) 283-1208
            <br></br>
            info@growOrlando.org</p>
        </MDBCol>
        </MDBRow>
       
              
            
      </MDBCol>
      <MDBCol size="1">
        
      </MDBCol>
      </MDBRow>
        </MDBContainer>

  );
}


export default Dashboard;
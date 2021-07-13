import React from "react";
import {
  MDBContainer, MDBRow, MDBCol, MDBIcon
} from "mdbreact";
import "./style.css"



function Dashboard() {
  return (
    <div>
        <div className="dashCard">
            <img className="growImgDash" src="https://i.imgur.com/gCIu3Wl.png"></img>
              <br></br>
         

          <hr></hr>
          <p className="lifeSkills">Using Plants to Grow Teens</p>
                 
                 <hr></hr>
                 <p className="lifeSkillsText">We empower students to learn life skills through plant cultivation; Instilling health, wealth, and work ethic through gainful employment in the agriculture industry. We believe sowing these seeds now will contribute to food and economic sovereignty for our households and communities for generations to come. </p>
                 <hr></hr>
                 <a href="/WhatWeDo" className="learnMore">learn more <MDBIcon icon="chevron-circle-right arrow" /></a>
                <hr></hr>
        </div>
     
      <div className="dashCardTwo" >
   
             
             
            </div>

        
      </div>

  );
}


export default Dashboard;
import React from "react";
import {
  MDBContainer, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBAnimation
} from "mdbreact";
import "./style.css"






function WhatWeDo() {
  return (
    <MDBContainer className="aboutDiv">
      <MDBRow>
        <MDBCol className="aboutTitle">
          <h1>Helping bring equity to all!</h1>
          <br></br>
          <h5>Food Apartheid: The systematic destruction of black self-determination to control one’s food, hyper-saturation of destructive foods and predatory marketing, and blatantly discriminatory corporate controlled food system that results in [communities of color] suffering from some of the highest rates of heart disease and diabetes of all time.</h5>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="3"><img className="tiledImgs" src="https://i.imgur.com/wJdgRuU.jpg"></img></MDBCol>
        <MDBCol size="3"><img className="tiledImgs" src="https://i.imgur.com/wfZrLJ4.jpg"></img></MDBCol>
        <MDBCol size="3"><img className="tiledImgs" src="https://i.imgur.com/8F5fpN0.jpg"></img></MDBCol>
        <MDBCol size="3"><img className="tiledImgs" src="https://i.imgur.com/JEZKUzz.jpg"></img></MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="10">
          <br></br>
          <br></br>
          <img className="growItForward" src="https://i.imgur.com/EHwqkns.jpg"></img>
        </MDBCol>
      </MDBRow>
      <MDBRow><MDBCol>
        <div className="textWrap">
        <img className="tiledImgs" src="https://i.imgur.com/EqKq6Ko.jpg"></img>
          <img className="tiledImgs" src="https://i.imgur.com/27hGiZC.png"></img>
          <img className="tiledImgs" src="https://i.imgur.com/EX3yYsy.jpg"></img>
          </div>
          <h1 className="aboutTextBottom">
            <br></br>Grow it Forward</h1><p className="aboutText"> is a network of micro farms in Orange County where volunteers from congregations and communities work side-by-side with paid student farmers under the guidance of a Grow Orlando farm coordinator. Grow Orlando hires youth from underserved communities who gain work experience, financial literacy and life skills while cultivating their own seeds of potential.
<br></br>
<br></br>
<h4 className="aboutTextBottom">Vision:</h4>
To eradicate food disparity in low wealth and under resourced communities
<br></br>
<br></br>
<h4 className="aboutTextBottom">Mission:</h4>
To advance economic and food sovereignty through a self-sustaining micro farm network, utilizing available land of faith and community partners
<br></br>
<br></br>
<h4 className="aboutTextBottom">Expansion:</h4>
 St. Luke’s Farm broke ground September 2020 as a pilot and model for the Grow it Forward network. Our 2021 plans include four new farm sites as Grow it Forward moves into Food Priority Areas in the West Orange County area.
Friends of the Farm: We are grateful to all for encouragement, marketing and funding the fruits of our labor:
No Kid Hungry, Dr. Phillips Rotary, Pammies Sammies, Edible Orlando, West Orange Observer, Spectrum News 13, and the Eagle Scout program
<br></br>
<br></br>
<h4 className="aboutTextBottom">Support our Growth:</h4> Shop our Saturday market or donate to our cause at st.lukes.org/growitforward. Click the GIVE button; choose Restoring Hope on the drop-down menu; and add “farm” in the notes section.
<br></br>
<br></br>
<h4 className="aboutTextBottom">Contact:</h4>
To be on our mailing list or for more information, contact Amy Winslow at awinslow@st.lukes.org 407.876.4991, ext. 297</p></MDBCol>

      </MDBRow>

    </MDBContainer>






  );
}

export default WhatWeDo;
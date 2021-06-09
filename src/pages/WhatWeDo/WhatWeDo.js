import React from "react";
import {
  MDBContainer, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBAnimation
} from "mdbreact";
import "./style.css"






function WhatWeDo() {
  return (
    <MDBContainer>
      <div className="aboutDivTop">
     <MDBRow>
       <MDBCol className="leftCol" size="6">WHAT WE DO
       <hr></hr>
       <p>When we piloted our program at the Tangelo Park YMCA, we gave each student a healthy plant. Their job was to bring it back in two weeks alive and healthy for $2. If, however, they were to tell us about the health properties of the plants (and add some marketing value to them) we would negotiate the rate.
        <br></br>
        <br></br>
        Two weeks later, only one student brought their plant and we Shark Tank'd the transaction in front of the others. When he received $3.25 that week, the next week everyone had a plant - some of which we’ve never seen before! But, believe it or not, every student knew about the healthy qualities of the plant - and some of them added some unique pots and added stories to increase the value. We thought, ‘Wow! All we needed to do was add incentive and the students were able to educate themselves about health.’</p>
      
       <img className="workingImg" src="https://i.imgur.com/N7DAoID.jpg"></img>
       </MDBCol>
       <MDBCol size="6">
         <img className="girlsImg" src="https://i.imgur.com/GZ216tJ.png?1"></img>
         <p>BUT HOW DO WE MAKE IT EQUITABLE?</p>
         <hr></hr>
         <p>With the demand for local produce and the environmental footprint urban farms develop, there is an arena that we work with that would make it equitable. Besides, that’s what I did. As a matter of fact, almost every successful person I talked with started their careers mowing lawns, shoveling snow, picking crops for grandma, etc. </p>
<p className="italicText">
Imagine if we attached this learning process to an age-old sustainable business model that molds champions?
<br></br>
<br></br>
What better way to teach the students the skills life demands than through some good hard work? 
<br></br>
<br></br>
What better way to raise a community than to provide jobs? 
<br></br>
<br></br>
What better way to instill a healthy wealthy mindset than to hire youth to farm fresh produce, teaching life skills along the way? 
</p>
</MDBCol>
     </MDBRow>
     </div>
     <div className="aboutDivBottom">
    <MDBRow>
      <MDBCol className="bottomCol">
      <img className="growLogo" src="https://i.imgur.com/gCIu3Wl.png"></img></MDBCol>
    </MDBRow>
    </div>
   
      
     
      <MDBRow>
      <MDBCol className="aboutCard">
        <MDBRow>
          <MDBCol>
          <p>Grow Orlando Inc.
            <br></br>
            (407) 283-1208
            <br></br>
            info@growOrlando.org
            <br></br>
            © Grow Orlando Inc. All Rights Reserved.</p>
        </MDBCol>
        </MDBRow>
       
              
            
      </MDBCol>
      </MDBRow>
    </MDBContainer>






  );
}

export default WhatWeDo;
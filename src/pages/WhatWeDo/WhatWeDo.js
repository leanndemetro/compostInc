import React from "react";
import {
  MDBContainer, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBAnimation
} from "mdbreact";
import "./style.css";
import GrowItForward from "../../components/GrowItForward/index";






function WhatWeDo() {
  return (
    <div>
    <img className="textWrap aboutImage" src="https://i.imgur.com/dGVH2G9.jpg"></img>
        <p className="aboutText">WHAT WE DO
            <hr></hr>
            When we piloted our program at the Tangelo Park YMCA, we gave each student a healthy plant. Their job was to bring it back in two weeks alive and healthy for $2. If, however, they were to tell us about the health properties of the plants (and add some marketing value to them) we would negotiate the rate.
              <br></br>
              <br></br>
              Two weeks later, only one student brought their plant and we Shark Tank'd the transaction in front of the others. When he received $3.25 that week, the next week everyone had a plant - some of which we’ve never seen before! But, believe it or not, every student knew about the healthy qualities of the plant - and some of them added some unique pots and added stories to increase the value. We thought, ‘Wow! All we needed to do was add incentive and the students were able to educate themselves about health.’</p>
   
    <img className="textWrapLeft aboutImage" src="https://i.imgur.com/8rIMPNO.jpg"></img>
        <p className="aboutTextTwo">
        BUT HOW DO WE MAKE IT EQUITABLE?
            <hr></hr>
            With the demand for local produce and the environmental footprint urban farms develop, there is an arena that we work with that would make it equitable. Besides, that’s what I did. As a matter of fact, almost every successful person I talked with started their careers mowing lawns, shoveling snow, picking crops for grandma, etc.
            </p>
            <p className="italicText">
              Imagine if we attached this learning process to an age-old sustainable business model that molds champions!
              <br></br>
              <br></br>
              What better way to teach the students the skills life demands than through some good hard work?
              <br></br>
              <br></br>
              What better way to raise a community than to provide economic incentive?
              <br></br>
              <br></br>
              What better way to instill a healthy wealthy mindset than to hire youth to farm fresh produce, teaching life skills along the way?
            </p>
            <br></br>
        <p className="aboutTextThree"><img className="growLogo" src="https://i.imgur.com/gCIu3Wl.png"></img>
         <br></br>
         <br></br>
            With Grow Orlando, access to nutritious food comes from our farm, affordability is increased with financial stimulus and literacy, and the community gets to enjoy the harvest of healhy produce sourced locally from their own youth and neighborhood farmers.
            </p>
    <GrowItForward />

    </div>






  );
}

export default WhatWeDo;
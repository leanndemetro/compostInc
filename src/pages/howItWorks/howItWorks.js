import React from "react";
import {
  MDBContainer, MDBRow, MDBCol, MDBCard
} from "mdbreact";
import Carousel from "../../components/Carousel/Carousel"
import "./style.css"





function HowItWorks ()  {
    return (
        <MDBContainer>
        <MDBRow>
          <MDBCol>
              <MDBContainer>
            <p className="howWorks">WHAT IS ANEROBIC DISGESTION?</p>
            <br></br>
            <img className="howTextWrap" src="https://i.imgur.com/pJ18ue8.jpg"></img>
            <p className="howTextTop">Anaerobic digestion is a sequence of processes by which microorganisms break down biodegradable material in the absence of oxygen. The process is used for industrial or domestic purposes to manage waste or to produce fuels. 
            <br></br>
            <br></br>
            We use this technology to decrease food and animal wastes within our community by converting them to compost to be used as fertilizer or fuel.</p>
            <br></br>
            <br></br>
            <br></br>
            <p className="howWorks">HOW DOES IT WORK?</p>
            <br></br>
            <img className="howTextWrapLeft" src="https://i.imgur.com/IsETBEg.jpg?1"></img>
            <ul>
            <li><p className="howText">Upon contact, we will schedule a date for a site visit. Our technicians will determine the best course of action to take in order to meet your particular installation needs.
            <br></br>
            <br></br>
           Dates for installation and training will be decided at the conclusion of this site visit. </p>
            </li>
            <br></br>
            <li><p className="howText"> Our team will install your anerobic digestor, train your staff, students, or volunteers, take care of ALL maintenence, and waste removal - completely free of charge! 
           </p>
           <br></br>
           <li><p className="howText"> Using our web application, monitoring your machinery is simple and worry-free! Simply dispose of all food or animal wastes within the digestor and let your power bill and the environment reap the benefits</p></li>
            <br></br>
            <br></br>
            </li>
            </ul>
            <p className="howTextBtm">
           To begin your journey into economical and environmentally-friendly waste management with us here at Compost Incorporated, please <a href="/Contact">contact us.</a></p>
            
            </MDBContainer>
             
              </MDBCol>
              </MDBRow>
              </MDBContainer>
                    
                  
    

      

    );
}

export default HowItWorks;
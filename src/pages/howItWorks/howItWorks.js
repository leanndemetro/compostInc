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
            <MDBCard>
              <MDBContainer>
            <p className="howWorks">HOW IT WORKS</p>
            <hr></hr>
            <br></br>
            <br></br>
            <img className="howTextWrap" src="https://i.imgur.com/Athg0g9.jpg?1"></img>
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
              </MDBCard>
              </MDBCol>
              </MDBRow>
              </MDBContainer>
                    
                  
    

      

    );
}

export default HowItWorks;
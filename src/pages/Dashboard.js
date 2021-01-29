import React from "react";
import {
   MDBContainer, MDBRow, MDBCol, MDBCard
} from "mdbreact";



function Dashboard () {
    return (
         <MDBContainer>
          <MDBRow>
            <MDBCol>
              <MDBCard>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol>
                      <div className="cardTitle">
                        <div className="mainTitle">Here at Compost Inc.</div>
                        <p>we have a passion for sustainability, community and youth outreach, and how the two can intersect to change our planet for the better.</p>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <div className="linkImg">
                      <div className="img__wrap">
                      <a href="/HowItWorks"><img className="img-fluid" src="https://i.imgur.com/alIHZq3.jpg" waves />
                        <p className="img__description">HOW IT WORKS</p></a>
                    </div>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <MDBContainer className>
                  <MDBRow>
                  <MDBCol>
                      <div className="cardTitle">
                        <img className="img-fluid" src="https://i.imgur.com/4IF7ukI.jpg" waves />
                        <p>seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress.</p>
                      </div>
                    </MDBCol>
                    <MDBCol>
                      <div className="linkImg">
                      <div className="img__wrap">
                      <a href="/GetInvolved"><img className="img-fluid" src="https://images.unsplash.com/photo-1566040924976-f837330d1a5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" waves />
                        <p className="img__description">GET INVOLVED</p></a>
                    </div>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol>
                      <div className="linkImg">
                      <div className="img__wrap">
                      <a href="/Contact"><img className="img-fluid" src="https://i.imgur.com/zzjyKfm.jpg" waves />
                        <p className="img__description">CONTACT US</p></a>
                    </div>
                      </div>
                    </MDBCol>
                    <MDBCol>
                      <div className="cardTitle">
                        <img className="img-fluid" src="https://i.imgur.com/EXqs3OQ.jpg" waves />
                        <p>Brussels chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify. chestnut gourd swiss chard</p>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
    );
  }


export default Dashboard;
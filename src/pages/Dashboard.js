import React from "react";
import {
  MDBContainer, MDBRow, MDBCol, MDBCard
} from "mdbreact";



function Dashboard() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBCard>
            <MDBContainer>
              <MDBRow>
                <MDBCol>
                    <div className="mainTitle">Here at Compost Inc.</div></MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                <div className="linkImg"><img className="TextWrap img-fluid" src="https://images.unsplash.com/photo-1566040924976-f837330d1a5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" waves />
                    <p className="mainText"> Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.</p>
                     </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                <a href="/HowItWorks"><p className="img__description">HOW IT WORKS</p></a>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <hr></hr>
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
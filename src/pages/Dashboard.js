import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import {
   MDBContainer, MDBRow, MDBCol, MDBCard
} from "mdbreact";



class Dashboard extends Component {
  render() {
    return (
      <Router>
         <MDBContainer>
          <MDBRow>
            <MDBCol>
              <MDBCard>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol>
                      <div className="cardTitle">
                        <img className="img-fluid" src="https://i.imgur.com/1lKMVIW.jpg" waves />
                        <p>seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame.</p>
                      </div>
                    </MDBCol>
                    <MDBCol>
                      <div className="linkImg">
                        <img className="img-fluid" src="https://i.imgur.com/alIHZq3.jpg" waves />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol>
                      <div className="linkImg">
                        <img className="img-fluid" src="https://images.unsplash.com/photo-1566040924976-f837330d1a5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" waves />
                      </div>
                    </MDBCol>
                    <MDBCol>
                      <div className="cardTitle">
                        <img className="img-fluid" src="https://i.imgur.com/4IF7ukI.jpg" waves />
                        <p>seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify.</p>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol>
                      <div className="cardTitle">
                        <img className="img-fluid" src="https://i.imgur.com/EXqs3OQ.jpg" waves />
                        <p>seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify.</p>
                      </div>
                    </MDBCol>
                    <MDBCol>
                      <div className="linkImg">
                        <img className="img-fluid" src="https://i.imgur.com/zzjyKfm.jpg" waves />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>


      </Router>
    

      

    );
  }
}

export default Dashboard;
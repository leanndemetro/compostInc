import React, { Component } from "react";
import {
    MDBRow,
    MDBIcon, MDBCol
} from "mdbreact";
import "./style.css"

class GrowItForward extends Component {


    render() {
        return (
            <div className="aboutDivOverlay">
                <MDBRow>
                    <MDBCol>
                        <br></br>
                        <br></br>
                        <img className="growItForward" src="https://i.imgur.com/EHwqkns.jpg"></img>
                        <p></p>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="1"></MDBCol>
                    <MDBCol className="aboutTextBottom" size="10">
                        <h6>
                            We are excited about the progress of our Grow it Forward micro farm collaboration with St. Luke’s Orlando UMC. The early success of this pilot project is providing the impetus and expansion for additional  micro farms in the West Orange County area this year!

                            Our goal for Grow it Forward is to have a network of micro farms in Orange County where volunteers from congregations and communities work side-by-side with paid student farmers under the guidance of a Grow Orlando farm coordinator.

                            Our Vision for this micro farm network is:  To eradicate food disparity in low wealth and under resourced communities.

                            Our Mission is:  To advance economic and food sovereignty through a self-sustaining micro farm network, utilizing available land of faith and community partners.</h6></MDBCol>

                    <MDBCol size="1"></MDBCol>
                </MDBRow>
                <MDBRow><MDBCol>
                    <div className="textWrap">
                        <img className="tiledImgs" src="https://i.imgur.com/4nv2sHo.jpg"></img>
                        <img className="tiledImgs" src="https://i.imgur.com/1ZEWPD2.jpg"></img>
                        <img className="tiledImgs" src="https://i.imgur.com/27hGiZC.png"></img>
                        <img className="tiledImgs" src="https://i.imgur.com/8NmtYYR.jpg"></img>

                    </div>
                    <hr></hr>
                    <h4 className="aboutText">
                        <br></br>Grow it Forward</h4><p className="aboutText"> is a network of micro farms in Orange County where volunteers from congregations and communities work side-by-side with paid student farmers under the guidance of a Grow Orlando farm coordinator. Grow Orlando hires youth from underserved communities who gain work experience, financial literacy and life skills while cultivating their own seeds of potential.
                        <br></br>
                        <br></br>
                        <h4 className="aboutTextBottom"><MDBIcon icon="caret-right" /> Vision</h4>
                        To eradicate food disparity in low wealth and under resourced communities
                        <br></br>
                        <br></br>
                        <h4 className="aboutTextBottom"><MDBIcon icon="caret-right" /> Mission</h4>
                        To advance economic and food sovereignty through a self-sustaining micro farm network, utilizing available land of faith and community partners
                        <br></br>
                        <br></br>
                        <h4 className="aboutTextBottom"><MDBIcon icon="caret-right" /> Expansion</h4>
                        St. Luke’s Farm broke ground September 2020 as a pilot and model for the Grow it Forward network. Our 2021 plans include four new farm sites as Grow it Forward moves into Food Priority Areas in the West Orange County area.
                        Friends of the Farm: We are grateful to all for encouragement, marketing and funding the fruits of our labor:
                        No Kid Hungry, Dr. Phillips Rotary, Pammies Sammies, Edible Orlando, West Orange Observer, Spectrum News 13, and the Eagle Scout program
                        <br></br>
                        <br></br>
                        <h4 className="aboutTextBottom"><MDBIcon icon="caret-right" /> Support our Growth</h4> Shop our Saturday market or donate to our cause at st.lukes.org/growitforward. Click the GIVE button; choose Restoring Hope on the drop-down menu; and add “farm” in the notes section.
                        <br></br>
                        <br></br>
                        <h4 className="aboutTextBottom"><MDBIcon icon="caret-right" /> Contact</h4>
                        To be on the Grow it Forward mailing list or for more information, contact Amy Winslow at awinslow@st.lukes.org 407.876.4991, ext. 297 - or visit the contact page via the link below.</p>
                </MDBCol></MDBRow>
                <MDBRow>
          <MDBCol> <hr></hr>
            <a href="/Contact" className="contactUs">contact us <MDBIcon icon="chevron-circle-right arrow" /></a>
              <hr></hr></MDBCol>
        </MDBRow>
            </div>
        
        );
    }
}

export default GrowItForward;
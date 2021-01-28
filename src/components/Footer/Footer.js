import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import "./style.css"


class Footer extends Component {
    render() {
        return (
            <div className="footer"><MDBFooter className="font-small pt-4 mt-4">
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        <MDBRow>
                            <MDBCol></MDBCol>
                            <MDBCol>
                                <MDBRow>
                                    <MDBCol><a target="_blank" href="https://www.facebook.com/GrowOrlandoInc/"><MDBIcon className="icons" fab icon="facebook-square" /></a> </MDBCol>
                                    <MDBCol><a target="_blank" href="https://twitter.com/grow_orlando"><MDBIcon className="icons" fab icon="twitter" /></a>
                                        <br></br>
                                        <br></br>
                                     &copy; {new Date().getFullYear()} Copyright</MDBCol>
                                    <MDBCol><a target="_blank" href="https://www.instagram.com/grow_orlando/?hl=en"><MDBIcon className="icons" fab icon="instagram" /></a></MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol></MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </MDBFooter>
            </div>
        );
    }
}

export default Footer;
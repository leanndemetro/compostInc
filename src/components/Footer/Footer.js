import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import "./style.css"


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                                    <p>Grow Orlando Inc.
                                        <br></br>
                                        (407) 283-1208
                                        <br></br>
                                        groworlando@gmail.com
                                        <br></br>
                                        © Grow Orlando Inc. All Rights Reserved.</p>
                                         
                                <a target="_blank" href="https://www.facebook.com/GrowOrlandoInc/"><MDBIcon className="icons" fab icon="facebook-square" /></a> 
                                    <a target="_blank" href="https://twitter.com/grow_orlando"><MDBIcon className="icons" fab icon="twitter" /></a>
                                    <a target="_blank" href="https://www.instagram.com/grow_orlando/?hl=en"><MDBIcon className="icons" fab icon="instagram" /></a>
                           </div>
        );
    }
}

export default Footer;
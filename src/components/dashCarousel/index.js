import React, { Component, useState } from "react";
import "./style.css";

class dashCarousel extends Component {

    
    //create variable called images and set it equal to an array of img src links
    constructor(props) {
        super(props);
        this.state = {
            src: "https://i.imgur.com/x5sPnPO.jpg",

        };
    }

    //when the page loads/DOM renders 
    componentDidMount() {
       
        this.updateSrc();
    }

    updateSrc() {


        //every three seconds
        setInterval(function () {

            var srcSources = ["https://i.imgur.com/DZoSSkb.jpg", "https://i.imgur.com/x5sPnPO.jpg",
                "https://i.imgur.com/5buupAG.jpg"]

            //map over the srcSources array
            //pull out a random item from the array
            //set it equal to a variable called currentState
            var currentState = (srcSources[Math.floor(Math.random() * srcSources.length)]);
       
    //    console.log(currentState);
            
        }, 3000);

      

    }
            




    render() {

        return (
            <div >
                <img className="dashImg" src={this.state.src}></img>
            </div >
        );


    }

}

export default dashCarousel;

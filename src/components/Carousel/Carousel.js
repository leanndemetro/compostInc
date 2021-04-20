import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import "./style.css"


class Carousel extends Component {
    render() {
  return (
<MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={false}
        className="z-depth-2"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://i.imgur.com/0aEUTdF.jpg"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://i.imgur.com/zzjyKfm.jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://i.imgur.com/0RRyPaL.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}
}

export default Carousel;
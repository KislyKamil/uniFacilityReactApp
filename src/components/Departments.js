import React from "react";
import {
    MDBCarousel,
    MDBCarouselCaption,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBMask,
    MDBContainer
} from "mdbreact";

const Departments = () => {
    return (

        <div className="departments-main">
            <MDBContainer>
                <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                >
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="https://source.unsplash.com/1000x510/?it,computers,science"
                                    alt="First slide"
                                />
                                <MDBMask overlay="black-light"/>
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">Zakład systemów komputerowych</h3>
                                <p>krótki opis zakładu</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="https://source.unsplash.com/1000x530/?it,computers,science"
                                    alt="Second slide"
                                />
                                <MDBMask overlay="black-light"/>
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">Zakład architektury sieci</h3>
                                <p>krótki opis zakładu</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="https://source.unsplash.com/1000x520/?it,computers,science"
                                    alt="Third slide"
                                />
                                <MDBMask overlay="black-light"/>
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">Zakład algorytmiki</h3>
                                <p>krótki opis zakładu</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
        </div>
    )
}
export default Departments;
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
                                    src="https://images.unsplash.com/photo-1610972777493-35b54fe8c777?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=510&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1000"
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
                                    src="https://images.unsplash.com/photo-1605192020788-24d8eae86e59?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=510&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1000"
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
                                    src="https://images.unsplash.com/photo-1602052577122-f73b9710adba?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=510&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1000"
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
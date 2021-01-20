import React from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBContainer, MDBIcon,
    MDBRow
} from "mdbreact";
import teacher from "../assets/img/svg/teacher.svg"
import building from "../assets/img/svg/building.svg"

const About = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol className={"text-center"} style={{"paddingTop": '50px', 'paddingBottom': '100px'}}>
                    <img src={building} style={{ 'width': '200px'}}/>
                    <h4>O instytucie</h4>
                </MDBCol>

            </MDBRow>
            <MDBRow center>
                <MDBCol md='8'>
                    <MDBCard
                        className='card-image'
                        style={{
                            backgroundImage:
                                "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                        }}
                    >
                        <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                            <div>
                                <h5 className='pink-text'>
                                    <MDBIcon icon='desktop' /> Zakład algorytmiki
                                </h5>
                                <MDBCardTitle tag='h3' className='pt-2'>
                                    <strong></strong>
                                </MDBCardTitle>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                                    officia accusamus minus error nisi architecto nulla ipsum
                                    dignissimos. Odit sed qui, dolorum!
                                </p>
                                <MDBBtn color='pink'>
                                    <MDBIcon icon='clone left' /> Czytaj więcej
                                </MDBBtn>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='8' >
                    <MDBCard
                        className='card-image'
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1602052577122-f73b9710adba?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=510&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1000')"
                        }}
                    >
                        <div className='text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4'>
                            <div>
                                <h5 className='orange-text'>
                                    <MDBIcon icon='desktop' /> Zakład systemów komputerowych
                                </h5>
                                <MDBCardTitle tag='h3' className='pt-2'>
                                    <strong></strong>
                                </MDBCardTitle>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                                    officia accusamus minus error nisi architecto nulla ipsum
                                    dignissimos. Odit sed qui, dolorum!
                                </p>
                                <MDBBtn color='deep-orange'>
                                    <MDBIcon icon='clone left' /> Czytaj więcej
                                </MDBBtn>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='8' >
                    <MDBCard
                        className='card-image'
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1605192020788-24d8eae86e59?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=510&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1000')"
                        }}
                    >
                        <div className='text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4'>
                            <div>
                                <h5 className='green-text'>
                                    <MDBIcon icon='desktop' /> Zakład architektury sieci
                                </h5>
                                <MDBCardTitle tag='h3' className='pt-2'>
                                    <strong></strong>
                                </MDBCardTitle>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                                    officia accusamus minus error nisi architecto nulla ipsum
                                    dignissimos. Odit sed qui, dolorum!
                                </p>
                                <MDBBtn color='deep-orange'>
                                    <MDBIcon icon='clone left' /> Czytaj więcej
                                </MDBBtn>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}
export default About;
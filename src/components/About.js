import React from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBContainer,
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
            <MDBRow>
                <MDBCol className={"text-center"}>
                    About
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}
export default About;
import React from "react";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import teacher from "../assets/img/svg/teacher.svg"

const About = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol className={"text-center"} style={{"paddingTop": '50px', 'paddingBottom': '100px'}}>
                    <img src={teacher} style={{ 'width': '300px'}}/>
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
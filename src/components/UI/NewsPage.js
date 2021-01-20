import React from 'react';
import {MDBCard, MDBCardBody, MDBCardFooter, MDBCardText, MDBCardTitle, MDBCol, MDBRow} from "mdbreact";

const NewsPage = (props) => {
    return (
        <MDBRow>
            <MDBCol>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle tag="h5">{props.text1}</MDBCardTitle>
                        <MDBCardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum
                            orci in faucibus lobortis. Sed a mollis mi, id vestibulum urna. Praesent ante enim,
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter small muted>
                        07.01.2021
                    </MDBCardFooter>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle tag="h5">{props.text2}</MDBCardTitle>
                        <MDBCardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum
                            orci in faucibus lobortis. Sed a mollis mi, id vestibulum urna. Praesent ante enim,
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter small muted>
                        01.01.2021
                    </MDBCardFooter>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
}

export default NewsPage
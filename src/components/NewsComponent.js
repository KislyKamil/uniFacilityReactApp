import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBCardGroup,
    MDBContainer,
    MDBRow, MDBCol
} from "mdbreact";
import Pagination from "./Pagination";

const NewsComponent = () => {

    return (
        <div className="news-main">
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle tag="h5">Nowy dziekan</MDBCardTitle>
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
                                <MDBCardTitle tag="h5">Sesja egzaminacyjna</MDBCardTitle>
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
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle tag="h5">Obrona prac dyplomowych</MDBCardTitle>
                                <MDBCardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum
                                    orci in faucibus lobortis. Sed a mollis mi, id vestibulum urna. Praesent ante enim,
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardFooter small muted>
                                18.12.2020
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle tag="h5">Godziny rektorskie</MDBCardTitle>
                                <MDBCardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum
                                    orci in faucibus lobortis. Sed a mollis mi, id vestibulum urna. Praesent ante enim,

                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardFooter small muted>
                                24.11.2020
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle tag="h5">Spotaknie integracyjne</MDBCardTitle>
                                <MDBCardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum
                                    orci in faucibus lobortis. Sed a mollis mi, id vestibulum urna. Praesent ante enim,
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardFooter small muted>
                                01.11.2020
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle tag="h5">Otwarta rekrutacja</MDBCardTitle>
                                <MDBCardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum
                                    orci in faucibus lobortis. Sed a mollis mi, id vestibulum urna. Praesent ante enim,

                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardFooter small muted>
                                21.10.2020
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol className="offset-md-2">
                        <Pagination/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>

    )
}

export default NewsComponent;
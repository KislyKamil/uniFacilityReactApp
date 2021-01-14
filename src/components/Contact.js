import React from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText
} from 'mdbreact';

const Contact = () => {
    return (

        <div className="contact">
            <div className="inf-dt">
                <MDBContainer>
                    <MDBCard style={{width: "34rem", marginTop: "1rem"}}>
                        <MDBCardBody>
                            <MDBCardTitle>Kontakt</MDBCardTitle>
                            <MDBCardTitle tag="h6" sub className="mb-2 text-muted">
                                <p>Alicja Kotwica</p>
                            </MDBCardTitle>
                            <MDBCardText>
                                <p>zadzwoń: 32 269 18 50</p>
                                <p>napisz: alicja.kotwica@us.edu.pl</p>
                                <p>odwiedź: Katowice, ul. Skargi 12 pok. 2</p>
                                <p>Pon 11:00 - 15:00</p>
                                <p>Wt 11:00- 14:00</p>
                                <p>Śr nieczynne</p>
                                <p>Czw 8:00 - 12:00</p>
                                <p>Pt 11:00 - 14:00</p>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBContainer>
            </div>
            <div className="form-contact">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <form>
                                <p className="h5 text-center mb-4">Napisz do nas</p>
                                <div className="grey-text">
                                    <MDBInput label="Imię" icon="user" group type="text" validate error="wrong"
                                              success="right"/>
                                    <MDBInput label="Email" icon="envelope" group type="email" validate
                                              error="wrong"
                                              success="right"/>
                                    <MDBInput label="Temat" icon="tag" group type="text" validate error="wrong"
                                              success="right"/>
                                    <MDBInput type="textarea" rows="2" label="Treść wiadomości" icon="pencil-alt"/>
                                </div>
                                <div className="text-center">
                                    <MDBBtn outline color="secondary">
                                        Wyślij
                                        <MDBIcon far icon="paper-plane" className="ml-1"/>
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </div>
    )
}
export default Contact;
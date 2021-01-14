import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter color="indigo" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">Wydział informatyki</h5>
                        <p>
                            Katowice 40-000
                        </p>
                        <p>
                            ul. Polna 7
                        </p>
                        <p>
                            tel: +48 500 500 500
                        </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">Odnośniki</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">Strona główna</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Kontakt</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 3</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;
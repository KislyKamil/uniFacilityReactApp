import React from "react";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBFooter,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCollapse, MDBCardText
} from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter color="indigo" className="font-small pt-4 mt-4">
            <MDBContainer className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">Wydział informatyki</h5>
                        <span>Katowice, ul. Skargi 12</span><br/>
                        <span>zadzwoń: 32 269 18 50</span><br/>
                        <span>Pon 11:00 - 15:00</span><br/>
                        <span>Wt 11:00- 14:00</span><br/>
                        <span>Śr nieczynne</span><br/>
                        <span>Czw 8:00 - 12:00</span><br/>
                        <span>Pt 11:00 - 14:00</span>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">Odnośniki</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="/">Strona główna</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/Contact">Kontakt</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/News">Aktualności</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/About">O instytucie</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/Employees">Pracownicy</a>
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
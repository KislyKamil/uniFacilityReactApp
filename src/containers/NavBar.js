import React, {Component} from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
// import {BrowserRouter as Router} from 'react-router-dom';

class NavbarPage extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
                <MDBNavbar color="indigo" dark expand="md">
                    <MDBNavbarBrand>
                        <strong className="white-text">Wydział Informatyki</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse}/>
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active>
                                <MDBNavLink to="/News">Aktualności</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/Research">Badania</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/Recruitment">Rekrutacja</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <span className="mr-2">Wydział</span>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem href="/About">O instytucie</MDBDropdownItem>
                                        <MDBDropdownItem href="/Departments">Działy</MDBDropdownItem>
                                        <MDBDropdownItem href="/Contact">Kontakt</MDBDropdownItem>
                                        <MDBDropdownItem href="/Employees">Pracownicy</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
        );
    }
}

export default NavbarPage;
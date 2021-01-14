import React, {Component} from "react";
import {
    MDBBtn,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBJumbotron,
    MDBModal,
    MDBModalBody, MDBModalFooter,
    MDBModalHeader,
    MDBRow
} from "mdbreact";


class Recruitment extends Component {

    getParamsFromUrl = function () {

        const params = new URLSearchParams(window.location.href.split('?')[1]);

        const map = {
            'inzio': 'Inżynierskie - Inżynieria oprogramowania',
            'mgrio': 'Magisterskie - Inżynieria oprogramowania',
            'inzpaw': 'Inżynierskie - Programowanie aplikacji webowych',
            'mgrpaw': 'Magisterskie - Programowanie aplikacji webowych',
        };

        return map[params.get('recr')];
    };

    onClick = (e) => {
      console.log(e);
      this.toggle();
    };

    state = {
        modal: false
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    close = () => {
        window.location.href = '/';
    }

    render() {
        return (
            <MDBJumbotron fluid>
                <MDBContainer className={"text-center"}>
                    <h2 className="display-4">Rekrutacja na kierunek: </h2>
                    <strong>{this.getParamsFromUrl()}</strong>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="3">
                            </MDBCol>
                            <MDBCol md="6">
                                <form>
                                    {/*<p className="h5 text-center mb-4">Sign in</p>*/}
                                    <div className="grey-text">
                                        <MDBInput label="Imię" group />
                                        <MDBInput label="Nazwisko"  group    />
                                        <MDBInput label="Email"  group type="email"   />
                                        <MDBInput label="Pesel"  group   />
                                    </div>
                                    <div className="text-center">
                                        <MDBBtn onClick={this.onClick}>Zapisz się!</MDBBtn>
                                    </div>
                                </form>
                            </MDBCol>
                            <MDBCol md="3">
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                        <MDBModalHeader toggle={this.toggle}>Zapisy</MDBModalHeader>
                        <MDBModalBody>
                            Udało ci się zapisać na kierunek <p className={"lead"}>{this.getParamsFromUrl()}!</p>
                            Na maila otrzymasz dalsze instrukcje.
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="primary" onClick={this.close}>OK</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                </MDBContainer>
            </MDBJumbotron>
        )
    }

}

export default Recruitment;
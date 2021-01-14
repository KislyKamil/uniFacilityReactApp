import React, {Component} from "react";
import quiz from  '../assets/img/svg/quiz.svg';
import {MDBBtn, MDBCol, MDBContainer, MDBRow,} from "mdbreact";

class Register extends Component {

    state = {
        selectedLevel: '',
        speciality: '',
        disabled: true,
        options1: [
            {
                text: 'Inżynierskie',
                value: 'inz',
            },
            {
                text: 'Magisterskie',
                value: 'mgr',
            }
        ]
    };

    onSelectChanged = (e) => {
        this.setState({
            ...this.state,
            selectedLevel: e.target.value,
            speciality: '',
        })
    }

    onSelect2Changed = (e) => {
        this.setState({
            ...this.state,
            speciality: e.target.value,
            disabled: false,
        })
    }

    onButtonClick = (e) => {
        window.location.href = '/Recruitment?recr=' + this.state.selectedLevel + this.state.speciality;
    };

    getOptions(level) {

        const map = {
            inz: [
                {
                    text: 'Inżynieria oprogramowania',
                    value: 'io',
                },
                {
                    text: 'Projektowanie aplikacji webowych',
                    value: 'paw',
                }
            ],
            mgr: [
                {
                    text: 'Inżynieria oprogramowania',
                    value: 'io',
                },
                {
                    text: 'Projektowanie aplikacji webowych',
                    value: 'paw',
                }
            ]
        };

        if(!Object.keys(map).includes(level)) return [];

        return map[level];
    }

    render() {

        return (
            <div style={{'width': '100vw', 'background': '#F1F2F2', 'paddingTop': '100px', 'paddingBottom': '100px'}}>
                <MDBContainer className={"lg"}>
                    <MDBRow>
                        <MDBCol lg={6} className={"text-center"}>
                            <img src={quiz} style={{'width': '200px'}}/>
                            <h3 className="title">Dołącz do nas!</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </MDBCol>
                        <MDBCol lg={6} className={"text-center"} >
                            <h3 className={"title"}>Wybierz studia dla siebie:</h3>
                            <p>Stopień:</p>
                            <select className="browser-default custom-select" value={this.state.selectedLevel} onChange={this.onSelectChanged}>
                                <option value={null}>Wybierz stopień...</option>
                                { this.state.options1.map((opt, inx) => {
                                    return (
                                        <option value={opt.value} key={inx}>{ opt.text }</option>
                                    )
                                })}
                            </select>
                            <p>Specjalność:</p>
                            <select className="browser-default custom-select" value={this.state.speciality} onChange={this.onSelect2Changed}>
                                <option value={null}>Wybierz specjalność...</option>
                                { this.getOptions(this.state.selectedLevel).map((opt, inx) => {
                                    return (
                                        <option value={opt.value} key={inx}>{ opt.text }</option>
                                    )
                                })}
                            </select>

                            <MDBBtn disabled={this.state.disabled} onClick={this.onButtonClick}>Dołącz</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }

}

export default Register;
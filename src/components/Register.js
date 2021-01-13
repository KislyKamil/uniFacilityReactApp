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

    getOptions(level) {

        const map = {
            inz: [
                {
                    text: 'Inż1',
                    value: 'inz',
                },
                {
                    text: 'Inż2',
                    value: 'inz2',
                }
            ],
            mgr: [
                {
                    text: 'Mgr1',
                    value: 'mgr1',
                },
                {
                    text: 'Mgr2',
                    value: 'mgr2',
                }
            ]
        };

        if(!Object.keys(map).includes(level)) return [];

        return map[level];
    }

    render() {

        return (
            <div style={{'width': '100vw', 'background': '#F1F2F2', 'paddingTop': '100px'}}>
                <MDBContainer className={"lg"}>
                    <MDBRow>
                        <MDBCol lg={6} className={"text-center"}>
                            <img src={quiz} style={{'width': '200px'}}/>
                            <p>opis opis opis</p>
                        </MDBCol>
                        <MDBCol lg={6} className={"text-center"} >
                            <p>Wybierz studia dla siebie:</p>
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

                            <MDBBtn disabled={this.state.disabled}>Dołącz</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }

}

export default Register;
import React from "react";
import {MDBCardHeader, MDBContainer} from "mdbreact";
import Table from "./UI/Table";

const Research = () => {
    return (

        <div className="research-main">
            <MDBContainer>
                <MDBCardHeader>
                    <p>Lista Badań</p>
                </MDBCardHeader>

                <Table/>
            </MDBContainer>
        </div>
    )
}
export default Research;
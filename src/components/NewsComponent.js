import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBContainer,
    MDBRow, MDBCol
} from "mdbreact";
import Pagination from "./Pagination";
import NewsPage from "./UI/NewsPage";

const NewsComponent = () => {

    return (
        <div className="news-main">
            <MDBContainer>
                <NewsPage text1={"Nowy dziekan"} text2={"Sesja egzaminacyjna"}/>
                <NewsPage text1={"Godziny rektorskie"} text2={"Obrona prac dyplomowych"}/>
                <NewsPage text1={"Dzień otwarty"} text2={"Przerwa świąteczna"}/>
                <NewsPage text1={"Otwarta rekrutacja"} text2={"Zmiany w dziekanacie"}/>
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
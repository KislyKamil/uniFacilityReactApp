import React from 'react'
import {MDBContainer} from "mdbreact";
import Register from "./Register";
import Departments from "./Departments";
import HomePageNews from "./UI/HomePageNews";

const Home = () => {


    return (
        <div>
            <Register></Register>
            <Departments></Departments>
            <MDBContainer>
                <HomePageNews text1={"Ostatania widomość"} text2={"Ostatania widomość2"}/>
                <HomePageNews text1={"Ostatania widomość"} text2={"Ostatania widomość2"}/>
            </MDBContainer>

        </div>
    )
}

export default Home;
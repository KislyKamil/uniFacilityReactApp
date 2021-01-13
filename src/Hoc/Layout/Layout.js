import React, {Component} from 'react';
import Aux from '../Auxiliary/Auxiliary';
import NavbarPage from "../../containers/NavBar";
import Footer from "../../components/Footer";


class Layout extends Component {


    render() {

        return (
            <Aux>
                <NavbarPage/>
                <main className="Content">
                    {this.props.children}
                </main>
                <Footer/>
            </Aux>
        )
    }
}

export default Layout;
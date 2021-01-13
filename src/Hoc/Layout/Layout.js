import React, {Component} from 'react';
import Aux from '../Auxiliary/Auxiliary';
import NavbarPage from "../../containers/NavBar";


class Layout extends Component {


    render() {

        return (
            <Aux>
                <NavbarPage/>
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;
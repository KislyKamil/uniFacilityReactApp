import React, {Component} from "react";
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Layout from "./Hoc/Layout/Layout";

class App extends Component {

    render() {

        let routes = (
            <Switch>
                {/* <Route path="/" component={Home} /> */}
            </Switch>
        )
        return (
            <div className="app">
                <Layout>
                    {routes}
                </Layout>
            </div>
        )
    }
}

export default App;

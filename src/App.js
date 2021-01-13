import React, {Component} from "react";
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Layout from "./Hoc/Layout/Layout";
import Home from "./components/Home";
import Research from "./components/Research";
import Recruitment from "./components/Recruitment";
import About from "./components/About";
import Employees from "./components/Employees";
import Contact from "./components/Contact";
import Departments from "./components/Departments";


class App extends Component {

    render() {

        let routes = (
            <Switch>
                <Route path="/News" component={Home}/>
                <Route path="/Research" component={Research}/>
                <Route path="/Recruitment" component={Recruitment}/>
                <Route path="/About" component={About}/>
                <Route path="/Employees" component={Employees}/>
                <Route path="/Contact" component={Contact}/>
                <Route path="/Departments" component={Departments}/>
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

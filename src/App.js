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
import NewsComponent from "./components/NewsComponent";
import {Redirect} from "react-router";


class App extends Component {

    render() {

        let routes = (
            <Switch>
                <Route path="/News" exact component={NewsComponent}/>
                <Route path="/Research" exact component={Research}/>
                <Route path="/Recruitment" exact component={Recruitment}/>
                <Route path="/About" exact component={About}/>
                <Route path="/Employees" exact component={Employees}/>
                <Route path="/Contact" exact component={Contact}/>
                <Route path="/Home" exact component={Home}/>
                <Redirect exact from="/" to="Home"/>
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

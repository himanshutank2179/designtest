import React, {Component} from 'react';
import './sass/style.scss'
import logo from './img/logo.png';
import logo_sticky from './img/logo_sticky.png';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from "./components/layout/Landing";
import Login from "./components/authentication/Login";
import Header from './components/common/Header';


class App extends Component {
    render() {
        return (
            <Router>
                <div id="page">

                    <Switch>
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/login" component={Login}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;

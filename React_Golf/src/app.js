import React, { Component } from 'react';
import { render } from 'react-dom';
import CalcForm from './HandicapCalc';
import Jumbo from './Jumbo';
import MyNav from './MyNav';
import Footer from './Footer';
import {Route, BrowserRouter, Switch, Link} from 'react-router-dom';
import Dummy from './DummyText';

const navStyle = {
    marginBottom: '0px'
}

class App extends Component {
    render() {
        return ( 
    <div>
        <Footer />
    <MyNav />
    <Route path='/calculator' component={CalcForm} />
    <Route path='/' exact component={Jumbo} />
    </div>
    )
}
}

render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
	document.getElementById('app')
    
);
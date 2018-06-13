import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import Dummy from './DummyText';
import { Link } from 'react-router-dom';

const jumboStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1473174038344-40656aad79bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=460252381bf73f71b26eccda43cea479&auto=format&fit=crop&w=1950&q=80')",
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat'
}

const whiteText = {
    color: 'white'
}


class Jumbo extends Component {
    render(){
        return (
    <div>
    <Jumbotron style={jumboStyle}>
        <div className="container">
        <h1 style={whiteText}>Tools for your game.</h1>
        <p style={whiteText}>
            We have all kinds of great tools that will help you track your game.
        </p>
        <p>
        <Link to="/calculator"><Button bsStyle="primary">Handicap Calculator</Button></Link>
        </p>
        </div>
    </Jumbotron>
    <Dummy />
    </div>
);
    }
}

export default Jumbo;
import React, { Component } from 'react';
import { render } from 'react-dom';
import CalcForm from './HandicapCalc';
import MyNav from './MyNav';
import Footer from './Footer';

class Calc extends Component {
    render() {
        return (
            <div>
                <div>
                    { MyNav }
                </div>
                <div>
                    { CalcForm }
                </div>
                <div>
                    { Footer }
                </div>
            </div>
        )
    }
}

export default Calc;
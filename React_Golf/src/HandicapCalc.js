import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import CalcHeader from './CalcHeader';

const calcStyle = {
    margin: "40px",
    textAlign: "center",
    border: "lightgrey solid 1px",
    borderRadius: "10px",
    paddingTop: '20px'
}

const resultStyle = {
    marginTop: '20px',
    fontSize: '24px',
    fontWeight: 'bold'
}



const pompanoPalms = {name: "Pompano Beach Golf Course: Palms", rating: 67.3, slope: 119};
const pompanoPines = {name: "Pompano Beach Golf Course: Pines", rating: 69.7, slope: 120};
const coralRidge = {name: "Coral Ridge Country Club", rating: 70, slope: 126};
const palmAirePalms = {name: "Palm Aire Country Club: Palms", rating: 70.1, slope: 125};
const palmAireOaks = {name: "Palm Aire Country Club: Pines", rating: 68.4, slope: 121};
    


function GetHandicap(){
    console.log("listening")
    let course = document.getElementById('golfCourses');
    let score = document.getElementById('recentScore').value;
    let courseRating;
    let slopeRating;

    switch(course.options[course.selectedIndex].value){
        case "pompanoPalms":
        courseRating = pompanoPalms.rating;
        slopeRating = pompanoPalms.slope;
        break;
        case "pompanoPines":
        courseRating = pompanoPines.rating;
        slopeRating = pompanoPines.slope;
        break;
        case "coralRidge":
        courseRating = coralRidge.rating;
        slopeRating = coralRidge.slope;
        break;
        case "palmAirePalms":
        courseRating = palmAirePalms.rating;
        slopeRating = palmAirePalms.slope;
        break;
        case "palmAireOaks":
        courseRating = palmAireOaks.rating;
        slopeRating = palmAireOaks.slope;
        break;
        default: console.log("default");
    }
    let handicap = (score - courseRating) * 113 / slopeRating;
    document.getElementById('result').innerHTML = "Your handicap is " + handicap.toFixed(0) + "!";

    
};


class CalcForm extends Component {
    render(){
        return (
    <div>
        <CalcHeader />
    <div style={ calcStyle }>
        <h4>Enter your most recent score to see your handicap!*</h4>
    <form className="container">
        <select name="golfCourses" id="golfCourses">
            <option value="pompanoPalms">{pompanoPalms.name}</option>
            <option value="pompanoPines">{pompanoPines.name}</option>
            <option value="coralRidge">{coralRidge.name}</option>
            <option value="palmAirePalms">{palmAirePalms.name}</option>
            <option value="palmAireOaks">{palmAireOaks.name}</option>
        </select><br></br>
        <input type="text" name="recentScore" id="recentScore"/>
        <Button onClick={GetHandicap} bsStyle="primary" bsSize="xsmall">Get Handicap</Button>
        <p id="result" style={resultStyle}></p>
        <br />
        <p>*New courses always being added</p>
    </form>
    </div>
    </div>
        );
    }
}

export default CalcForm;
import React, { Component } from 'react';

const myHeader = {
    width: '100%',
    height: '200px',
    backgroundColor: 'gray',
    color: 'white'
}

const myHeaderText = {
    marginTop: '60px',
    alignText: 'center'
}


class CalcHeader extends Component {
    render() {
        return (
            <div style={myHeader}>
                <div className="container">
                <h4 style={myHeaderText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus scelerisque porta. Nullam pellentesque placerat purus. Sed nunc dui, egestas a venenatis ac, aliquam nec sem.
                </h4>
                </div>
            </div>
        )
    }
}

export default CalcHeader;
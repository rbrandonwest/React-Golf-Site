import React, { Component } from "react";

const footerStyle = {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '60px', /* Set the fixed height of the footer here */
    lineHeight: '60px', /* Vertically center the text there */
    backgroundColor: '#3a3a3a',
    marginTop: '50px',
    color: 'white'
}

class Footer extends Component {
    render() {
        return (
            <footer style={footerStyle}>
                <div className="container">
                    <span className="text-muted">Golf Tools | Made by Ray West</span>
                </div>
            </footer>
        )
    }
}

export default Footer;
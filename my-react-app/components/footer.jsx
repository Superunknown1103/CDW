import React, { Component } from 'react';

class Footer extends Component {
    // copyright updates year
    constructor(props) {
        super(props);
        this.state = { year: new Date().getFullYear() }
    }
    render() {
        return (
            <footer>
            <ul className="site-link">
                Copyright: {this.state.year} Concept and Color
                <br />
                <span>React version: {React.version}</span>
                </ul>
            </footer>
        );
    }
}

export default Footer;
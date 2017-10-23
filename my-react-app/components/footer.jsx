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
            <li>
                Copyright: {this.state.year} Concept and Color
                </li>
                </ul>
            </footer>
        );
    }
}

export default Footer;
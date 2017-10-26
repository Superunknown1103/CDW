import React, { Component } from 'react';

export default class Dogswalked extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dogsWalked: 0}
        this.addDog = this.updateDogs.bind(this, 1);
        this.subtractDog = this.updateDogs.bind(this, -1);
    }

render() {
    return (
        <div>
            <div>{this.state.dogsWalked}</div>
            <input type='button' value='+' onClick={this.addDog} />
                <input type='button' value='-' onClick={this.subtractDog} />
            </div>
        );
    }
    
    updateDogs(dogsWalked) {
        this.setState({dogsWalked: this.state.dogsWalked + dogsWalked});
    }
}

import React, { Component } from 'react';
import Walkreport from './walkreport.jsx'

export default class Dogswalked extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dogsWalked: ""}
        this.addDogs = this.updateDogs.bind(this, 1);
    }

render() {
    return (
        <div>
            <div className="wrapper">
            <h2>Let's check off which dogs you walked today</h2>
        <form>
        <input type="checkbox" id="dogcheck" className="dog" />
        <label htmlFor="Betty">Betty</label>
        <br />
        <input type="checkbox" id="dogcheck" className="dog" />
        <label htmlFor="Jackson">Jackson</label>
        <br />
        <input type="checkbox" id="dogcheck" className="dog" />
        <label htmlFor="Simon">Simon</label>
        <br />
        <input type="checkbox" id="dogcheck" className="dog" />
        <label htmlFor="Renny">Renny</label>
        <br />
      </form>
      </div>
            <div>{this.state.dogsWalked}</div>
            <input type='button' value='+' onClick={this.addDogs} />
            </div>
        );
    }
    
    updateDogs(dogsWalked) {
        function getDogs(){
        var inputs = document.getElementById("input");
        for(var i = 0; i < inputs.length; i++) {
            if(inputs[i].type == "checkbox") {
                inputs[i].checked = true;
            }
            return dogs;
            console.log(dogs);
    }
    this.setState({dogsWalked: this.state.dogsWalked + dogsWalked});
    
    }
    }
}

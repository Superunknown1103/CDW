import React, {Component} from 'react';

class Walkreport extends Component {
    constructor() {
        super();
        this.state = {
         dogsWalked: "no dogs listed",
        };
    }
 
    render() {

        handleClick(e) => {
            // var report = getElementById('input:checkbox:checked').map(function() {
            //     return this.value;
            // }).get(); 
            this.setState({
                dogsWalked: report,
            });
        }
        return (
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
        <div>Dogs Walked: {this.state.dogsWalked} </div>
      </form>
      </div>
        );
    }
}
 export default Walkreport;
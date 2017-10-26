import React, {Component} from 'react';
import Footer from "./footer.jsx";
import Dogswalked from "./dogswalked.jsx";

class Walkreport extends Component {
 
    render() {
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
        <Dogswalked />

      </form>
      </div>
        );
    }
}

 export default Walkreport;
import React, { Component } from 'react';
// import './App.css';

class App extends Component {
   render() {
      return (
          <div>
              <h1>Welcome to Chicago Dog Walkers</h1>
              <h2>Let's check off which dogs you walked today</h2>
        <form>
        <input type="checkbox" id="dogcheck" className="dog" />
        <label for="Betty">Betty</label>
        <br />
        <input type="checkbox" id="dogcheck" className="dog" />
        <label for="Jackson">Jackson</label>
        <br />
        <input type="checkbox" id="dogcheck" className="dog" />
        <label for="Simon">Simon</label>
        <br />
        <input type="checkbox" id="dogcheck" className="dog" />
        <label for="Renny">Renny</label>
        <br />
        <button type="submit">Submit</button>
      </form>
        </div>
      );
   }
}
export default App;

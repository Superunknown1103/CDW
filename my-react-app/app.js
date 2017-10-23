import React, { Component } from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Walkreport from './components/walkreport.jsx';

// import './App.css';

class App extends Component {
   render() {
      return (
          <div className="wrapper">
              <Header />
             <Walkreport />
      <Footer />
        </div>
      );
   }
}
export default App;

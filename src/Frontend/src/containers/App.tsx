import * as React from 'react';
import './App.css';

import Routes from './Routes';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="viewport">
        <div className="viewport__content">
          <Header />
          <Routes />
        </div>
        <div className="viewport__footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

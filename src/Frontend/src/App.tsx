import * as React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="viewport">
        <div className="viewport__content">
          <h1>Test</h1>
        </div>
        <div className="viewport__footer">
          Footer
        </div>
      </div>
    );
  }
}

export default App;

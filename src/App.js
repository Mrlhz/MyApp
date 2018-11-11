import React, { Component } from 'react';
import './normalize.css';
import './index.css';
import Index from './components/Index/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Index />
      </div>
    );
  }
}

export default App;

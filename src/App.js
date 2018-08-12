import React, { Component } from 'react';
import './App.css';
import { AppRoutes } from './routes/appRoutes'

class App extends Component {
  render() {
    return (
      <div className="App layer">
        <AppRoutes />
      </div>
    );
  }
}

export default App;

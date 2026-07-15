import React, { Component } from 'react';
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <div className="w-full flex justify-center items-center min-h-screen">
        <Game />
      </div>
    );
  }
}

export default App;
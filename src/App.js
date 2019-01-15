import React, { Component } from 'react';

import Keyboard from './components/keyboard/';
import Word from './components/word/';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='game-board'>
        <Word word='Teste' />
        <Keyboard />
        <button className='reload-button'> New word </button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import Keyboard from './components/keyboard/';
import Word from './components/word/';
import './App.css'

class App extends Component {
  state = {
    word: ''
  };

  generateWord = () => {
    const words = ['Banana', 'Eggs', 'Milk', 'Trash', 'Eyes', 'Perfect paradise'];

    let word = this.state.word;

    while(this.state.word === word) {
      const random = Math.floor(Math.random() * (words.length - 0)) + 0;
      word = words[random];
    }
		
		this.setState({ word });
  }

  componentDidMount() {
    this.generateWord();
  }

  render() {
    const { word } = this.state;

    return (
      <div className='game-board'>
        <Word word={ word } />

        <Keyboard />

        <button className='reload-button' onClick={ this.generateWord }> New word </button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import Keyboard from './components/keyboard/';
import Word from './components/word/';
import './App.css'

class App extends Component {
  state = {
	word: '',
	rightLetters: [],
	wrongLetters: [],
	chances: 0,
	gameStatus: ''
  };

  generateWord = () => {
    const words = ['Banana', 'Eggs', 'Milk', 'Trash', 'Eyes', 'Perfect paradise'];

	let word = this.state.word;

	// Escolhendo uma palavra aleatória e verificando se não é a palavra atual
    while(this.state.word === word) {
      const random = Math.floor(Math.random() * (words.length - 0)) + 0;
	  word = words[random];
	}

	// Calculando as chances a partir da quantidade de letras não repetidas
	let chances = Math.ceil(this.removeDuplicates(word).length * 0.3);
	if(chances === 1) chances++;

	this.setState({ word, rightLetters: [], wrongLetters: [], chances, gameStatus: '' });
  }

  removeDuplicates = (word) => {
	let modifiedWord = '';

	// Percorrendo a palavra e removendo as palavras duplicadas
	word.toLowerCase().split('').map(key => {
		if(modifiedWord.indexOf(key) === -1) modifiedWord += key;
		return 0;
	});

	return modifiedWord;
  }

  componentDidMount() {
    this.generateWord();
  }

  checkWord = (key) => {
	const { word, rightLetters, wrongLetters } = this.state;  
	let { chances, gameStatus } = this.state;
	
	// Verificando se existe a letra selecionada na palavara
	if(word.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1) {
		rightLetters.push(key.toLocaleLowerCase());
	}else{
		chances--;
		wrongLetters.push(key.toLocaleLowerCase());
	}

	// Verificando se existem mais chances
	if(chances === 0) {
		gameStatus = 'Você perdeu!';
	}
	
	// Verificando se todas a palavra foi completa
	if(this.removeDuplicates(word).length === rightLetters.length){
		gameStatus = 'Você venceu!';
	}
	
	this.setState({ rightLetters, wrongLetters, chances, gameStatus });
  }

  render() {
    const { word, rightLetters, wrongLetters, gameStatus, chances } = this.state;
	let gameStatusClass = 'game-status', status;
	
	if(gameStatus !== '' && chances !== 0) {
		gameStatusClass += ' win';
		status = 1;
	}else if(chances === 0){
		gameStatusClass += ' lose';
		status = 0;
	}
	
	console.log(status);

    return (
      <div className='game-board'>
        <Word word={ word } rightLetters={ rightLetters } gameStatus={status} />

		<h2 className={gameStatusClass}> { gameStatus } </h2>

        <Keyboard gameStatus={status} onKeyClick={(key) => this.checkWord(key) } rightLetters={ rightLetters } wrongLetters={ wrongLetters } />

        <button className='reload-button' onClick={ this.generateWord }> New word </button>
      </div>
    );
  }
}

export default App;

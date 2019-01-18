import React, { Component } from 'react';

import './index.css';

export default class Word extends Component {
    
    renderLetter = (letter, index) => {
        let showLetter = false;
        const { rightLetters, gameStatus } = this.props;

        // Verificando se a letra atual está na array de letras corretas para mostra-la
        if(rightLetters.indexOf(letter.toLowerCase()) !== -1 || gameStatus === 0) {
            showLetter = true;
        }

        return <span key={index} className={(letter !== ' ')? 'letter': 'empty-letter'}> { (showLetter)? letter : '' } </span>;
    }

    render() {
        const { word } = this.props;

        return (
            <div className='word'> 
                { word.split('').map((letter, index) => this.renderLetter(letter, index)) } 
            </div>
        );
    }
}
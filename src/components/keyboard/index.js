import React, { Component } from 'react';

import './index.css';

export default class Keyboard extends Component {
    state = {
        keys: [],
    };

    componentDidMount() {
        const keyboard = [];
		let currentNumber = 65;
		let finalNumber = 65 + 25;
		
		for(currentNumber=65; currentNumber<=finalNumber; currentNumber++) {
            const key = String.fromCharCode(currentNumber);
            keyboard.push(key);
        }

        this.setState({ keys: keyboard });
    }

    renderKey = (key, index) => {
        const { rightLetters, wrongLetters, onKeyClick, gameStatus } = this.props;
        let keyClass = 'key', keyClick = () => onKeyClick(key);

        if(gameStatus === 1 || gameStatus === 0) {
            keyClass += ' disabled-key';
            keyClick = () => {};
        }else{

            if(rightLetters.indexOf(key.toLowerCase()) !== -1) {
                keyClass += ' right-key';
                keyClick = () => {};
            }else if(wrongLetters.indexOf(key.toLowerCase()) !== -1) {
                keyClass += ' wrong-key';
                keyClick = () => {};
            }

        }

        return <span key={index} className={keyClass} onClick={ keyClick }>{ key }</span>
    }

    render() {
        const { keys } = this.state;

        return (
            <div className='keyboard'>
                {keys.map((key, index) => this.renderKey(key, index)) }
            </div>
        );
    }
}
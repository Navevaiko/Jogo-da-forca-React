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

    render() {
        const { keys } = this.state;

        return (
            <div className='keyboard'>
                {keys.map((key, index) => (
                    <span key={index} className='key'>{ key }</span>
                ))}
            </div>
        );
    }
}
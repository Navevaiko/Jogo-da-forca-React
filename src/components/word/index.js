import React, { Component } from 'react';

import './index.css';

export default class Word extends Component {
    
    render() {
        const { word } = this.props;

        return (
            <div className='word'> 
                { word.split('').map((letter, index) => (
                    <span key={index} className='letter'> { letter } </span>
                )) } 
            </div>
        );
    }
}
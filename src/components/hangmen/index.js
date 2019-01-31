import React, { Component } from 'react';
import './index.css';

export default class Hangmen extends Component {
    render() {
        const { chancesLeft } = this.props;

        return (
            <div id='hangmen'>
                <div id='hang'>
                    <div id='floor'></div>
                </div>

                <div id='head' className={ (chancesLeft <= 5) ? '' : 'invisible' }></div>
                <div id='body' className={ (chancesLeft <= 4) ? '' : 'invisible' }></div>
                <div id='right-arm' className={ (chancesLeft <= 3) ? '' : 'invisible' }></div>
                <div id='left-arm' className={ (chancesLeft <= 2) ? '' : 'invisible' }></div>
                <div id='right-leg' className={ (chancesLeft <= 1) ? '' : 'invisible' }></div>
                <div id='left-leg' className={ (chancesLeft <= 0) ? '' : 'invisible' }></div>
            </div> 
        );
    }
}
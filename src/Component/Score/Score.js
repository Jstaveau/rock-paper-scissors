import './Score.css'
import React from 'react';

export default function Score(props) {
    return <div className='titre-container'>
                <div className='ppc-container'>
                    <p>ROCK</p>
                    <p>PAPER</p>
                    <p>SCISSORS</p>
                </div>
                <div onClick={props.reset} className='score'>
                    <p>SCORE</p>
                    <p>{props.score}</p>
                </div>
            </div>;
}

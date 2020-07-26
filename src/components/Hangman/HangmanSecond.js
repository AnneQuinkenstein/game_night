
import React from 'react';
import DisplayWord from './DisplayWord';
import Guess from './Guess';
import GifsList from './GigsToDisplayAttempts/GifsList';
import HangmanMenu from './HangmanMenu';
import './Hangman.css';

const HangmanSecond = (props) => {
    return (
        <div className="Hangman">
            <GifsList />
            <HangmanMenu />
            <div className="introHangman">
                <div className='hangmanNewGame fly-in'>
                    <DisplayWord />
                </div>
            </div>
            <Guess />
            <GifsList />
        </div>
    )
}

export default HangmanSecond; 
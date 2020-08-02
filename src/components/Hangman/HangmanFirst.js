import React from 'react';
import DisplayWord from './DisplayWord';
import Guess from './Guess';
import GifsList from './GigsToDisplayAttempts/GifsList';
import HangmanIntro from './HangmanIntro';
import HangmanMenu from './HangmanMenu';
import './Hangman.css';

const HangmanFirst = () => {
    return (
        <div className="Hangman">
            <GifsList />
            <HangmanMenu />
            <div className="introHangman">
                <div className='fly-in'>
                    <HangmanIntro />
                    <div className="DisplayWord">
                        <DisplayWord />
                    </div>
                </div>
            </div>
            <Guess />
            <GifsList />
        </div>
    )
}

export default HangmanFirst; 
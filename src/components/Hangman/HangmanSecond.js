
import React, { useContext } from 'react';
import DisplayWord from './DisplayWord';
import Guess from './Guess';
import GifsList from './DisplayedGifs/GifsList';
import HangmanMenu from './HangmanMenu';
import './Hangman.css';
import HangmanWinner from './HangmanWinner/HangmanWinner';
import { HangmanContext } from '../../contexts/HangmanContext';

const HangmanSecond = () => {

    const { gameState } = useContext(HangmanContext);

    const renderGameState = () => {
        if (gameState === 'won') {
            return (
                <div>
                    <HangmanMenu />
                    <HangmanWinner />
                </div>
            )
        } else if (gameState === 'loose') {
            return (
                <div>
                    You lost!
                </div>
            )
        } else {
            return (
                <div className="Hangman" >
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
    }

    return (
        <>
            {renderGameState()}
        </>
    )
}

export default HangmanSecond; 
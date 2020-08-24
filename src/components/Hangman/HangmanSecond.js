
import React, { useContext } from 'react';
import DisplayWord from './DisplayWord';
import Guess from './Guess';
import GifsList from './DisplayedGifs/GifsList';
import './Hangman.css';
import HangmanWinner from './GameOver/HangmanWinner';
import HangmanLooser from './GameOver/HangmanLooser';
import { HangmanContext } from '../../contexts/HangmanContext';
import HangmanMenu from './HangmanMenu';

const HangmanSecond = () => {

    const { gameState } = useContext(HangmanContext);

    const renderGameState = () => {
        if (gameState === 'won') {
            return (
                <div className="container">
                    <HangmanWinner />
                </div>
            )
        } else if (gameState === 'loose') {
            return (
                <div>
                    <HangmanLooser />
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
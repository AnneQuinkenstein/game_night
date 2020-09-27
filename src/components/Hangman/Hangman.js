
import React, { useContext } from 'react';
import DisplayWord from './DisplayWord';
import Guess from './Guess';
import GifsList from './DisplayedGifs/GifsList';
import './Hangman.css';
import HangmanMenu from './HangmanMenu';
import HangmanIntro from './HangmanIntro';
import HangmanWinner from './GameOver/HangmanWinner';
import HangmanLooser from './GameOver/HangmanLooser';
import Hambugermenu from './Hamburgermenu'; 
import { HangmanContext } from '../../contexts/HangmanContext';


const Hangman = () => {
    const { gameState, style } = useContext(HangmanContext);
 
    const renderGameState = () => {
        if (style === 1 && gameState !== 'loose' && gameState !== 'won') {
            return (
                <div className="Hangman page">
                    <Hambugermenu />
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
        } else if (gameState === 'loose') {
            return (
                <div>
                    <HangmanLooser />
                </div>
            )
        } else if (style > 1 && gameState !== 'loose' && gameState !== 'won') {
            return (
                <div className="Hangman page" >
                    <Hambugermenu />
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
        } else {
            return (
                <div className="container">
                    <HangmanWinner />
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

export default Hangman; 
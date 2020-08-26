
import React, { useContext, useEffect } from 'react';
import DisplayWord from './DisplayWord';
import Guess from './Guess';
import GifsList from './DisplayedGifs/GifsList';
import './Hangman.css';
import HangmanWinner from './GameOver/HangmanWinner';
import HangmanLooser from './GameOver/HangmanLooser';
import { HangmanContext } from '../../contexts/HangmanContext';
import HangmanMenu from './HangmanMenu';
import HangmanIntro from './HangmanIntro'; 

const Hangman = () => {

    const { gameState, style, mount } = useContext(HangmanContext);

    useEffect(() => {
       mount(); 
    }, [])

    console.log('style', style);

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
        } else if (style === "false") {
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
        }   else {
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

export default Hangman; 
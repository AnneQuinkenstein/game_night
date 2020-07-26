import React, { useContext } from 'react';
import { HangmanContext } from '../../contexts/HangmanContext';

const Letter = () => {
    const { letter, guessedLetters } = useContext(HangmanContext);

    const answerLetter = () => {
        let letterState = '';
        if (letter === ' ') {
            letterState = ' ';
        } else if (guessedLetters.includes(letter.toLowerCase())) {
            letterState = letter
        } else {
            letterState = '_'
        }
        return letterState
    }

    return (
        <div className='Letter'>
            {answerLetter()}
        </div>
    )

}

export default Letter; 
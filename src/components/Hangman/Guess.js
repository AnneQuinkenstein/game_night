import React, { useContext } from 'react';
import { HangmanContext } from '../../contexts/HangmanContext';

const Guess = () => {
    const { updateGuessedLetters } = useContext(HangmanContext);

    const handleChange = event => {
        updateGuessedLetters(event.target.value);
        event.target.value = '';
    }

    return (
        <input onChange={handleChange} type="text" name="guessedLetter" id="guessedLetter" maxLength="1" autoFocus />
    )
}


export default Guess; 
import React, { useContext } from 'react';
import { HangmanContext } from '../../contexts/HangmanContext';

const DisplayWord = () => {

    const { movieData, guessedLetters } = useContext(HangmanContext);
   
    let letterState = '';

    const answer = movieData && movieData.title.split('')
        .map(letter => {
            if (letter === ' ') {
                letterState = ' ';
            } else if (guessedLetters.includes(letter.toLowerCase())) {
                letterState = letter
            } else {
                letterState = '_'
            }
            return letterState
        });

    console.log(movieData);

    return (
        <div>
            {answer}
        </div>
    )
}

export default DisplayWord;



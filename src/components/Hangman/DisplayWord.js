import React from 'react';
import Letter from './Letter';

const DisplayWord = (props) => {
    
    let letterState = '';
    const answer = props.sentence.map(letter => {
        if (letter === ' ') {
            letterState = ' ';
        } else if (props.guessedLetters.includes(letter.toLowerCase())) {
            letterState = letter
        } else {
            letterState = '_'
        }
        return letterState
    });

    return (
        <div className="DisplayWord">
            {answer}
        </div>
    )
}

export default DisplayWord;



import React from 'react';
import Letter from './Letter';

const DisplayWord = (props) => {

    const answer = () => {
        
        props.sentence.map((letter) => {
            let letterState = '';
            if (props.letter === ' ') {
                letterState = ' ';
            } else if (props.guessedLetters.includes(props.letter.toLowerCase())) {
                letterState = props.letter
            } else {
                letterState = '_'
            }
            return letterState
        }
    }

    return (
        <div className="DisplayWord">
            {answer()}
        </div>
    )
}

export default DisplayWord;



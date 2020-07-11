import React from 'react';
import Letter from './Letter';

const DisplayWord = (props) => {
    
    return (
        <div className="DisplayWord">
            {props.sentence.map((letter, index) => <Letter letter={letter} key={index} guessedLetters={props.guessedLetters} />)}
        </div>
    )
}

export default DisplayWord;



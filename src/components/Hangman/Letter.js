import React, { Component } from 'react';

const Letter = (props) => {

    const answerLetter = () => {
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

    return (
        <div className='Letter'>
            {answerLetter()}
        </div>
    )

}

export default Letter; 
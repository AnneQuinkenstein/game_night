import React, { Component } from 'react';

const Space = (props) => {

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

    const getClass = (letterState) => {
        switch (letterState) {
            case ' ': {
                return 'greenCard'
            }
            case props.letter: {
                return 'letter'
            }
            case '_': {
                return '_'
            }
        }
    }

    console.log('render:', answerLetter());
    return (
        <div className={getClass(answerLetter())}>
            {answerLetter()}
        </div>
    )

}

export default Space; 
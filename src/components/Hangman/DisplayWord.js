import React from 'react';

const DisplayWord = (props) => {
    console.log('DisplayWords:', props);
    let letterState = '';
    const answer = props.movieData.title.split('')
        .map(letter => {
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



import React, { useContext } from 'react';
import { HangmanContext } from '../../contexts/HangmanContext';

const DisplayWord = () => {

    const { answer, movieData } = useContext(HangmanContext);
console.log(movieData);
return (
    <div>
        {answer}
    </div>
)
}

export default DisplayWord;



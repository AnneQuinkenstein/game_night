import React, { useContext, useState, useEffect } from 'react';
import { HangmanContext } from '../../../contexts/HangmanContext';
import Gif from './Gif';

const GifsList = () => {

  const { gifs, wrongLetters, falseGuesses } = useContext(HangmanContext);
   
  

  return (
    <div className="GifsList">
      {gifs && gifs.map((gif, index) => (
        <Gif 
          gifURL={gif.images.downsized_large.url} 
          index={index} 
          key={gif.images.downsized_large.url} 
          wrongLetter={wrongLetters[index]}
          falseGuesses={falseGuesses}
        />))
      }
    </div>
  );

}

export default GifsList;


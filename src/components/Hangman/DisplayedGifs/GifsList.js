import React, { useContext, useState, useEffect } from 'react';
import { HangmanContext } from '../../../contexts/HangmanContext';
import Gif from './Gif';

const GifsList = () => {

  const { movieData, wrongLetters, falseGuesses } = useContext(HangmanContext);
   
  const [gifs, setGifs] = useState(null);

  const movieTitle = movieData && (movieData.original_language === "en"? movieData.original_title: movieData.title)
  
  useEffect(() => {
   fetch(`https://api.giphy.com/v1/gifs/search?q=${movieTitle}&tag=movie&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=5`)
      .then(res => res.json())
      .then(data => 
        setGifs(data.data))
  }, [movieData])

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


import React, { useState, useEffect } from 'react';
import Gif from './Gif';

const GifsList = (props) => {

  const [gifs, setGifs] = useState(null);

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${props.movieData.original_title}&tag=movie&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=5`)
      .then(res => res.json())
      .then(data => 
        setGifs(data.data))
  }, [props])

  return (
    <div className="GifsList">
      {gifs && gifs.map((gif, index) => (
        <Gif 
          gifURL={gif.images.downsized_large.url} 
          falseGuesses={props.falseGuesses} 
          index={index} 
          key={gif.images.downsized_large.url} 
          wrongLetter={props.wrongLetters[index]}
        />))
      }
    </div>
  );

}

export default GifsList;


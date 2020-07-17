import React, { useState, useEffect } from 'react';
import Gif from './Gif';

const GifsList = (props) => {

  const [gifs, setGifs] = useState(null);
  const [cathegory, setCathegory] = useState(props.movieData.title);


  console.log('GifList: ', props.movieData.title);
  console.log(process.env.REACT_APP_GIPHY_KEY);
  console.log('Cathegory:', cathegory);

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${cathegory}&tag=movie&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=5`)
      .then(res => res.json())
      .then(data => setGifs(data.data))
  }, [cathegory])

  useEffect(() => {
    setCathegory(props.movieData.title);
  }, [props])

  console.log('Gifs', gifs)

  return (
    <div className="GifsList">
      {gifs ? console.log('loaded'): console.log('not loaded')}
    </div>
  ); 

}

export default GifsList;

{/* { gifs.map((gif, index) => <Gif gifURL={gif.images.downsized_large.url} falseGuesses={props.falseGuesses} index={index} key={index} wrongLetter={props.wrongLetters[index]} />)  */}
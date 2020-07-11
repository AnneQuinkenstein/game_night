import React from 'react'; 
import Gif from './Gif';

const GifList = (props) => {
    return (
        <div className="GifsList">
            { props.gifs.map((gif, index) => <Gif gifURL={gif.images.downsized_large.url} falseGuesses={props.falseGuesses} index={index} key={gif.images.downsized_large.url}/>) } 
        </div>
    )
}

export default GifList; 
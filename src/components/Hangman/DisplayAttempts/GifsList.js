import React from 'react'; 
import Gif from './Gif';

const GifList = (props) => {
    return (
        <div className="GifsList">
            { props.gifs.map(gif => <Gif gifURL={gif.images.downsized_large.url}  />) } 
        </div>
    )
}

export default GifList; 
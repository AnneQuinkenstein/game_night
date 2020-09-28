import React, { useContext, useState, useEffect } from 'react';
import { HangmanContext } from '../../../contexts/HangmanContext';
import ImageSlider from "./imageSlider";
import HangmanWinMenu from './HangmanWinMenu';


const HangmanWinner = () => {
    const { movieData, gifs } = useContext(HangmanContext);
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (gifs && movieData) {
            const movieArr = [`https://image.tmdb.org/t/p/original${movieData.poster_path}`, `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`];
            const gifsArr = gifs.map(gif => `${gif.images.downsized_large.url}`);
            setImages(movieArr.concat(gifsArr))
        }
    }, [gifs, movieData]);

    //use images as terenary operator if it not works

    return (
        <div className="Hangmanwinner page">
            <HangmanWinMenu />
            < div >
                <ImageSlider images={images} />
            </div >
        </div>

    );
}


export default HangmanWinner; 
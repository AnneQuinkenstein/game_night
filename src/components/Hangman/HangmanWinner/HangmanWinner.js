import React, { useContext, useState, useEffect } from 'react';
import { HangmanContext } from '../../../contexts/HangmanContext';
import ImageSlider from "./imageSlider";


const HangmanWinner = () => {
    const { movieData } = useContext(HangmanContext);
    const [gifs, setGifs] = useState(null);
    const [images, setImages] = useState([]);


    //fetch Gif with movieTitle
    useEffect(() => {
        const movieTitle = movieData && (movieData.original_language === "en" ? movieData.original_title : movieData.title)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${movieTitle}&tag=movie&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=3`)
            .then(res => res.json())
            .then(data => setGifs(data.data));
    }, [movieData])

    useEffect(() => doImagesArr(), [gifs])


    const doImagesArr = () => {
        if (gifs && movieData) {
            const movieArr = [`https://image.tmdb.org/t/p/original${movieData.poster_path}`, `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`]; 
            const gifsArr = gifs.map(gif => `${gif.images.downsized_large.url}`);
            setImages(movieArr.concat(gifsArr))
        }
    }

    console.log(images);

    return (
        < div >
            <ImageSlider images={images} />
        </div >
    );
}


export default HangmanWinner; 
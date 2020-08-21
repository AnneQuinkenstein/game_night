import React, { useContext } from 'react';
import { HangmanContext } from '../../../contexts/HangmanContext';

const HangmanLooser = () => {
    const { movieData } = useContext(HangmanContext);

    const movieTitle = movieData && (movieData.original_language === "en" ? movieData.original_title : movieData.title)

    return (
        <div className="hangmanLooser">
            <div>
                <img src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`} />
                <p>{movieTitle}</p>
            </div>
        </div>
    )
}

export default HangmanLooser; 
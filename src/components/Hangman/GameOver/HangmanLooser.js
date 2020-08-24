import React, { useContext } from 'react';
import HangmanLooseMenu from './HangmanLooseMenu';
import { HangmanContext } from '../../../contexts/HangmanContext';

const HangmanLooser = () => {
    const { movieData } = useContext(HangmanContext);

    const movieTitle = movieData && (movieData.original_language === "en" ? movieData.original_title : movieData.title)

    return (
        <div className="hangmanLooser">
            <HangmanLooseMenu />
            <div className='looseImage'>
                <img src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`} />
            </div>
        </div>
    )
}

export default HangmanLooser; 
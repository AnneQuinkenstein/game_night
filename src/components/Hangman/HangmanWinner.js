import React, { useContext } from 'react';
import { HangmanContext } from '../../contexts/HangmanContext';
import GifsList from './GigsToDisplayAttempts/GifsList';

const HangmanWinner = () => {
    const { movieData } = useContext(HangmanContext);

    return (
        <div className="winnerSide">

            <img className="winnerPoster" src={movieData && `https://image.tmdb.org/t/p/original${movieData.poster_path}`} alt="pic to movieposter" />

            <div className="winnerBackdrop">
                <div>
                    <img src={movieData && `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`} alt="pic to moviepicture" />
                </div>
                <div className="winnerGifs">
                    <GifsList />
                </div>
            </div>

        </div>

    )
}

export default HangmanWinner; 
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HangmanContext } from '../../../contexts/HangmanContext';

const HangmanLooseMenu = () => {
    const { movieData } = useContext(HangmanContext);

    const movieTitle = movieData && (movieData.original_language === "en" ? movieData.original_title : movieData.title)
    
    const refreshPage = () => {
        window.location.reload(false);
      }

    return (
        <div class="HangmanEnd" >
            <h1> I am sorry, you lost! </h1>
            <ul>
                <li onClick={refreshPage}>New&nbsp;Game</li>
                <li><Link to='/'>Start&nbsp;Menu</Link></li>
            </ul>
            <h1>Solution: {movieTitle}</h1>
        </div>
    )
}

export default HangmanLooseMenu;
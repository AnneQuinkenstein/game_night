import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HangmanContext } from '../../../contexts/HangmanContext';

const HangmanWinMenu = () => {
    const { movieData } = useContext(HangmanContext);

    const movieTitle = movieData && (movieData.original_language === "en" ? movieData.original_title : movieData.title)

    return (
        <div class="hangmanWin" >
            <h1>YEAH ! You won!</h1> 
            <h1>Look at Giphy Pics!</h1>
            <ul>
                <li><Link to='/hangmangame'>New&nbsp;Game</Link></li>
                <li><Link to='/'>Start&nbsp;Menu</Link></li>
            </ul>
        </div>
    )
}

export default HangmanWinMenu;
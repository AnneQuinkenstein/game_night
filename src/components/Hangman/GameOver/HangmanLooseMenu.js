import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HangmanContext } from '../../../contexts/HangmanContext';

const HangmanLooseMenu = () => {
    const { movieData, mount } = useContext(HangmanContext);

    const movieTitle = movieData && (movieData.original_language === "en" ? movieData.original_title : movieData.title)
    
    const refresh = () => {
        mount(); 
        
    }

    return (
        <div className="HangmanEnd" >
            <h1> I am sorry, you lost! </h1>
            <ul>
                <li onClick={mount}>New&nbsp;Game</li>
                <li><Link to='/title'>Start&nbsp;Menu</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <h1>Solution: {movieTitle}</h1>
        </div>
    )
}

export default HangmanLooseMenu;
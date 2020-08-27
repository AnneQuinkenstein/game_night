import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HangmanContext } from '../../../contexts/HangmanContext';

const HangmanWinMenu = () => {
    const { mount } = useContext(HangmanContext);

    return (
        <div className="hangmanWin" >
            <h1>YEAH ! You won!</h1> 
            <h1>Look at Giphy Pics!</h1>
            <ul>
                <li onClick={mount}>New&nbsp;Game</li>
                <li><Link to='/title'>Start&nbsp;Menu</Link></li>
            </ul>
        </div>
    )
}

export default HangmanWinMenu;
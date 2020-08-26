import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const HangmanWinMenu = () => {
    
   const refreshPage = () => {
    window.location.reload(false);
  }

    return (
        <div className="hangmanWin" >
            <h1>YEAH ! You won!</h1> 
            <h1>Look at Giphy Pics!</h1>
            <ul>
                <li onClick={refreshPage}>New&nbsp;Game</li>
                <li><Link to='/'>Start&nbsp;Menu</Link></li>
            </ul>
        </div>
    )
}

export default HangmanWinMenu;
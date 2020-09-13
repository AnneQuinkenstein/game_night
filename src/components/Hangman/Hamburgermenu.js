import React, { useState, useContext } from 'react';
import "./Hamburgermenu.css";
import { Link } from 'react-router-dom';
import { HangmanContext } from '../../contexts/HangmanContext';

const Hamburgermenu = () => {
    const { mount } = useContext(HangmanContext);
    const [rules, setRules] = useState(false);
    const [clicked, setClicked] = useState(false);

    return (
        <nav>
            {rules && <div className="rules">
                <p>The computer chooses secretly a movie title, while you try to guess the word by asking what letters it contains. The computer draws a blank line for each letter in the word. </p>
                <p>The Computer fills the letter in the blanks, if you guess correctly.</p>
                <p>Whenever you guess a letter that is not in the secret word it brings you closer to loosing. To show this, one of the giphy-pics which is associated to the movie title is revealed. You win when you guess the correct word. Your loose when you guessed 6 times a wrong letter.</p>
            </div>}
            <div className={clicked ? "HamburgermenuToggle show" : "HamburgermenuToggle"} onClick={() => setClicked(!clicked)}>
                <span></span>
                <span></span>
                <span></span>
                <ul className="menu">
                    <li onClick={() => setRules(!rules)}> {rules ? 'Game' : 'Rules'} </li>
                    <li onClick={mount}>New&nbsp;Game</li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/title'>Start&nbsp;Menu</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Hamburgermenu; 

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ChooseLanguage from './ChooseLanguage';
import { HangmanContext } from '../../contexts/HangmanContext';

const HangmanMenu = () => {
    const { mount } = useContext(HangmanContext);

    const[rules, setRules] = useState(false);


    return (
        <>
            {rules && <div className="rules">
                <p>The computer chooses secretly a movie title, while you try to guess the word by asking what letters it contains. The computer draws a blank line for each letter in the word. For example "The Snowpiercer"  would be draw 14 blanks, one for each letter ( _ _ _&nbsp;&nbsp;&nbsp; _ _ _ _ _ _ _ _ _ _ _ ). To start guessing letters, click anywhere on the screen and type the letter in your keyboard. You might begin by typing an 'e'. Generally, start by guessing common letters like vowels, or "s," "t," and "n."
            </p>
                <p>
                    The Computer fills the letter in the blanks, if you guess correctly. Whenever you guess a letter that is in the secret word, the computer fills it into the blank where it occurs.
                    If you guess a letter that repeats, both letters are filled in. If you guess "r" & "e"; the computer would fill in all "e"s & "r"s. ( _ _ e &nbsp;&nbsp;&nbsp; _ _ _ _ _ _ e r _  er ).
            </p>
                <p>
                    Whenever you guess a letter that is not in the secret word it brings you closer to loosing. To show this, one of the giphy-pics which is associated to the movie title is revealed. That might give you an additional hint.
                    You win when you guess the correct word. Your loose when you guessed 6 times a wrong letter.
            </p>
            </div>}
            <div className="HangmanMenu left">
                <ul>
                    <li onClick={() => setRules(!rules)}> {rules? 'Game': 'Rules'} </li>
                    <li onClick={mount}>New&nbsp;Game</li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/title'>Start&nbsp;Menu</Link></li>
                </ul>
            </div>
            <div className="HangmanMenu right">
                <ChooseLanguage />
            </div>
        </>
    )
}

export default HangmanMenu;
import React from 'react';
import { Link } from 'react-router-dom';
import ChooseLanguage from './ChooseLanguage';

const HangmanMenu = () => {
    return (
        <>
            <div className="HangmanMenu top">
                <ul>
                    <li>Rules</li>
                    <li><Link to='/hangmangame'>New&nbsp;Game</Link></li>
                    <li><Link to='/'>Exit</Link></li>
                </ul>
            </div>
            <div className="HangmanMenu bottom">
                <ChooseLanguage />
            </div>
        </>
    )
}

export default HangmanMenu;
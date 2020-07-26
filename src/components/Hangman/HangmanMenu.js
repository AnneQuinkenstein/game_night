import React from 'react';
import { Link } from 'react-router-dom';
import ChooseLanguage from './ChooseLanguage';

const HangmanMenu = (props) => {
    return (
        <>
        <div className="HangmanMenu top">
            <ul>
                <li>Rules</li>
                <li>New&nbsp;Game</li>
                <li><Link to='/'>Exit</Link></li>

            </ul>
        </div>
        <div className="HangmanMenu bottom">
            <ChooseLanguage
                options={props.options}
                handleChooseLang={props.handleChooseLang}
                choosenLang={props.choosenLang}
            />
        </div>
        </>
    )
}

export default HangmanMenu;
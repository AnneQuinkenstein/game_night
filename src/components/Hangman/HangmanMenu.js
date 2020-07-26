import React from 'react';
import { Link } from 'react-router-dom';
import ChooseLanguage from './ChooseLanguage';

const HangmanMenu = (props) => {
    return (
        <div className="HangmanMenu left">
            <ul>
                <li>Rules</li>
                <li>New&nbsp;Game</li>
                <li><Link to='/'>Exit</Link></li>

            </ul>
            <div className="chooseLang">
                <ChooseLanguage
                    options={props.options}
                    handleChooseLang={props.handleChooseLang}
                    choosenLang={props.choosenLang}
                />
            </div>
        </div>
    )
}

export default HangmanMenu;
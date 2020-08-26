import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import ChooseLanguage from './ChooseLanguage';
import { HangmanContext } from '../../contexts/HangmanContext';

const HangmanMenu = () => {
    const { mount } = useContext(HangmanContext);

    return (
        <>
            <div className="HangmanMenu left">
                <ul>
                    <li>Rules</li>
                    <li onClick={mount}>New&nbsp;Game</li>
                    <li><Link to='/'>Start&nbsp;Menu</Link></li>
                </ul>
            </div>
            <div className="HangmanMenu right">
                <ChooseLanguage />
            </div>
        </>
    )
}

export default HangmanMenu;
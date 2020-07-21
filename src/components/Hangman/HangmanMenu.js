import React from 'react';
import { Link } from 'react-router-dom';

const HangmanMenu = () => {
    return (
        <div className="HangmanMenu left">
            <ul>
                <li onclick="select(this)">
                    <span>Rules</span>
                </li>
                <li onclick="select(this)">
                    <span>New&nbsp;Game</span>
                </li>
                <li onclick="select(this)">
                  <Link to='/'>Exit</Link>
                </li>
            </ul>
        </div>
    )
}

export default HangmanMenu;
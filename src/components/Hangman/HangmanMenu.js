import React from 'react';

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
                    <span>Exit</span>
                </li>
            </ul>
        </div>
    )
}

export default HangmanMenu;
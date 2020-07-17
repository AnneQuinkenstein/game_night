import React from 'react'; 

const HangmanMenu = () => {
    return (
        <div class="HangmanMenu">
        <ul>
            <li onclick="select(this)">
                <span>Rules</span>
            </li>
            <li onclick="select(this)">
                <span>New Game</span>
            </li>
            <li onclick="select(this)">
                <span>Exit</span>
            </li>
        </ul>
    </div>
    )
}

export default HangmanMenu;
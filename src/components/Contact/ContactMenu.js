import React from 'react';
import { Link } from 'react-router-dom';


const ContactMenu = () => {

    return (
        <div className="ContactMenu">
            <ul>
                <li><Link to='/hangman'>Hangman&nbsp;Game</Link></li>
                <li><Link to='/title'>Start&nbsp;Menu</Link></li>
            </ul>
        </div>
    )
}

export default ContactMenu; 
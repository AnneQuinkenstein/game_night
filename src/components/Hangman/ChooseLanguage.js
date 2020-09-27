import React, { useContext } from 'react';
import { HangmanContext } from '../../contexts/HangmanContext';


const ChooseLanguage = () => {
    const { options, choosenLang, handleChooseLang } = useContext(HangmanContext);

    return (
        <ul>
            {options.map(opt => <li className={choosenLang === opt? 'selected': null} onClick={(e)=> handleChooseLang({opt},e)} key={opt}> {opt} </li>)} 
        </ul>
    )
}

export default ChooseLanguage;
 
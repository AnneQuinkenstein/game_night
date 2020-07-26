import React from 'react';



const ChooseLanguage = (props) => {
    
    return (
        <ul>
            {props.options.map(opt => <li onClick={(e)=> props.handleChooseLang({opt},e)}> {opt} </li>)}
        </ul>
    )
}

export default ChooseLanguage;
